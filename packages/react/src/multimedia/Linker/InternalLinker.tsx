import {
  FormEvent,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Search } from "@edifice-ui/icons";
import { App, IResource, odeServices } from "edifice-ts-client";
import { useTranslation } from "react-i18next";

import { Dropdown, FormControl, Grid, Input } from "../../components";
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
  const inputRef: Ref<HTMLInputElement> = useRef(null);

  const { resourceApplications, loadResources } = useResourceSearch(appCode);

  const [options, setOptions] = useState<Array<ApplicationOption>>();
  const [selectedApplication, setSelectedApplication] = useState<
    ApplicationOption | undefined
  >();
  const [searchTerms, setSearchTerms] = useState<string | undefined>();

  const [resources, setResources] = useState<IResource[] | undefined>([]);

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

  const handleClick = (option: ApplicationOption) => {
    onChange?.(option);
    setSelectedApplication(option);
  };

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      setSearchTerms(inputRef.current?.value);
      e.stopPropagation();
      e.preventDefault();
    },
    [inputRef],
  );

  const handleToggleRssSelect = (/*_rss: IResource*/) => {
    /*
    const idx = selectedDocuments.findIndex((d) => d._id === doc._id);
    if (idx < 0) {
      selectedDocuments.push(doc);
    } else {
      selectedDocuments.splice(idx, 1);
    }
    setSelectedDocuments([...selectedDocuments]);
    props.onSelect(selectedDocuments);
    */
  };

  return (
    <Grid className="internal-linker w-100 rounded border gap-0">
      <Grid.Col sm="4" md="8" xl="12" className="border-bottom">
        <Grid className="bg-light rounded-top gap-0">
          <Grid.Col sm="1" md="2" xl="3" className="border-end">
            <div className="p-8">
              <Dropdown>
                <Dropdown.Trigger
                  label={t("Dernière modif.")}
                  variant="ghost"
                />
                <Dropdown.Menu>
                  {options?.map((option) => (
                    <Dropdown.Item onClick={() => handleClick(option)}>
                      Edit
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Grid.Col>
          <Grid.Col sm="3" md="6" xl="9">
            <form
              className="gap-16 d-flex w-100 align-items-center px-16 py-8"
              onSubmit={handleSubmit}
            >
              <FormControl className="input-group" id="search">
                <div className="input-group-text border-end-0">
                  <Search />
                </div>
                <Input
                  noValidationIcon
                  ref={inputRef}
                  placeholder={t("Placeholder text")}
                  size="md"
                  type="search"
                  className="border-start-0"
                />
              </FormControl>
            </form>
          </Grid.Col>
        </Grid>
      </Grid.Col>

      <Grid.Col sm="4" md="8" xl="12" className="list">
        <ul>
          {resources?.map((resource) => (
            <li>
              <p>
                {resource.name}, {resource.creatorName}
              </p>
              <button onClick={() => handleToggleRssSelect(resource)}>
                Select
              </button>
            </li>
          ))}
        </ul>
      </Grid.Col>
    </Grid>
  );
};

export default InternalLinker;
