import React, { useContext } from "react";
import Base from "./Base";
import Head from "next/head";

import { ViewContext } from "@/pages/_app";
import type { ArticleType } from "@/types/index";


interface ViewContextProps {
  articleValues: ArticleType;
}


export default function Home() {
  const context = useContext(ViewContext);
  const title = context?.homeValues.homeTitle;

  // Avoid error when context is null
  if (!context) {
    return (
      <></>
    )
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Base />
      </main>
    </>
  );
}

