import React, { useRef, useEffect, Children } from 'react';
import './CircularDOMGallery.css';

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t;
}

export default function CircularDOMGallery({
  children,
  bend = 3,
  scrollSpeed = 2,
  scrollEase = 0.05,
  itemWidth = 300,
  itemHeight = 250,
}) {
  const containerRef = useRef(null);
  const scroll = useRef({ ease: scrollEase, current: 0, target: 0, last: 0 });
  const isDown = useRef(false);
  const start = useRef(0);

  const itemsArray = Children.toArray(children);
  // Duplicate items twice to ensure enough cards for infinite wrap around on wide screens
  const renderedItems = [...itemsArray, ...itemsArray, ...itemsArray];
  const renderedLength = renderedItems.length;

  const itemRefs = useRef([]);
  const viewportRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onResize = () => {
      viewportRef.current = {
        width: container.clientWidth,
        height: container.clientHeight
      };
    };

    const onTouchDown = (e) => {
      isDown.current = true;
      scroll.current.position = scroll.current.current;
      start.current = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const onTouchMove = (e) => {
      if (!isDown.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const distance = (start.current - x) * scrollSpeed;
      scroll.current.target = scroll.current.position + distance;
    };

    const onCheck = () => {
      if (!viewportRef.current.width) return;
      const width = itemWidth + 20;
      const itemIndex = Math.round(Math.abs(scroll.current.target) / width);
      const item = width * itemIndex;
      scroll.current.target = scroll.current.target < 0 ? -item : item;
    };
    const onCheckDebounce = debounce(onCheck, 200);

    const onTouchUp = () => {
      isDown.current = false;
      onCheck();
    };


    const onKeyDown = (e) => {
      const cardWidth = itemWidth + 20;
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          scroll.current.target += cardWidth;
          onCheckDebounce();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          scroll.current.target -= cardWidth;
          onCheckDebounce();
          break;
        case 'Home':
          e.preventDefault();
          scroll.current.target = 0;
          onCheckDebounce();
          break;
        default:
          break;
      }
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousedown', onTouchDown);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchUp);
    window.addEventListener('touchstart', onTouchDown, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchUp);
    container.addEventListener('keydown', onKeyDown);

    onResize();

    let rafId;
    const update = () => {
      scroll.current.current = lerp(scroll.current.current, scroll.current.target, scroll.current.ease);
      const direction = scroll.current.current > scroll.current.last ? 'right' : 'left';

      const H = viewportRef.current.width / 2;

      itemRefs.current.forEach((el, i) => {
        if (!el) return;

        let extra = el._extra || 0;
        const padding = 20;
        const width = itemWidth + padding;
        const widthTotal = width * renderedLength;
        const initialX = width * i;

        let xPos = initialX - scroll.current.current - extra;

        const planeOffset = itemWidth / 2;
        const viewportOffset = viewportRef.current.width / 2;
        let isBefore = xPos + planeOffset < -viewportOffset;
        let isAfter = xPos - planeOffset > viewportOffset;

        if (direction === 'right' && isBefore) {
          extra -= widthTotal;
          xPos = initialX - scroll.current.current - extra;
        }
        if (direction === 'left' && isAfter) {
          extra += widthTotal;
          xPos = initialX - scroll.current.current - extra;
        }
        el._extra = extra;

        let yPos = 0;
        let zRot = 0;

        if (bend !== 0) {
          const B_abs = Math.abs(bend * 100);
          const R = (H * H + B_abs * B_abs) / (2 * B_abs);
          const effectiveX = Math.min(Math.abs(xPos), H);

          const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
          if (bend > 0) {
            yPos = arc;
            zRot = Math.sign(xPos) * Math.asin(effectiveX / R) * (180 / Math.PI);
          } else {
            yPos = -arc;
            zRot = -Math.sign(xPos) * Math.asin(effectiveX / R) * (180 / Math.PI);
          }
        }

        el.style.transform = `translate3d(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px), 0) rotateZ(${zRot}deg)`;
      });

      scroll.current.last = scroll.current.current;
      rafId = window.requestAnimationFrame(update);
    };
    rafId = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousedown', onTouchDown);
      window.removeEventListener('mousemove', onTouchMove);
      window.removeEventListener('mouseup', onTouchUp);
      window.removeEventListener('touchstart', onTouchDown);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchUp);
      container.removeEventListener('keydown', onKeyDown);
      window.cancelAnimationFrame(rafId);
    };
  }, [bend, scrollSpeed, itemWidth, renderedLength]);

  return (
    <div
      className="circular-gallery"
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Circular component gallery. Use left and right arrow keys to navigate."
    >
      <div className="circular-gallery-inner">
        {renderedItems.map((child, i) => (
          <div
            key={i}
            className="circular-gallery-item"
            ref={(el) => (itemRefs.current[i] = el)}
            style={{ width: itemWidth, height: itemHeight }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
