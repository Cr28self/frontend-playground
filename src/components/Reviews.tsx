import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { splitArray } from "../lib/review";
import { cn } from "../lib/style";
import ReviewPhone from "./ReviewPhone";
// 애니메이션에 사용될 PHONE이미지 경로들..
const PHONES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
];

function ReviewColumn({
  reviews,
  className,

  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;

  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);

  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver((entries) => {
      setColumnHeight(columnRef?.current?.offsetHeight ?? 0);
    });

    // resizeObserver listen to change of height
    resizeObserver.observe(columnRef.current);

    return () => {
      // clean up
      resizeObserver.disconnect();
    };
  }, []);

  console.log(reviews.concat(reviews));

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <ReviewPhone
          key={reviewIndex}
          imgSrc={imgSrc}
          className={cn("w-full object-cover")}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const columns = splitArray(PHONES, 3);
  console.log(columns);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);
  console.log(column3);

  return (
    <div
      ref={containerRef}
      className="relative grid grid-cols-1 h-[49rem] max-h-[150vh] px-4 -mx-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3"
    >
      {/* 
      // !div>p*3
       */}
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>

      {/* 
      // !div.container>p.title*5 
      */}

      <div className="container">
        <p className="title"></p>
        <p className="title"></p>
        <p className="title"></p>
        <p className="title"></p>
        <p className="title"></p>
      </div>
      <ReviewColumn
        reviews={[...column1, ...column3.flat(), ...column2]}
        msPerPixel={10}
      />
      <ReviewColumn
        reviews={[...column1, ...column3.flat(), ...column2]}
        msPerPixel={15}
      />
      {/* 2개 이미지 */}
      <ReviewColumn
        reviews={column3.flat()}
        className="hidden md:block"
        msPerPixel={10}
      />
    </div>
  );
}

const Reviewss = () => {
  console.log("123");
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden={"true"}
        src={"/what-people-are-buying.png"}
        className="absolute hidden select-none -left-32 top-1/3 xl:block"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};

export default Reviewss;
