import { forwardRef, Ref } from "react";

import { RafterLeft } from "@edifice-ui/icons";
import { IWebApp } from "edifice-ts-client";
import { useTranslation } from "react-i18next";

import BreadcrumbItem from "./BreadcrumbItem";
import BreadcrumbList from "./BreadcrumbList";
import BreadcrumbNav from "./BreadcrumbNav";
import { AppIcon } from "../AppIcon";
import { IconButton } from "../Button";
import { Heading } from "../Heading";

export interface BreadcrumbProps {
  /**
   * Pass all data about current application
   */
  app: IWebApp;
  /**
   * Show name of the current resource
   */
  name?: string;
}

const Breadcrumb = forwardRef(
  ({ app, name }: BreadcrumbProps, ref: Ref<HTMLElement>) => {
    const { t } = useTranslation();

    return (
      <BreadcrumbNav app={app} ref={ref} className="mw-100">
        <BreadcrumbList className="gap-12 mw-100">
          {name ? (
            <>
              <BreadcrumbItem>
                <a href={app?.address} className="d-flex">
                  <IconButton
                    variant="ghost"
                    color="tertiary"
                    icon={<RafterLeft />}
                    aria-label={t(app?.displayName)}
                  />
                  <AppIcon app={app} size="40" />
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="text-truncate">
                <Heading level="h1" headingStyle="h3" className="text-truncate">
                  {name}
                </Heading>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem className="gap-12 d-flex align-items-center">
              <AppIcon app={app} size="40" />
              <Heading
                level="h1"
                headingStyle="h3"
                className="d-none d-md-flex"
              >
                {t(app?.displayName)}
              </Heading>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </BreadcrumbNav>
    );
  },
);

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
