import { useState, useEffect, memo, useRef } from "react";

const AnimatedCounter = memo(function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let startTime = null;
          const duration = 1500;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * value);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="sm:text-7xl text-6xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
});

function Counter() {
  return (
    <section className="bg-primary py-12 px-5 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-2.5 bg-secondary rounded-full"></div>
      </div>
      <h2 className="text-white text-2xl md:text-[32px] font-bold mb-12">
        Transforming Education with Vidya ERP
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 sm:gap-10">
        <div className="flex flex-col items-center">
          <div className="border-4 border-white hover:-translate-y-2 transition-all duration-300 py-8 w-full">
            <AnimatedCounter value={4} suffix="L+" />
          </div>
          <p className="text-white font-semibold mt-2 text-2xl sm:text-3xl">Learners</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border-4 border-white py-8 w-full hover:-translate-y-2 transition-all duration-300">
            <AnimatedCounter value={142} suffix="+" />
          </div>
          <p className="text-white mt-2 font-semibold text-2xl sm:text-3xl">Clients</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="border-4 border-white py-8 w-full hover:-translate-y-2 transition-all duration-300">
            <AnimatedCounter value={47} suffix="+" />
          </div>
          <p className="text-white mt-2 font-semibold text-2xl sm:text-3xl">Modules</p>
        </div>
      </div>
    </section>
  );
}

export default Counter;
