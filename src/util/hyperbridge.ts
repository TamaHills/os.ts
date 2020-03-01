import hyperscript from 'hyperscript';

/* Tiny bridge between JSX and hyperscript to enbale functional components */

export function h<E extends keyof HTMLElementTagNameMap, P, C>(
  element: (props: P) => HTMLElement | E,
  props: P,
  ...children: any[]
) {
  if (typeof element === 'string') {
    return hyperscript(element, props, children) as HTMLElementTagNameMap[E];
  } else if (typeof element === 'function') {
    return element(props);
  }
}
