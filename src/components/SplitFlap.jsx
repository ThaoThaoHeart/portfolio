import { useEffect, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion.js';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/-&';
const FRAME_MS = 45;

const pad = (word, width) => word.toUpperCase().padEnd(width, ' ').slice(0, width);
const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

export default function SplitFlap({ words, width = 18, holdMs = 3200 }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const target = pad(words[index], width);
  const [cells, setCells] = useState(() => target.split(''));

  useEffect(() => {
    if (words.length < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % words.length), holdMs);
    return () => clearTimeout(id);
  }, [index, words.length, holdMs]);

  useEffect(() => {
    if (reduced) {
      setCells(target.split(''));
      return;
    }
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      setCells(
        target.split('').map((ch, i) => {
          if (frame >= 4 + i) return ch;
          return ch === ' ' && frame > i ? ' ' : randomGlyph();
        }),
      );
      if (frame >= 4 + width) clearInterval(id);
    }, FRAME_MS);
    return () => clearInterval(id);
  }, [target, width, reduced]);

  return (
    <div className="flapboard" role="img" aria-label={words[index]}>
      {cells.map((ch, i) => (
        <span key={`${i}-${ch}`} className={`flap ${ch === ' ' ? 'flap--blank' : ''}`} aria-hidden="true">
          {ch}
        </span>
      ))}
    </div>
  );
}
