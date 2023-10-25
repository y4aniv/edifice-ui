import { ReactNode } from "react";

import clsx from "clsx";

const CardBody = ({
  children,
  space = null,
  flexDirection = "row",
}: {
  space?: "8" | "16" | null;
  flexDirection?: "row" | "column" | null;
  children: ReactNode;
}) => {
  const cardbody = clsx("card-body", {
    "p-8": space === "8",
    "gap-8": space === "8",
    "align-items-start": flexDirection === "column",
    "flex-column": flexDirection === "column",
  });
  return <div className={cardbody}>{children}</div>;
};

CardBody.displayName = "Card.Body";

export default CardBody;
