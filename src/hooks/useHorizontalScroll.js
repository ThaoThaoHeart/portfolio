import { useEffect } from 'react';

const DURATION = 750;
const GESTURE_GAP = 200;

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function canScrollY(el, dy) {
  const { overflowY } = getComputedStyle(el);
  if (overflowY !== 'auto' && overflowY !== 'scroll') return false;
  if (el.scrollHeight <= el.clientHeight + 1) return false;
  return dy > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 0;
}

function isEditable(el) {
  return el?.closest?.('input, textarea, select, [contenteditable=""], [contenteditable="true"]');
}

function stopPoints(track) {
  const w = track.clientWidth;
  const max = track.scrollWidth - w;
  const points = new Set();
  for (const station of track.children) {
    const start = station.offsetLeft;
    const end = start + station.offsetWidth - w;
    points.add(start);
    for (let x = start + w; x < end; x += w) points.add(x);
    if (end > start) points.add(end);
  }
  return [...points].map((p) => Math.min(Math.round(p), max)).sort((a, b) => a - b);
}

export default function useHorizontalScroll(ref) {
  useEffect(() => {
    const track = ref.current;
    if (!track) return;

    let frame = 0;
    let target = null;
    let lastWheel = 0;

    const glideTo = (left) => {
      cancelAnimationFrame(frame);
      const from = track.scrollLeft;
      const distance = left - from;
      target = left;
      if (Math.abs(distance) < 1) {
        target = null;
        return;
      }
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        track.scrollTo({ left, behavior: 'instant' });
        target = null;
        return;
      }
      const t0 = performance.now();
      const step = (now) => {
        const t = Math.min((now - t0) / DURATION, 1);
        track.scrollTo({ left: from + distance * ease(t), behavior: 'instant' });
        if (t < 1) frame = requestAnimationFrame(step);
        else target = null;
      };
      frame = requestAnimationFrame(step);
    };

    const go = (dir) => {
      const points = stopPoints(track);
      const here = target ?? track.scrollLeft;
      const next =
        dir > 0 ? points.find((p) => p > here + 2) : points.findLast((p) => p < here - 2);
      if (next !== undefined) glideTo(next);
    };

    const onWheel = (e) => {
      if (e.ctrlKey) return;
      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;

      if (target === null && track.contains(e.target)) {
        for (let el = e.target; el && el !== track; el = el.parentElement) {
          if (canScrollY(el, e.deltaY)) return;
        }
      }

      e.preventDefault();
      const now = performance.now();
      const newGesture = now - lastWheel > GESTURE_GAP;
      lastWheel = now;

      if (newGesture && target === null) go(e.deltaY);
    };

    const onKey = (e) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      if (isEditable(e.target)) return;

      if (e.key === ' ' && e.target.closest?.('a, button')) return;

      const dir = {
        ArrowDown: 1,
        ArrowRight: 1,
        PageDown: 1,
        ArrowUp: -1,
        ArrowLeft: -1,
        PageUp: -1,
        ' ': e.shiftKey ? -1 : 1,
      }[e.key];

      if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        glideTo(e.key === 'Home' ? 0 : track.scrollWidth - track.clientWidth);
      } else if (dir !== undefined) {
        e.preventDefault();
        go(dir);
      }
    };

    const onResize = () => {
      const points = stopPoints(track);
      const nearest = points.reduce((a, b) =>
        Math.abs(b - track.scrollLeft) < Math.abs(a - track.scrollLeft) ? b : a,
      );
      track.scrollTo({ left: nearest, behavior: 'instant' });
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [ref]);
}
