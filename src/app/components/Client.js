"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Partner() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const clientsLogo = [
    "/clients/gib.png",
    "/clients/IPDC-logo.png",
    "/clients/janata.png",
    "/clients/mercantile.png",
    "/clients/prime bank.jpg",
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const speed = 0.6;

    const totalWidth = container.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      container.style.transform = `translate3d(${position}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="clients" className="py-8 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Our Clients
      </h2>
      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8 px-4">
        Nazihar IT Solution works with Temenos Core Banking Solutions, specifically applying 
        Temenos Transact, a next-generation core banking system that empowers financial institutions 
        to modernize and scale their operations. Transact delivers advanced product definition, 
        seamless transaction processing, unparalleled operational scalability, and functional depth 
        that cater to the diverse needs of Retail, Corporate, and Private Banks, as well as Wealth 
        Management institutions.
      </p>

      <div className="overflow-hidden">
        <div ref={containerRef} className="flex gap-x-8 will-change-transform">
          {[...clientsLogo, ...clientsLogo].map((logo, index) => (
            <div
              key={index}
              className="w-[240px] h-[120px] flex items-center justify-center flex-shrink-0 border rounded-lg p-2"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`client-${index}`}
                  fill
                  className="object-contain"
                  priority={index < 5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
