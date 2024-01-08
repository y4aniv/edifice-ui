import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKne = ({
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
    <path d="M1.75 1.59v20.85H22.6V12.22H12.07V1.59zm7.03 2.62c.04 0 .16.07.29.15.19.14.12.24-1.09 1.39l-1.3 1.23L8.15 8.5c1.52 1.6 1.56 1.66.9 1.74-.27.02-.44-.12-1.52-1.3a67 67 0 0 0-1.5-1.61L5.76 7v3.32H5.4c-.22 0-.41-.05-.44-.12s-.04-1.45-.02-3.03l.02-2.89h.75l.05 1.35L5.79 7l.22-.22c.77-.8 2.7-2.57 2.77-2.57M1.9 12.03h9.96v.07H1.9zm16.69.3c.17 0 .21.35.1.49-.08.07-.46.36-.9.63-.84.5-.93.52-1 .33a7.3 7.3 0 0 1 1.8-1.44zm-6.6.06h.13v9.8H12v-9.8zm3.86 2.26h3.17v.53H16.7v2.09h2.33v.53H16.7v2.43h2.74v.52h-3.58v-6.1zm-6.28.05h.24v6l-.29.03c-.26.03-.31 0-2.11-1.92-.39-.41-.85-.92-1.04-1.16-.19-.21-.6-.67-.91-.98-.31-.34-.55-.63-.55-.68s-.05-.1-.1-.1c-.07 0-.12.95-.14 2.41l-.03 2.4-.26.03c-.15.03-.32 0-.34-.04-.05-.03-.07-1.38-.07-2.94 0-2.16.02-2.9.12-2.96.33-.21.55-.07 1.42.9.5.55 1.25 1.34 1.66 1.77s.84.94.98 1.1c.17.2.43.49.6.66l.32.31.02-2.3c.02-1.3.07-2.36.14-2.44.05-.07.2-.12.34-.1z" />
  </svg>
);
export default SvgKne;
