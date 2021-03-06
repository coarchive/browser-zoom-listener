/// <reference types="./lib"/>

let lastdpr = window.devicePixelRatio;
const fns: NumberConsumer[] = [];
let queued = false;

function resize() {
   if (!queued) {
      window.requestAnimationFrame(dispatch);
      queued = true;
   }
}

function dispatch() {
   const dpr = window.devicePixelRatio;
   if (dpr !== lastdpr) {
      for (var i = 0; i < fns.length; i++) {
         fns[i](dpr);
      }
      lastdpr = dpr;
   }
   queued = false;
}

window.addEventListener("resize", resize);

export default function browserZoomListener(fn: NumberConsumer): void {
   fns.push(fn);
}
