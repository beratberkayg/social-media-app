import React from "react";

const Hero = () => {
  return (
    <div className="absolute flex flex-col h-full w-full ">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-40%] left-0  z-[-1] w-full h-full object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
