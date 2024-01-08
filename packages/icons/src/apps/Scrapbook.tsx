import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScrapbook = ({
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
    <path d="M2.73 17.34v-.1a.32.32 0 0 1 .32-.32h1.36a.32.32 0 0 1 .32.32v.1a.32.32 0 0 1-.32.32H3.05a.32.32 0 0 1-.32-.32m.32-3.01h1.36a.32.32 0 0 0 .32-.32v-.1a.32.32 0 0 0-.32-.32H3.05a.32.32 0 0 0-.32.32v.1a.32.32 0 0 0 .32.32m0-3.32h1.36a.32.32 0 0 0 .32-.32v-.1a.32.32 0 0 0-.32-.32H3.05a.32.32 0 0 0-.32.32v.1a.32.32 0 0 0 .32.32m0-3.37h1.36a.32.32 0 0 0 .32-.32v-.1a.32.32 0 0 0-.32-.31H3.05a.32.32 0 0 0-.32.32v.1a.32.32 0 0 0 .32.31M14.4 4.68l4.39-1.23v4.07a1.8 1.8 0 0 0-1 .05c-.79.27-1.25.96-1.08 1.52s.93.81 1.69.54c.66-.22 1.13-.64 1.13-1.23V1.93c0-.34-.25-.54-.64-.4l-4.74 1.28c-.39.12-.49.34-.49.7v2.07h.74zm-2.35 9.29 4.14 1.14v2.96c-.51.19-1.03.42-1.52.66-.17.1-.22.19-.12.39.22.42.37.88.51 1.32 0 .05.03.1-.02.1l-.05-.05c-.39-.36-.71-.76-1.17-1.13a.95.95 0 0 0-.98-.2c-.71.25-1.45.47-2.16.67-.2.05-.4.12-.6.12-.09-.12-.02-.2 0-.3l1.48-5.41c.07-.3.2-.35.5-.27zm.8 2.55c.35.15.72.05.86-.24s0-.69-.29-.84c-.34-.17-.74-.05-.88.27-.15.27 0 .67.32.81zm-8.12 4.19v-.1a.32.32 0 0 0-.32-.32H3.05a.32.32 0 0 0-.32.32v.1a.32.32 0 0 0 .32.32h1.36a.32.32 0 0 0 .32-.32m16.14-5.02-4.68-1.26v.68l3.85 1.07c.15.02.4 0 .32.27l-1.05 3.87c-.32-.56-.6-1.07-.91-1.54-.71-1.13-.86-1.18-2.14-.74l-.07.03v3.8a.47.47 0 0 1-.47.46h-.58l3.65 1.01c.32.08.44.05.54-.27a560 560 0 0 1 1.86-6.86c.1-.35 0-.42-.32-.52M9.52 20.8c-.32-.1-.42-.17-.35-.51.64-2.28 1.28-4.56 1.9-6.87.07-.32.21-.34.53-.27l4.59 1.27V6.05a.48.48 0 0 0-.47-.47H14.4v3.8c0 .42-.47 1-1.1 1.23-.79.27-1.55.03-1.72-.54s.32-1.25 1.08-1.52a1.8 1.8 0 0 1 1-.05V5.58h-9.3a.48.48 0 0 0-.46.47v.68h.56a.51.51 0 0 1 .47.2c.15.2.17.39.05.61-.1.2-.32.3-.54.3-.17-.03-.34 0-.54 0v2.23h.57c.34 0 .58.22.58.53s-.24.57-.58.57H3.9v2.26h.3c.58 0 .85.17.85.53 0 .4-.25.57-.86.57H3.9v2.23h.56c.42-.02.72.37.57.74-.1.25-.3.37-.57.37H3.9v2.2h.54c.42.03.68.4.54.79-.08.22-.3.37-.62.37-.14.02-.29 0-.46 0v.63c0 .28.22.47.49.47h10.75l-.99-.27c-1.54-.42-3.09-.86-4.63-1.25z" />
  </svg>
);
export default SvgScrapbook;
