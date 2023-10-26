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

import { AppIcon, Dropdown, FormControl, Input } from "../../components";
import { useResourceSearch } from "../../core";
import { useDebounce } from "../../hooks";

/**
 * Definition of an internal link.
 */
type ApplicationOption = {
  icon?: JSX.Element;
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

  // Get available applications, and a function to load their resources.
  const { resourceApplications, loadResources } = useResourceSearch(appCode);

  // List of options (applications with name and icon) to display, for the user to choose.
  const [options, setOptions] = useState<Array<ApplicationOption>>();
  // User selected application
  const [selectedApplication, setSelectedApplication] = useState<
    ApplicationOption | undefined
  >();
  // User search terms (typed in an input) and its debounced equivalent.
  const [searchTerms, setSearchTerms] = useState<string | undefined>();
  const debounceSearch = useDebounce<string>(searchTerms || "", 500);

  // List of resources to display.
  const [resources, setResources] = useState<IResource[] | undefined>([]);
  // Function to load and display resources of the currently selected application.
  const loadAndDisplayResources = useCallback(
    (search?: string) => {
      if (selectedApplication) {
        loadResources({
          application: selectedApplication.application,
          search,
          types: [selectedApplication.application],
          filters: {},
          pagination: { startIdx: 0, pageSize: 300 }, // ignored at the moment
        }).then((resources) => setResources(resources));
      } else {
        setResources([]);
      }
    },
    [loadResources, selectedApplication],
  );

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
            icon: <AppIcon app={webApps[index]}></AppIcon>,
          } as ApplicationOption;
        }),
      )
      .then((apps) => setOptions(apps));
  }, [resourceApplications]);

  // Load and display search results when debounce is over
  useEffect(() => {
    loadAndDisplayResources(debounceSearch);
  }, [loadAndDisplayResources, debounceSearch]);

  // Notify parent when an application is selected.
  const handleClick = (option: ApplicationOption) => {
    onChange?.(option);
    setSelectedApplication(option);
  };

  // Handle search input events (and debounce)
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setSearchTerms(newText.toString());
  };
  const handleSubmit = useCallback(
    (e: FormEvent) => {
      loadAndDisplayResources(searchTerms);
      e.stopPropagation();
      e.preventDefault();
    },
    [loadAndDisplayResources, searchTerms],
  );

  // Handle selection of a resource by the user.
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
    <div className="internal-linker w-100 rounded border gap-0">
      <div className="search d-flex bg-light rounded-top border-bottom">
        <div className="flex-shrink-1 p-8 border-end">
          <Dropdown>
            <Dropdown.Trigger
              icon={selectedApplication?.icon}
              label={t(
                selectedApplication?.displayName || "Choix de l'application",
              )}
              variant="ghost"
            />
            <Dropdown.Menu>
              {options?.map((option) => (
                <Dropdown.Item
                  icon={option.icon}
                  onClick={() => handleClick(option)}
                >
                  {option.displayName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="flex-grow-1 align-self-center">
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
                onChange={handleSearchChange}
              />
            </FormControl>
          </form>
        </div>
      </div>

      <div className="list row">
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
      </div>
    </div>
  );
};

export default InternalLinker;
