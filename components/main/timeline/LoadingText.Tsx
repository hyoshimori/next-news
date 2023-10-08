import React, { useContext } from "react";
import type { ArticleType } from "@/types/index";

import { LoadingTextStyles } from "@/components/index";
import { ViewContext } from "@/pages/_app";

interface ViewContextProps {
    articleValues: ArticleType["articleValues"];
}

export default function LoadingText() {

    const context = useContext(ViewContext);

    // Avoid error when context is null
    if (!context) {
        return (
            <></>
        )
    };

    const { articleValues } = context;

    return (
        <div className={LoadingTextStyles.loading_text}>
            <p>
                hello
                {articleValues.loadingText}{" "}
                <a target="_blank" rel="noopener noreferrer" href={articleValues.renderDocLink}>
                    {articleValues.linkText}
                </a>{" "}
                {articleValues.forMoreInformationText}{" "}
            </p>
            <p>
                {articleValues.loadingTextJP}{" "}
                <a target="_blank" rel="noopener noreferrer" href={articleValues.renderDocLink}>
                    {articleValues.linkText}
                </a>
            </p>
        </div>
    );
}