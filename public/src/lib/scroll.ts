import Lenis from 'lenis';

type ScrollTask = (scroll: number, limit: number) => void;
const tasks = new Set<ScrollTask>();
let lenis: Lenis | null = null;
let frame = 0;
let currentScroll = 0;
let currentLimit = 1;

export function subscribeScroll(task: ScrollTask) {
  tasks.add(task);
  task(currentScroll, currentLimit);
  return () => { tasks.delete(task); };
}
export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (target instanceof HTMLElement) {
    if (lenis) lenis.scrollTo(target, {offset: -10});
    else target.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
export function startScroll(reduced: boolean) {
  if (lenis) { lenis.destroy(); lenis = null; }
  cancelAnimationFrame(frame);
  lenis = new Lenis({duration: reduced ? 0 : 1.15, smoothWheel: !reduced, syncTouch: false, wheelMultiplier: 0.9});
  const tick = (time: number) => {
    lenis?.raf(time);
    currentScroll = lenis?.scroll ?? window.scrollY;
    currentLimit = lenis?.limit ?? Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    tasks.forEach((task) => task(currentScroll, currentLimit));
    frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
  return () => { cancelAnimationFrame(frame); lenis?.destroy(); lenis = null; };
}