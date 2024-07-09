import { useHasWorkflow } from "@edifice-ui/react";

export const useCantoo = () => {
  const isAvailable = useHasWorkflow(
    "org.entcore.portal.controllers.PortalController|optionalFeatureCantoo",
  );

  return { isAvailable };
};
