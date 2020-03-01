// Maps JSX element tagnames -> to the appropriate interface
// This allows automatic prop typing for JSX HTMLElements

type intrinsicProps<T extends keyof HTMLElementTagNameMap> = {
  [attr in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][attr]
};

declare namespace JSX {
  type IntrinsicElements = {
    [e in keyof HTMLElementTagNameMap]: intrinsicProps<e>
  };
}
