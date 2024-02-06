import { useState, useEffect } from "react";

import { IResource, odeServices } from "edifice-ts-client";

const useResource = (application: string, resourceId: string) => {
  const [resource, setResource] = useState<IResource>(null!);

  useEffect(() => {
    if (resourceId === "") {
      console.warn("resourceId must be an assetId and not an empty string");
      return;
    }

    (async () => {
      const assetId = [resourceId];

      const response = await odeServices.resource(application).searchContext({
        application,
        filters: {
          folder: undefined,
          owner: undefined,
          shared: undefined,
          public: undefined,
        },
        pagination: {
          startIdx: 0,
          pageSize: assetId.length,
        },
        types: [application],
        asset_id: assetId,
      });

      setResource(response.resources[0]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return resource;
};

export default useResource;
