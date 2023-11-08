import React from "react";

const Hero = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-45%] left-0 z-[-10] w-full h-full object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
