import {
  FormEvent,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Applications, Search } from "@edifice-ui/icons";
import { App, odeServices } from "edifice-ts-client";
/*
 * Augmented definition of a resource, until behaviours are dropped.
 * The path would otherwise be found by using `IWebResourceService.getViewUrl(resource)`
 */
import { ILinkedResource } from "edifice-ts-client";
import { useTranslation } from "react-i18next";

import {
  AppIcon,
  Dropdown,
  EmptyScreen,
  FormControl,
  Input,
} from "../../components";
import { useOdeTheme, usePaths, useResourceSearch } from "../../core";
import { useDebounce } from "../../hooks";
import LinkerCard from "../LinkerCard/LinkerCard";

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
  /** Notify when resources selection changes */
  onSelect?: (resources: ILinkedResource[]) => void;
}

/** The InternalLinker component */
const InternalLinker = ({
  appCode,
  onChange,
  onSelect,
}: InternalLinkerProps) => {
  const { t } = useTranslation();
  const { theme } = useOdeTheme();
  const [imagePath] = usePaths();
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
  const [resources, setResources] = useState<ILinkedResource[] | undefined>([]);
  // Function to load and display resources of the currently selected application.
  const loadAndDisplayResources = useCallback(
    (search?: string) => {
      async function load() {
        if (selectedApplication) {
          try {
            const resources = (
              await loadResources({
                application: selectedApplication.application,
                search,
                types: [selectedApplication.application],
                filters: {},
                pagination: { startIdx: 0, pageSize: 300 }, // ignored at the moment
              })
            ).sort((a, b) => (a.modifiedAt < b.modifiedAt ? 1 : -1));

            setResources(resources);
            return; // end here
          } catch {
            // continue on error
          }
        }
        setResources([]);
      }
      load();
    },
    [loadResources, selectedApplication],
  );

  // List of selected documents
  const [selectedDocuments, setSelectedDocuments] = useState<ILinkedResource[]>(
    [],
  );

  // Update dropdown when available applications list is updated.
  useEffect(() => {
    (async () => {
      const appPromises = resourceApplications.map((application) =>
        odeServices.session().getWebApp(application),
      );
      const webApps = await Promise.all(appPromises);
      setOptions(
        resourceApplications
          .map((application, index) => {
            return {
              application,
              displayName: t(webApps[index]?.displayName ?? application),
              icon: <AppIcon app={webApps[index]}></AppIcon>,
            } as ApplicationOption;
          })
          .sort((app1, app2) =>
            app1.displayName.localeCompare(app2.displayName),
          ),
      );
    })();
  }, [resourceApplications, t]);

  // Load and display search results when debounce is over
  useEffect(() => {
    loadAndDisplayResources(debounceSearch);
  }, [loadAndDisplayResources, debounceSearch]);

  // Notify parent when resources selection changes.
  useEffect(() => {
    onSelect?.(selectedDocuments);
  }, [selectedDocuments, onSelect]);

  // Notify parent when an application is selected.
  const handleOptionClick = (option: ApplicationOption) => {
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

  // Handle [de-]selection of a resource by the user.
  const toggleResourceSelection = (resource: ILinkedResource) => {
    const index = selectedDocuments.findIndex(
      (doc) => doc.assetId === resource.assetId,
    );
    if (index < 0) {
      setSelectedDocuments((prevState) => [...prevState, resource]);
    } else {
      setSelectedDocuments(selectedDocuments.filter((value, i) => i !== index));
    }
  };

  return (
    <div className="internal-linker flex-grow-1 w-100 rounded border gap-0">
      <div className="search d-flex bg-light rounded-top border-bottom">
        <div className="flex-shrink-1 px-8 py-12 border-end">
          <Dropdown overflow>
            <Dropdown.Trigger
              icon={
                <div className="pe-8">
                  {selectedApplication?.icon || <Applications />}
                </div>
              }
              label={t(
                selectedApplication?.displayName || "Choix de l'application",
              )}
              variant="ghost"
              size="md"
            />
            <Dropdown.Menu>
              {options?.map((option) => (
                <Dropdown.Item
                  key={option.application}
                  icon={option.icon}
                  onClick={() => handleOptionClick(option)}
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
                placeholder={t("Rechercher")}
                size="lg"
                type="search"
                disabled={selectedApplication ? false : true}
                className="border-start-0"
                onChange={handleSearchChange}
              />
            </FormControl>
          </form>
        </div>
      </div>

      {selectedApplication && resources && resources.length > 0 && (
        <div>
          {resources.map((resource) => {
            const isSelected =
              selectedDocuments.findIndex(
                (doc) => doc.assetId === resource.assetId,
              ) >= 0;
            return (
              <LinkerCard
                key={resource.assetId}
                doc={resource}
                isSelected={isSelected}
                onClick={() => toggleResourceSelection(resource)}
              />
            );
          })}
        </div>
      )}

      {selectedApplication && resources && resources.length <= 0 && (
        <div className="d-flex justify-content-center mt-16">
          <EmptyScreen
            imageSrc={`${imagePath}/${theme?.bootstrapVersion}/illu-empty-search-${selectedApplication.application}.svg`}
            text={t("Aucune ressource trouvée pour votre recherche.")}
            className="mt-16"
          />
        </div>
      )}

      {!selectedApplication && (
        <div className="d-flex justify-content-center mt-32">
          <EmptyScreen
            imageSrc={`${imagePath}/${theme?.bootstrapVersion}/illu-empty-search.svg`}
            text={t(
              "Sélectionnez, en haut à gauche, l’application dans laquelle se trouve la ressource que vous voulez ajouter !",
            )}
            className="mt-32"
          />
        </div>
      )}
    </div>
  );
};

export default InternalLinker;
