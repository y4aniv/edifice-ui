/**
 * Tabs Component
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import TabsItem, { TabsItemProps } from "./TabsItem";
import TabsList from "./TabsList";
import TabsPanel from "./TabsPanel";

export interface TabsProps {
  /**
   * Selected tab, by default.
   */
  defaultId?: string;
  /**
   * Items to be displayed
   */
  items: TabsItemProps[];
  /**
   * Get notified when a tab is selected
   */
  onChange?: (tab: TabsItemProps) => void;
}

const TabsContext = createContext<{
  activeTab?: string;
  tabsRef: React.MutableRefObject<never[]>;
  setSelectedTab: (key: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}>(null!);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      `Tabs compound components cannot be rendered outside the Tabs component`,
    );
  }
  return context;
}

/**
 * Tab Content displayed one at a time when a Tab Item is selected
 */
const Tabs = ({ defaultId, items, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultId || "");
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  const setSelectedTab = useCallback((id: string) => {
    setActiveTab(id);
  }, []);

  useEffect(() => {
    const currentItem = items.find((item) => item.id === activeTab);
    currentItem && onChange?.(currentItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]); // only updating the activeTab value should trigger this effect.

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTab];
      tabsRef.current[activeTab].focus();
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTab]);

  const moveFocusToPreviousTab = useCallback(
    (activeTab: string | number) => {
      const index = (activeTab as number) - 1;

      if (activeTab === items[0]?.id) {
        setActiveTab(items[items.length - 1]?.id);
      } else {
        setActiveTab(items[index - 1]?.id);
      }
    },
    [items],
  );

  const moveFocusToNextTab = useCallback(
    (activeTab: string | number) => {
      const index = (activeTab as number) - 1;

      if (activeTab === items[items.length - 1]?.id) {
        setActiveTab(items[0]?.id);
      } else {
        setActiveTab(items[index + 1]?.id);
      }
    },
    [items],
  );

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (event.code) {
        case "ArrowLeft":
          moveFocusToPreviousTab(activeTab);
          break;

        case "ArrowRight":
          moveFocusToNextTab(activeTab);
          break;

        case "Home":
          setActiveTab(items[0]?.id);
          break;

        case "End":
          setActiveTab(items[items.length - 1]?.id);
          break;

        default:
          break;
      }
    },
    [activeTab, items, moveFocusToNextTab, moveFocusToPreviousTab],
  );

  const value = useMemo(
    () => ({ activeTab, setSelectedTab, tabsRef, onKeyDown }),
    [activeTab, onKeyDown, setSelectedTab],
  );

  const currentItem = items.find((item) => item.id === activeTab);

  return (
    <TabsContext.Provider value={value}>
      <div className="position-relative overflow-x-auto">
        <Tabs.List>
          {items.map(({ ...props }) => (
            <Tabs.Item key={props.id} {...props}></Tabs.Item>
          ))}
        </Tabs.List>
        <span
          className="nav-slide"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <Tabs.Panel currentItem={currentItem}>{currentItem?.content}</Tabs.Panel>
    </TabsContext.Provider>
  );
};

Tabs.Item = TabsItem;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;

Tabs.displayName = "Tabs";

export default Tabs;
