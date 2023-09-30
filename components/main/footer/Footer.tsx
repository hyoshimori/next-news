import React, { useContext } from "react";

import { FooterStyles } from "@/components/index";

import { ViewContext } from "@/pages/index";
import type { ArticleType } from "@/types/index";

interface ViewContextProps {
  articleValues: ArticleType["footerValues"];
}

const Footer = () => {
  const context = useContext(ViewContext);

  // Avoid error when context is null
  if (!context) {
    return (
      <></>
    )
  };

  const { footerValues } = context;

  return (
    <div className={FooterStyles.body}>
      <span>
        |{" "}
        <a className={FooterStyles.attribute} href={footerValues.aboutLinkHref}>
          {footerValues.aboutLinkText}
        </a>{" "}
        {footerValues.nextNewsText}
      </span>
      <span>
        {footerValues.dataByText}{" "}
        <a
          className={FooterStyles.attribute}
          target="_blank"
          href="https://developer.nytimes.com/apis">
          {footerValues.nytApiLinkText}
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
