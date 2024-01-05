import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgParaschool = ({
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
    <path d="M7.33 20.03a3.53 3.53 0 0 1-2-1.94c-.06-.2-.88-3.03-1.8-6.33-.89-3.3-1.78-6.5-1.97-7.12-.17-.62-.29-1.15-.29-1.17l2.05.48c1.13.29 5.67 1.4 10.12 2.47 5.6 1.37 8.18 2.05 8.4 2.2.35.2.57.47.76.86.34.7.36.98.36 5.99v4.7l-7.64-.02c-6.09 0-7.7-.02-7.99-.12m9.21-2-.14-1.53c-.07-.82-.14-1.52-.12-1.54s1.15.07 2.5.2c1.35.14 2.57.2 2.72.18.72-.19.91-.65.91-2.26 0-.98-.02-1.08-.21-1.58s-.27-.58-.7-.87c-.43-.26-.77-.34-3.56-.91-1.7-.36-3.13-.6-3.13-.56-.02.05.2 2.07.46 4.5l.5 4.4h.4c.2 0 .38-.02.38-.02zm1.62-3.72a12.4 12.4 0 0 1-1.98-.31c-.07-.1-.4-3.66-.36-3.7.07-.08 5.08.88 5.32 1.03.43.26.55.58.57 1.51 0 .46-.02.99-.07 1.18-.14.63-.46.65-3.49.3z" />
  </svg>
);
export default SvgParaschool;
