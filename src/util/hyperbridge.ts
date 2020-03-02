import hyperscript from 'hyperscript';

/* Tiny bridge between JSX and hyperscript to enbale functional components */

type Props<P = {}> = { [prop in keyof P]: P[prop] };

export function h<E extends keyof HTMLElementTagNameMap, P, C>(
  element: (props: P) => HTMLElement | E,
  props: Props<P>,
  ...children: C[]
) {
  if (typeof element === 'string') {
    return hyperscript(element, props, children) as HTMLElementTagNameMap[E];
  } else {
    return element(props) as HTMLElementTagNameMap[E];
  }
}
