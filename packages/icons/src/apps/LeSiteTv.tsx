import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeSiteTv = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 24"
    width="24"
    height="24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.9 2.55c-.03 0-.05.05-.05.07 0 .05.62.8.8.97.04.02.28.3.57.65s.55.62.58.64c.21.2 1.05 1.25 1.03 1.28-.02 0-1.42.02-3.1.02s-3.1.03-3.15.03C.5 6.25.5 6.45.5 7.84c0 1.47 0 1.59.1 1.61.04.03 1.53.05 3.31.05h3.25l.02.12c0 .12-.24.4-1.3 1.47-1.87 1.9-2.07 2.11-2.04 2.14s.96.04 2.09.04h2.04l.97-.98c1.37-1.4 3.36-3.49 3.84-3.97.22-.22.39-.46.39-.5 0-.03-1.18-1.23-2.6-2.67l-2.6-2.6H3.9zM.46 14.98v7h.62v-7.04H.77c-.2-.03-.29 0-.31.04zm9.52-.02v.89c.02.05.14.05.34.05l.3-.03v-.93h-.3c-.2-.03-.32 0-.34.02zm2 .46-.3.21.03.58c0 .31-.02.6-.05.6 0 .03-.1.05-.19.05-.27.05-.29.07-.27.36.05.27.12.34.34.34.1 0 .15.02.15.04.02.05.02.8 0 1.64 0 1.88.04 2.28.33 2.57.2.2.39.24.84.2.24-.03.3-.08.24-.41-.04-.32-.14-.44-.4-.44-.15 0-.2-.02-.24-.12-.05-.16-.08-3.44-.03-3.48.03-.03.12-.03.24-.03.3.03.34-.05.39-.34.02-.21 0-.24-.12-.28-.08-.05-.2-.05-.27-.05-.24.05-.26 0-.29-.84 0-.53-.02-.8-.07-.82-.02 0-.2.1-.34.21zm8.22 0-.27.21v.58c0 .31 0 .6-.02.6-.02.03-.1.05-.2.05-.26.05-.28.07-.26.36.03.27.1.34.34.34.07 0 .14.02.14.04v1.64c0 1.88.05 2.28.32 2.57.19.2.4.24.84.2.26-.03.29-.08.24-.41-.05-.32-.15-.44-.39-.44-.16 0-.19-.02-.24-.12-.07-.16-.1-3.44-.04-3.48.02-.03.14-.03.24-.03.28.03.36-.05.38-.34.02-.21.02-.24-.1-.28-.07-.05-.19-.05-.26-.05-.27.05-.29 0-.29-.84 0-.53-.05-.8-.07-.82-.05 0-.2.1-.36.21zM3.08 16.84c-.63.24-1.06.93-1.2 2.02-.08.5-.08.67 0 1.17.07.48.12.7.28 1.06.2.41.77.92 1.01.92.08 0 .2.02.27.04.1.08.22.08.5 0 .7-.12 1.01-.4 1.35-1.22.05-.1.1-.24.1-.3 0-.09-.17-.18-.43-.18-.2 0-.22.02-.32.26-.24.6-.48.77-1.13.75-.26-.03-.65-.36-.82-.75-.12-.31-.21-.89-.12-.94.05-.02.68-.04 1.42-.04l1.35.02.02-.14c.03-.08.05-.32.03-.56-.05-1.3-.77-2.23-1.73-2.2-.2 0-.44.04-.58.09zm.94.67c.38.17.65.58.7 1.1.02.2 0 .27-.05.27H2.6c-.05 0-.08-.07-.05-.31.07-.5.36-.9.82-1.08.24-.1.33-.1.65.02zm2.86-.67c-.5.19-.85.72-.85 1.34 0 .39.1.65.34.97.17.21.46.36 1.16.62.89.34 1.1.63.84 1.15-.12.32-.36.44-.75.44-.36 0-.77-.17-.77-.32 0-.04-.02-.1-.04-.14-.05-.02-.1-.17-.15-.29-.05-.21-.05-.24-.26-.24-.32-.02-.44.07-.37.39.05.45.37.93.73 1.15.21.12.91.24 1.05.14.1-.02.2-.04.27-.04.12 0 .48-.22.62-.39.2-.24.3-.4.39-.82.1-.38.1-.38 0-.72-.1-.26-.17-.4-.39-.62-.14-.15-.28-.27-.33-.27-.03 0-.15-.05-.27-.1-.1-.04-.24-.11-.31-.16a.856.856 0 0 0-.24-.05c-.12 0-.6-.29-.72-.43-.24-.3-.12-.77.21-.94.24-.12.53-.12.7-.02.24.1.43.33.43.48 0 .07.05.16.1.24.1.12.12.12.39.04.16-.04.26-.1.24-.16l-.05-.3a1.2 1.2 0 0 0-.84-.95 1.82 1.82 0 0 0-1.13 0zm7.76 0c-.52.24-.86.67-1.08 1.41a6.11 6.11 0 0 0 .05 2.6c0 .05.05.12.1.17.04.02.07.1.07.14 0 .12.29.41.58.65.45.34 1.27.34 1.77 0 .27-.14.6-.57.6-.7 0-.04.05-.11.1-.19.05-.04.07-.19.07-.3 0-.23-.1-.3-.43-.25-.14 0-.2.02-.22.14-.02.17-.21.49-.43.68-.14.14-.19.17-.53.17-.31 0-.38-.03-.55-.15-.39-.29-.58-.7-.63-1.22 0-.27 0-.37.08-.37h1.34c1.23.03 1.3 0 1.4-.1.07-.06.1-.16.07-.35l-.07-.58a2.05 2.05 0 0 0-.24-.82 1.9 1.9 0 0 1-.1-.21c-.1-.2-.53-.6-.8-.72a1.6 1.6 0 0 0-1.15 0zm.9.64c.43.2.67.58.74 1.09.02.24 0 .31-.05.31H14.2c-.12 0-.1-.4.02-.67.17-.36.43-.63.72-.72.32-.12.34-.12.6 0zm-5.49-.6c-.05.03-.07.58-.07 2.53 0 1.37.02 2.52.05 2.55.05.05.48.02.55-.05.07-.05.07-4.93.03-4.98s-.46-.1-.56-.05m11.71 0c-.24.03-.24.08-.14.37.05.1.1.33.17.52.04.2.12.46.14.6l.17.6.33 1.26.17.62.17.55.07.37c0 .16.22.24.53.21.24 0 .24 0 .36-.31.05-.17.12-.46.2-.65.11-.53.3-1.2.48-1.83.02-.17.12-.46.16-.65.2-.8.27-.98.34-1.25.12-.38.1-.45-.24-.43-.14.02-.29.02-.29.02-.07 0-.21.44-.21.56 0 .07-.05.24-.1.38s-.12.41-.17.6c-.07.32-.14.6-.34 1.33-.16.7-.26.96-.3.96-.03-.03-.08-.07-.08-.15 0-.12-.1-.45-.27-1.05a22.4 22.4 0 0 1-.33-1.3l-.17-.56c-.02-.14-.07-.3-.07-.4 0-.15-.22-.41-.31-.41l-.27.04zm-3.85 4.21c-.04.1 0 .77.05.84.07.05.5.08.6.03.1-.1.15-.84.05-.9-.14-.09-.65-.06-.7.03z" />
  </svg>
);
export default SvgLeSiteTv;
