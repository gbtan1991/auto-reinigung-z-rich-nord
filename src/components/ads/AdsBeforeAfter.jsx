import { useState } from 'react';
import { images } from '@/data/siteContent';
import AdsSection from '@/components/ads/AdsSection';
export default function AdsBeforeAfter() {
  const [split, setSplit] = useState(50);
  return <AdsSection eyebrow="Vorher / Nachher" title="Der Unterschied, den man sieht." text="Innenraum vor und nach der Reinigung – das vorhandene Bildpaar aus unserer Innenreinigung.">
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border sm:aspect-[16/9]">
      <img src={images.after} alt="Innenraum nach der Reinigung" loading="lazy" decoding="async" width="1200" height="900" className="absolute inset-0 h-full w-full object-cover" />
      <img src={images.before} alt="Innenraum vor der Reinigung" loading="lazy" decoding="async" width="1200" height="900" className="absolute inset-0 h-full w-full object-cover" style={{clipPath: `inset(0 ${100 - split}% 0 0)`}} />
      <span className="absolute left-4 top-4 rounded-full bg-background/95 px-4 py-2 text-sm font-bold">Vorher</span><span className="absolute right-4 top-4 rounded-full bg-background/95 px-4 py-2 text-sm font-bold">Nachher</span>
      <div className="pointer-events-none absolute inset-y-0 border-l-2 border-background" style={{left:`${split}%`}}><span className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background font-bold text-primary shadow-lg">↔</span></div>
    </div>
    <label className="mt-4 block max-w-xl text-sm font-semibold">Vorher und nachher vergleichen<input aria-label="Bildvergleich verschieben" type="range" min="0" max="100" value={split} onChange={e => setSplit(Number(e.target.value))} className="mt-2 h-10 w-full accent-primary" /></label>
  </AdsSection>;
}