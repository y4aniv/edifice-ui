import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonorientationenligne = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.14 1.83c-8.6 0-8.72 0-9.3.27-.3.14-.72.45-.94.67-.67.8-.74.91-.72 7.5h3.8c-.05 0-.05 0-.05-.02 0-.05.14-.24.34-.36.29-.24.48-.27 1.78-.27 2.26 0 2.28-.14.33-2.14-1.56-1.59-1.66-1.8-1.22-2.52.24-.41.84-.68 1.32-.56.17.05.91.7 1.66 1.45 1.9 1.9 2.07 1.87 2.07-.44.02-1.58.07-1.78.6-2.06.4-.22.77-.17 1.1.16.3.3.32.39.32 1.76 0 1.51.1 1.95.45 1.95.12 0 .85-.6 1.62-1.37.79-.8 1.53-1.4 1.73-1.45.72-.19 1.46.39 1.46 1.1 0 .56-.16.8-1.6 2.27-1.71 1.73-1.71 1.75.52 1.85 1.28.05 1.64.1 1.85.27.12.12.24.28.24.36l-.04.02h3.7c0-5.53-.05-6.25-.24-6.7a3.8 3.8 0 0 0-.65-.97c-.87-.82-.48-.77-10.12-.77zm0 5.9c-.55 0-.81.38-.81 1.2 0 .35-.03.84-.08 1.05l-.04.3h1.9v-.9c0-1.2-.27-1.66-.97-1.66zM1.18 10.45v2.62c.02 8.06.05 8.56.26 8.97.46.85 1.1 1.4 1.97 1.66.17.05 4.1.1 8.69.1 9.11.02 9.09.02 10-.67.26-.2.58-.65.74-.99l.32-.65V10.46H1.18zM6.76 12c.31 0 .55.07.72.27.19.19.26.43.26.74s-.07.58-.26.75c-.17.19-.41.26-.72.26-.34 0-.58-.07-.75-.26-.19-.17-.26-.44-.26-.75s.07-.57.26-.74c.17-.2.41-.27.75-.27m-3.22 0c.12 0 .21.03.3.07.1.08.18.15.22.27.12-.12.22-.2.34-.24a.6.6 0 0 1 .34-.1c.19 0 .33.05.43.2.12.12.17.28.17.52v1.25h-.6v-1.2c0-.07-.03-.12-.03-.17l-.1-.07c-.05-.03-.09-.02-.16-.02-.05 0-.1 0-.14.02-.05 0-.1.05-.17.07v1.38h-.6v-1.21c0-.08-.03-.12-.05-.16 0-.03-.05-.05-.07-.08-.05-.02-.1-.02-.17-.02s-.12 0-.17.02c-.05.03-.12.05-.14.08v1.37h-.6v-1.93h.6v.22c.1-.1.19-.15.29-.2s.19-.07.3-.07zm5.84 0c.19 0 .36.05.48.17.1.12.17.31.17.55v1.25h-.6v-.96c0-.07 0-.14-.03-.21 0-.1 0-.15-.02-.17-.03-.05-.05-.07-.1-.1s-.1-.02-.17-.02-.12 0-.16.02c-.05 0-.12.05-.2.07v1.37h-.57v-1.92h.57v.22c.12-.1.22-.15.32-.2s.19-.07.31-.07m-2.62.41-.17.02-.12.1-.1.2-.02.28.02.3c.03.06.05.11.1.16.02.05.07.07.12.1s.1.04.17.04c.04 0 .1-.02.14-.05.05 0 .1-.04.12-.1.05-.04.07-.09.1-.16s.02-.17.02-.29 0-.19-.02-.29a.4.4 0 0 0-.1-.17c-.02-.04-.07-.1-.12-.1a.34.34 0 0 0-.14-.04m-.48 2.04h.62v.49h-.62v-.48zm11.03 0h.6v.49h-.6v-.48zm-5.24.2h.6v.55h.56v.43h-.56v.84c0 .04 0 .1.03.15l.07.1c.05.02.1.02.17.02.04 0 .07 0 .12-.03l.12-.02h.04v.4c-.07.03-.14.06-.21.06l-.24.02c-.24 0-.41-.05-.53-.14-.1-.1-.17-.27-.17-.5v-.9h-.24v-.43h.24zm3.75 0h.6v.55h.56v.43h-.56v.84c0 .04 0 .1.03.15l.07.1c.05.02.1.02.17.02.05 0 .07 0 .12-.03l.12-.02h.05v.4c-.08.03-.15.06-.22.06l-.24.02c-.24 0-.4-.05-.53-.14-.1-.1-.17-.27-.17-.5v-.9h-.24v-.43h.24zm-12.62.5c.34 0 .58.07.74.27.2.19.27.43.27.74s-.07.58-.27.75c-.16.19-.4.29-.74.29q-.48 0-.72-.3c-.2-.16-.27-.43-.27-.74s.07-.55.27-.74c.16-.2.4-.27.72-.27m5.14 0c.32 0 .53.07.68.24.16.15.24.39.24.67v.22H7.9c0 .14.05.27.14.34.12.1.27.12.46.12.12 0 .24-.03.36-.07s.22-.1.27-.15h.07v.5c-.12.06-.27.1-.36.13-.12.02-.27.02-.41.02-.36 0-.65-.07-.84-.26a.9.9 0 0 1-.3-.72c0-.34.1-.58.3-.77.17-.17.43-.27.74-.27zm11 0c.3 0 .57.07.74.27s.26.43.26.74-.1.58-.26.75c-.2.19-.43.29-.75.29s-.55-.1-.74-.3c-.17-.16-.27-.43-.27-.74s.1-.55.27-.74c.2-.2.43-.27.74-.27zm-5.03 0c.33 0 .57.05.72.17.14.1.24.26.24.5v1.3h-.6v-.19a.5.5 0 0 1-.12.07c-.03.05-.07.08-.12.1s-.12.05-.17.05c-.07.02-.14.02-.22.02-.16 0-.3-.05-.43-.17s-.17-.26-.17-.43a.7.7 0 0 1 .08-.34c.07-.1.14-.16.26-.21.1-.05.24-.1.4-.1a3 3 0 0 1 .51-.05v-.02c0-.1-.04-.17-.14-.22a.84.84 0 0 0-.67 0c-.1.03-.2.05-.24.08h-.05v-.46a2.8 2.8 0 0 1 .72-.1m-3.44 0c.2 0 .36.05.46.2.12.11.16.28.16.52v1.25h-.57v-.96c0-.07 0-.14-.03-.22 0-.07 0-.14-.02-.16-.02-.05-.05-.08-.1-.1s-.1-.02-.19-.02c-.05 0-.1 0-.14.02l-.2.07v1.37h-.57V15.2h.58v.22c.12-.1.21-.15.3-.2s.2-.07.32-.07m11.1 0c.2 0 .35.05.47.2.12.11.16.28.16.52v1.25H22v-1.18c0-.08-.02-.14-.04-.16a.2.2 0 0 0-.1-.1c-.02-.02-.1-.02-.17-.02-.05 0-.1 0-.17.02l-.16.07v1.37h-.6V15.2h.6v.22c.1-.1.19-.15.28-.2s.22-.07.34-.07zm-16.15.05h.14v.6h-.05c-.02-.02-.07-.02-.12-.02l-.14-.03c-.07 0-.14.03-.22.03-.07.02-.14.02-.21.07v1.27h-.58V15.2h.58v.29c.14-.12.24-.2.34-.24.1-.03.19-.05.26-.05m.48 0h.58v1.93H6.3zm11.01 0h.6v1.93h-.6zm-9.01.34c-.1 0-.2.02-.27.1-.07.04-.12.14-.12.28h.75c0-.14-.03-.24-.08-.29-.07-.07-.16-.1-.29-.1zm-5.1.05c-.05 0-.1 0-.15.02-.04 0-.07.05-.12.1-.04.02-.07.1-.1.16s-.02.17-.02.3c0 .11 0 .18.03.28.02.07.05.12.1.17.02.05.07.1.11.1.05.02.1.04.17.04l.15-.02c.04-.03.1-.07.12-.1a.5.5 0 0 0 .1-.19l.02-.29c0-.1-.03-.19-.03-.29a.4.4 0 0 0-.1-.17c-.02-.04-.07-.07-.11-.1s-.1-.02-.17-.02zm16.13 0c-.04 0-.1 0-.14.02-.05 0-.1.05-.14.1-.03.02-.05.1-.08.16s-.02.17-.02.3c0 .11 0 .18.02.28l.08.17c.04.05.07.1.12.1l.16.04.17-.02.12-.1c.03-.05.05-.12.07-.19s.03-.17.03-.29c0-.1 0-.19-.03-.29l-.07-.17-.12-.1c-.05-.02-.12-.02-.17-.02zm-4.66.64c-.07 0-.17 0-.24.03l-.22.02a.3.3 0 0 0-.14.1c-.02.05-.05.1-.05.14s0 .08.03.1l.04.07c.02.02.05.05.1.05.02.02.07.02.14.02s.12-.02.2-.05c.04-.02.1-.04.14-.1zm4.62 1.38h.24l.16.02v.43h-.02c-.05 0-.07 0-.12-.02-.02 0-.07-.03-.12-.03-.12 0-.2.03-.24.08s-.07.12-.07.26h.45v.43h-.43v1.5h-.58v-1.5h-.26v-.43h.26v-.05c0-.24.05-.4.17-.53s.32-.16.56-.16m-11.21 0h.6v2.66h-.6zm1.13 0h.63v.48H9.2v-.48zm-5.96.7c.29 0 .53.07.67.23.14.15.22.39.22.68v.21H2.79c.02.15.07.27.17.34.1.1.26.12.45.12.12 0 .24-.02.36-.07s.2-.1.27-.15h.07v.5c-.14.06-.26.1-.38.13s-.24.02-.39.02c-.36 0-.65-.07-.84-.26-.2-.17-.29-.41-.29-.72s.1-.58.27-.77c.19-.17.45-.27.77-.27zm12.74 0c.31 0 .53.07.67.23.15.15.24.39.24.68v.21h-1.34c0 .15.04.27.14.34.12.1.27.12.46.12.12 0 .24-.02.36-.07s.22-.1.26-.15h.08v.5c-.12.06-.27.1-.39.13-.1.02-.24.02-.38.02-.37 0-.65-.07-.85-.26-.19-.17-.29-.41-.29-.72s.1-.58.27-.77c.2-.17.46-.27.77-.27zm-10.22 0c.2 0 .36.07.46.19.12.12.17.28.17.52v1.25h-.58v-.93l-.02-.24a.3.3 0 0 0-.05-.17c0-.05-.05-.07-.1-.1-.02-.02-.1-.02-.17-.02-.04 0-.1 0-.16.02l-.17.1v1.35h-.58v-1.93h.58v.22c.1-.07.19-.15.29-.2a.9.9 0 0 1 .33-.07zm5.3 0c.09 0 .18.02.26.04.1.02.16.05.24.1l.02-.1h.55v1.7c0 .18-.02.34-.07.46s-.12.22-.19.3c-.1.07-.2.11-.34.14-.12.05-.26.05-.4.05-.13 0-.27 0-.4-.03-.11 0-.2-.02-.3-.05v-.48h.07c.07.03.17.05.26.07s.2.05.27.05c.12 0 .21-.02.26-.05.08 0 .12-.04.17-.07l.07-.14a.6.6 0 0 0 .03-.22v-.02c-.08.05-.15.1-.24.14a.9.9 0 0 1-.3.05c-.26 0-.45-.07-.6-.24-.11-.17-.19-.4-.19-.74 0-.15.03-.3.05-.41a.9.9 0 0 1 .2-.3c.07-.09.16-.14.26-.18s.22-.08.31-.08zm2.85 0c.2 0 .34.07.46.19s.17.28.17.52v1.25h-.6V19.1a.3.3 0 0 0-.05-.17.2.2 0 0 0-.1-.1c-.02-.02-.1-.02-.17-.02-.04 0-.1 0-.16.02-.05.03-.12.05-.17.1v1.35h-.6v-1.93h.6v.22l.29-.2a.7.7 0 0 1 .33-.07zm7.2.04h.14v.6h-.05c-.03-.02-.07-.02-.12-.02h-.36l-.22.07v1.27h-.57v-1.92h.57v.29c.12-.12.24-.2.34-.24.1-.02.2-.05.26-.05zm-11.89 0h.58v1.92h-.58zm-6.03.34c-.12 0-.22.02-.3.1-.06.04-.09.14-.11.28h.77c0-.12-.02-.21-.1-.29-.04-.07-.14-.1-.26-.1zm12.74 0c-.1 0-.19.02-.26.1-.07.04-.12.14-.12.28h.74c0-.12-.02-.21-.1-.29-.04-.07-.14-.1-.26-.1zm-4.64.07c-.14 0-.26.05-.34.14-.07.08-.12.22-.12.39s.03.31.1.38c.07.08.17.1.29.1.07 0 .12 0 .17-.02l.17-.08v-.86l-.12-.05zm6.04.84h.6v.67h-.6z" />
  </svg>
);
export default SvgMonorientationenligne;
