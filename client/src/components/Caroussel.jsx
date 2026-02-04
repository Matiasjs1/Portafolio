// components/Carousel.jsx
import { useEffect, useState, useMemo } from 'react';
 
export default function Carousel({ images = [], projectName = '' }) {
  const validImages = useMemo(() => (images || []).filter(Boolean), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const goNext = () => setCurrentIndex(i => (i + 1) % validImages.length);
  const goPrev = () => setCurrentIndex(i => (i - 1 + validImages.length) % validImages.length);
  const goTo = (i) => setCurrentIndex(i);
 
  useEffect(() => {
    if (validImages.length <= 1) return;
    const next = (currentIndex + 1) % validImages.length;
    const prev = (currentIndex - 1 + validImages.length) % validImages.length;
    [validImages[next], validImages[prev]].forEach(src => { const img = new Image(); img.src = src; });
  }, [currentIndex, validImages]);
 
  if (validImages.length === 0) return null;
 
  return (
    <div className="carousel" role="group" aria-roledescription="carousel">
      <button className="nav prev" onClick={goPrev} aria-label="Previous slide">‹</button>
      <img
        src={validImages[currentIndex]}
        alt={`${projectName} - image ${currentIndex + 1} of ${validImages.length}`}
        onError={goNext}
        loading="eager"
      />
      <button className="nav next" onClick={goNext} aria-label="Next slide">›</button>
 
      <div className="indicators">
        {validImages.map((_, i) => (
          <button
            key={i}
            className={i === currentIndex ? 'dot active' : 'dot'}
            onClick={() => goTo(i)}
            aria-current={i === currentIndex}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
 
      <div className="counter">{currentIndex + 1} / {validImages.length}</div>
    </div>
  );
}