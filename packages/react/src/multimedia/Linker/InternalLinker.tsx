import { ChangeEvent, useEffect, useRef, useState } from "react";

import { App, IResource, odeServices } from "edifice-ts-client";
import { useTranslation } from "react-i18next";

import { useResourceSearch } from "../../core";

/**
 * Definition of an internal link.
 */
type ApplicationOption = {
  application: string;
  displayName: string;
};

/**
 * Properties for the InternalLinker react component.
 */
export interface InternalLinkerProps {
  /** Currently running application */
  appCode: App;
  /** Notify when the user selects an application in the dropdown */
  onChange?: (application?: ApplicationOption) => void;
}

/** The InternalLinker component */
const InternalLinker = ({ appCode, onChange }: InternalLinkerProps) => {
  const { t } = useTranslation();
  const { resourceApplications, loadResources } = useResourceSearch(appCode);

  const [options, setOptions] = useState<Array<ApplicationOption>>();
  const [selectedApplication, setSelectedApplication] = useState<
    ApplicationOption | undefined
  >();
  const [searchTerms, setSearchTerms] = useState<string | undefined>();

  const [resources, setResources] = useState<IResource[] | undefined>([]);

  const focusRef = useRef<HTMLSelectElement>(null);

  // Update dropdown when available applications list is updated.
  useEffect(() => {
    const webApps = resourceApplications.map((application) =>
      odeServices.session().getWebApp(application),
    );
    Promise.all(webApps)
      .then((webApps) =>
        resourceApplications.map((application, index) => {
          return {
            application,
            displayName: webApps[index]?.displayName,
          } as ApplicationOption;
        }),
      )
      .then((apps) => setOptions(apps));
  }, [resourceApplications]);

  // Notify when an application is selected
  useEffect(() => {
    selectedApplication &&
      loadResources({
        application: selectedApplication?.application,
        search: searchTerms,
        types: [selectedApplication.application],
        filters: {},
        pagination: { startIdx: 0, pageSize: 300 }, // ignored at the moment
      }).then((resources) => setResources(resources));
  }, [loadResources, onChange, searchTerms, selectedApplication]);

  // Auto-focus and auto-select content in the link input field.
  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  const handleApplicationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const option = options?.find(
      (option) => option.application === event.target.value,
    );
    onChange?.(option);
    setSelectedApplication(option);
  };
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(event.target.value);
  };

  return (
    <>
      <select ref={focusRef} onChange={handleApplicationChange}>
        {options?.map((option) => {
          return (
            <option
              key={option.application}
              value={option.application}
              selected={selectedApplication?.application === option.application}
            >
              {option.displayName}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder={t("search")}
        onChange={handleSearchChange}
      />
      <div>{resources?.map((resource) => resource.assetId)}</div>
    </>
  );
};

export default InternalLinker;
