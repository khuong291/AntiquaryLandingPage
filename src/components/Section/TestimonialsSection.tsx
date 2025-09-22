import React from "react";
import TestimonialsCarousel from "../TestimonialsCarousel";

const TestimonialsSection = () => {
  return (
    <>
      <section id="rating" className="">
        <div className=" mx-auto">
          {/* <h2 className="text-4xl font-bold text-center mb-8 tracking-tight">
            What Our Users Say
          </h2> */}
          <TestimonialsCarousel />
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
