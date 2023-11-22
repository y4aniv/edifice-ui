import { Node, mergeAttributes } from '@tiptap/core';
import { NodeSelection } from '@tiptap/pm/state';

/* Our own model of a link in a rich document. */
export type LinkerAttributes = {
  href: string | null;
  target: '_blank' | null;
  title: string | null;
  'data-id': string | null;
  'data-app-prefix': string | null;
};

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    linker: {
      /**
       * Set a linker node
       */
      setLinker: (attributes: LinkerAttributes) => ReturnType;
      /**
       * Unset a linker node
       */
      unsetLinker: () => ReturnType;
    };
  }
}

/**
 * Extends `Link` extension.
 * Reproduces the legacy angularJs "linker" directive.
 *
 * Link to internal resources may have `title`, `data-id` and `data-app-prefix` attributes :
 * `<a href="/blog#/view/35fa4198-blog_id/5e654c71-article_id" data-app-prefix="blog" data-id="35fa4198-blog_id" target="_blank" title="Voir ce billet de blog" class="ng-scope">/blog#/view/35fa4198-57fe-45eb-94f4-a5e4defff305/5e654c71-1e61-4f84-86dc-6fcfaf33f513</a>`
 */
const Linker = Node.create({
  name: 'linker',
  content: 'text*',
  marks: '',
  group: 'inline',

  inline: true,
  selectable: true,
  atom: true,
  draggable: true,
  isolating: true,
  allowGapCursor: false,

  priority: 1100,
  keepOnSplit: false,

  addOptions() {
    return {
      openOnClick: true,
      HTMLAttributes: {
        target: '_blank',
        title: null,
        class: null,
        'data-id': null,
        'data-app-prefix': null,
      },
      validate: undefined,
    };
  },

  addAttributes() {
    return {
      href: {
        default: null,
      },
      class: {
        default: this.options.HTMLAttributes.class,
      },
      target: {
        default: this.options.HTMLAttributes.target,
        // Sanitize target value
        parseHTML: (element) =>
          element.getAttribute('target') !== '_blank' ? null : '_blank',
      },
      title: {
        default: this.options.HTMLAttributes.title,
      },
      'data-id': {
        default: this.options.HTMLAttributes['data-id'],
      },
      'data-app-prefix': {
        default: this.options.HTMLAttributes['app-prefix'],
      },
    };
  },

  parseHTML() {
    return [{ tag: 'a[href]:not([href *= "javascript:" i])' }];
  },

  renderHTML({ HTMLAttributes }) {
    if (HTMLAttributes.href?.startsWith('javascript:')) {
      return [
        'a',
        mergeAttributes(this.options.HTMLAttributes, {
          ...HTMLAttributes,
          href: '',
        }),
        0,
      ];
    }
    return [
      'a',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      setLinker:
        (attrs) =>
        ({ editor, commands }) => {
          const { from, to, empty } = editor.state.selection;
          // Retrieve selected text, if any
          const text = empty
            ? attrs.title
            : editor.state.doc.textBetween(from, to, ' ');
          // Insert a Linker node with inner text node
          commands.insertContent({
            type: this.name,
            attrs,
            content: [
              {
                type: 'text',
                text,
              },
            ],
          });
          return true;
        },

      unsetLinker:
        () =>
        ({ state, commands }) => {
          // Which Linker node is actually selected ?
          const { node } = state.selection as NodeSelection;
          // Inner text of this node
          const innerText = node?.textContent ?? '';
          // Delete Linker node
          commands.deleteNode(this.name);
          // Replace it by the previous inner text
          commands.insertContent(innerText);
          return true;
        },
    };
  },
});

export { Linker };
export default Linker;
