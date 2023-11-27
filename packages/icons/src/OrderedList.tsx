import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOrderedList = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={14} height={2} x={8.5} y={11} fill="currentColor" rx={1} />
    <rect width={14} height={2} x={8.5} y={2.5} fill="currentColor" rx={1} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.25.566a.667.667 0 0 1 .378.6v4.667a.667.667 0 0 1-1.333 0v-3.28l-.712.57a.667.667 0 0 1-.833-1.041L3.545.646c.2-.16.474-.191.705-.08M2.833 11v.007A.667.667 0 0 1 1.5 11h.667H1.5v-.015a1.282 1.282 0 0 1 .004-.09 2.304 2.304 0 0 1 .233-.86c.123-.246.318-.512.622-.715C2.67 9.114 3.05 9 3.5 9c.887 0 1.517.4 1.844.979.296.524.324 1.176.086 1.652-.126.25-.389.581-.646.884a29.554 29.554 0 0 1-1.042 1.152h1.425a.667.667 0 1 1 0 1.333h-3a.667.667 0 0 1-.472-1.138l.025-.025.074-.074a57.788 57.788 0 0 0 1.095-1.136c.309-.33.624-.675.88-.975.273-.323.427-.534.468-.617a.516.516 0 0 0-.054-.4c-.071-.127-.237-.302-.683-.302-.217 0-.335.053-.401.097a.505.505 0 0 0-.17.202.973.973 0 0 0-.096.375s0 .001 0 0v-.006"
      clipRule="evenodd"
    />
    <rect width={14} height={2} x={8.5} y={19.5} fill="currentColor" rx={1} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.561 23.25a2.017 2.017 0 0 1-.773-.702l-.002-.002A1.88 1.88 0 0 1 1.5 21.53a.68.68 0 0 1 .187-.485.65.65 0 0 1 .474-.203c.184 0 .352.07.478.208a.68.68 0 0 1 .183.48c0 .122.032.233.098.34.067.103.16.19.284.26a.878.878 0 0 0 .418.096c.254 0 .422-.065.537-.164.11-.094.177-.23.177-.45 0-.14-.03-.252-.085-.347l-.002-.003a.652.652 0 0 0-.232-.247.597.597 0 0 0-.324-.086.7.7 0 0 1-.494-.195l-.004-.004-.004-.004a.68.68 0 0 1-.195-.485c0-.182.065-.354.203-.486a.7.7 0 0 1 .494-.195c.076 0 .15-.018.228-.057.08-.045.143-.1.193-.167a.31.31 0 0 0 .058-.186.32.32 0 0 0-.117-.257.51.51 0 0 0-.362-.12.873.873 0 0 0-.36.073.63.63 0 0 0-.232.174l-.022.03-.032.042a.418.418 0 0 0-.034.054v.007a.73.73 0 0 1-.172.482l-.003.004-.004.004a.628.628 0 0 1-.192.15.662.662 0 0 1-.726-.132l-.008-.01-.008-.008a.695.695 0 0 1-.18-.476c0-.343.1-.592.273-.846.177-.261.419-.462.713-.603.297-.147.624-.218.973-.218.327 0 .632.07.907.214.275.138.498.332.66.584.172.253.255.54.255.852 0 .232-.056.45-.177.644a1.589 1.589 0 0 1-.32.384c.052.038.102.078.15.12.192.168.338.37.43.602.093.225.138.466.138.719 0 .358-.096.688-.29.982l-.002.002c-.19.28-.441.5-.749.661l-.004.003a2.22 2.22 0 0 1-1.012.233c-.401 0-.77-.08-1.1-.248l-.004-.002"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgOrderedList;
