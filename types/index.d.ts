// Maps JSX element tagnames -> HTMLElement interface
// This allows automatic prop typing for JSX Tags

type styleProps = { [e in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[e] };

type intrinsicProps<T extends keyof HTMLElementTagNameMap> = {
  [attr in keyof HTMLElementTagNameMap[T]]?: attr extends 'style'
    ? styleProps
    : HTMLElementTagNameMap[T][attr]
};

declare namespace JSX {
  type IntrinsicElements = {
    [e in keyof HTMLElementTagNameMap]: intrinsicProps<e>
  };
}
