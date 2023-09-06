import { ReactNode } from "react";

const TabsList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="nav nav-tabs flex-nowrap" role="tablist">
      {children}
    </ul>
  );
};

TabsList.displayName = "Tabs.List";

export default TabsList;
