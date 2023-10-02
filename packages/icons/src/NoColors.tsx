import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNoColors = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 20 20"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#no-colors_svg__a)">
      <path fill="#E13A3A" d="M19.167 0h-3.334l-15 20h3.334l15-20Z" />
    </g>
    <path
      stroke="#E4E4E4"
      d="M.5 4A3.5 3.5 0 0 1 4 .5h12A3.5 3.5 0 0 1 19.5 4v12a3.5 3.5 0 0 1-3.5 3.5H4A3.5 3.5 0 0 1 .5 16V4Z"
    />
    <defs>
      <clipPath id="no-colors_svg__a">
        <path
          fill="#fff"
          d="M0 4a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNoColors;
