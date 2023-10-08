import React, { useContext } from 'react'
import { useRouter } from 'next/router';

import { ViewContext } from "@/pages/_app";
import type { ArticleType } from "@/types/index";

interface ViewContextProps {
    articleValues: ArticleType["articleValues"];
}

export default function number({ query }: any, { data }: any) {

    // const context = useContext(ViewContext);
    // console.log(context)

    // Avoid error when context is null
    // if (!context) {
    //     return (
    //         <></>
    //     )
    // };

    // const { articleValues } = context;
    // console.log(articleValues)

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            hello
        </div>
    )
}
