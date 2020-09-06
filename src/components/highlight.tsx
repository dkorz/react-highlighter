import React, { ReactNode, ReactNodeArray } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("json", json);

/* eslint-disable-next-line */
export interface HighlightProps {
  children: ReactNode | ReactNodeArray;
}

export const Highlight = ({ children }: HighlightProps) => {
  return (
    <SyntaxHighlighter language="json" style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Highlight;
