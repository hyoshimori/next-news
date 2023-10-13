import React, { useContext } from "react";
import type { ArticleType } from "src/assets/types/index";

import { LoadDetailStyles } from "src/assets/components/index";
import { ViewContext } from "src/pages/_app";

interface ViewContextProps {
    articleValues: ArticleType["articleValues"];
}

const LoadDetail = () => {
    const context = useContext(ViewContext);

    // Avoid error when context is null
    if (!context) {
        return (
            <></>
        )
    };

    const { articleValues } = context;

    return (
        <div className={LoadDetailStyles.loading_text}>
            <p>
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

export default LoadDetail;