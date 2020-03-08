// Maps JSX element tagnames -> HTMLElement interface
// This allows automatic prop typing for JSX Tags
// For custom JSX factories

// Map nested interfaces
type MapPropInterface<map extends {}> = { [prop in keyof map]?: map[prop] };

// Map all interface props
type MapIntrinsicProps<e extends Element> = {
  [attr in keyof e]?: e[attr] extends {} ? MapPropInterface<e[attr]> : e[attr];
};

declare namespace JSX {
  type IntrinsicElements = {
    [e in keyof HTMLElementTagNameMap]: MapIntrinsicProps<HTMLElementTagNameMap[e]>;
  };
}
