// /**
//  * A getBoundingClientRect that returns x and y
//  * also on IE and Edge, as they do not allow
//  * overwriting the default.
//  *
//  * @param {HTMLElement} el
//  * @returns {BoundingClientRect} {left,top,right,bottom,x,y,width,height}
//  */
// export const getBoundingClientRect = el => {
//   let brct = el.getBoundingClientRect()
//   if (isNaN(brct.x) || isNaN(brct.y)) {
//     let x = 0
//     let y = 0
//     while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
//       x += el.offsetLeft - el.scrollLeft
//       y += el.offsetTop - el.scrollTop
//       el = el.offsetParent
//     }
//     brct.x = x
//     brct.y = y
//   }
//   return brct
// }


interface BoundingClientRect extends DOMRect {
  x: number;
  y: number;
}

/**
 * A getBoundingClientRect that returns x and y
 * also on IE and Edge, as they do not allow
 * overwriting the default.
 *
 * @param {HTMLElement} el
 * @returns {BoundingClientRect} {left, top, right, bottom, x, y, width, height}
 */
export const getBoundingClientRect = (el: HTMLElement): BoundingClientRect => {
  const brct = el.getBoundingClientRect() as BoundingClientRect;

  if (isNaN(brct.x) || isNaN(brct.y)) {
    let x = 0;
    let y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent as HTMLElement;
    }
    brct.x = x;
    brct.y = y;
  }

  return brct;
};
