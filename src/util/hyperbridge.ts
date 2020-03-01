import hyperscript from "hyperscript";

/* Tiny bridge between JSX and hyperscript to enbale functional components */

const GenerateFactory = () => (
  element: string | Function,
  props: Object,
  ...children: any[]
) => {
  if (typeof element === "string") {
    return hyperscript(element, props, children);
  } else if (typeof element === "function") {
    return element(props, children);
  }
};

export const h = GenerateFactory();
