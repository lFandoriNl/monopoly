export function getPositionRelativeToParent(
  parent: HTMLElement,
  child: HTMLElement,
) {
  let childTemp: HTMLElement | null | undefined = child;
  let x = 0;
  let y = 0;

  while (parent !== childTemp) {
    if (childTemp) {
      x += childTemp.offsetLeft;
      y += childTemp.offsetTop;
    }

    childTemp = childTemp?.parentElement;
  }

  return { x, y };
}
