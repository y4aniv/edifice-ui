import { ComponentPropsWithRef, forwardRef, ReactNode, Ref } from "react";

import { Paperclip } from "@edifice-ui/icons";

export interface AttachmentProps extends ComponentPropsWithRef<"div"> {
  /**
   * Name of resource or Folder
   * */
  name?: string;
  /**
   * Actions attachment
   * */
  options: ReactNode;
}

export type AttachmentType = React.FC<AttachmentProps>;

const Attachment = forwardRef(
  (
    { name = "Attachment Name", options, ...restProps }: AttachmentProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className="attachment px-8 py-12" {...restProps}>
        <div className="filename">
          <Paperclip height={22} width={22} />
          <p className="name">{name}</p>
        </div>
        <div className="options px-2">{options}</div>
      </div>
    );
  },
);

Attachment.displayName = "Attachment";
export default Attachment;
