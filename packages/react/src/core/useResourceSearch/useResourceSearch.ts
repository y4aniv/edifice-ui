import { useCallback, useEffect, useState } from "react";

import {
  App,
  GetContextParameters,
  SnipletsService,
  odeServices,
} from "edifice-ts-client";

import { useMockedData } from "../../utils";

/**
 * A hook to search for resources produced by applications.
 *
 * @param application The currently running application
 * @returns An object with 2 fields :
 *
 * `resourceApplications: Array<App>`
 * Resources-producing applications the user can use.
 *
 * `loadResources: (filters:GetContextParameters) => void`
 * A search method with filters.
 *
 * Note : until all applications are using the exploration main page,
 * only the first resource of `filter.types` will be considered while searching.
 */
export default function useResourceSearch(application: App) {
  // Needed for storybook to mock calls to backend
  const mock = useMockedData();

  const [resourceApplications, setResourceApplications] = useState<App[]>([]);

  // Init services, only once
  useEffect(() => {
    SnipletsService.registerBehaviours(
      odeServices,
      mock?.app || application,
    ).then(() =>
      setResourceApplications(SnipletsService.resourceProducingApps),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadResources = useCallback(
    async (filters: GetContextParameters) => {
      const resourceType = filters.types[0];
      // If mocked data is available, use it. Otherwise load from server.
      const payload = mock?.loadResources
        ? await mock?.loadResources?.(filters).then((results) =>
            results.map((r) => {
              // Generate random IDs to prevent infinite recursion
              return {
                ...r,
                _id: "" + Math.round(Math.random() * 9999),
              };
            }),
          )
        : await odeServices
            .resource(application, resourceType)
            .searchContext(filters);

      return payload;
    },
    [application, mock],
  );

  return { resourceApplications, loadResources } as {
    resourceApplications: Array<App>;
    loadResources: (filters: GetContextParameters) => void;
  };
}
