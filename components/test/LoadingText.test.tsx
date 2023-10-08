import React from "react";
import { render } from "@testing-library/react";
import LoadingText from "@/components/main/timeline/LoadingText";

describe("<LoadingText />", () => {
    const mockArticleStyles = {
        loading_text: "loading_text_class"
    };

    const mockArticleValues = {
        loadingText: "Loading...",
        renderDocLink: "https://example.com",
        linkText: "Click here",
        forMoreInformationText: "for more information.",
        loadingTextJP: "読み込み中..."
    };

    it("renders the English loading text correctly", () => {
        const { getByText } = render(<LoadingText ArticleStyles={mockArticleStyles} articleValues={mockArticleValues} />);
        expect(getByText("Loading...")).toBeInTheDocument();
    });

    it("renders the Japanese loading text correctly", () => {
        const { getByText } = render(<LoadingText ArticleStyles={mockArticleStyles} articleValues={mockArticleValues} />);
        expect(getByText("読み込み中...")).toBeInTheDocument();
    });

    it("renders the link correctly", () => {
        const { getByText } = render(<LoadingText ArticleStyles={mockArticleStyles} articleValues={mockArticleValues} />);
        const link = getByText("Click here") as HTMLAnchorElement;
        expect(link.href).toBe("https://example.com");
    });
});
