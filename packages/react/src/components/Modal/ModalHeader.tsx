import { ReactNode, useEffect, useRef } from "react";

import { Close } from "@edifice-ui/icons";

import { useModalContext } from "./ModalContext";
import IconButton from "../Button/IconButton";

export interface ModalHeaderProps {
  onModalClose: () => void;
  children: ReactNode;
}

/**
 * Modal Header
 */
const ModalHeader = (props: ModalHeaderProps) => {
  const { onModalClose, children } = props;
  const { ariaLabelId, focusId } = useModalContext();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!focusId) {
      closeButtonRef.current?.focus();
    }
  }, [focusId]);

  return (
    <div className="modal-header">
      <h2 id={ariaLabelId} className="modal-title" tabIndex={-1}>
        {children}
      </h2>
      <IconButton
        ref={closeButtonRef}
        aria-label="Close"
        color="tertiary"
        icon={<Close />}
        type="button"
        variant="ghost"
        title="Delete"
        onClick={onModalClose}
        className="btn-close"
      />
    </div>
  );
};

ModalHeader.displayName = "Modal.Header";

export default ModalHeader;
