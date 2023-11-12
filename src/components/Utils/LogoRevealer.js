"use client";
import Image from "next/image";
import React, { useState } from "react";

import accenture from "../../../accenture.png";
import { useAnimate, motion } from "framer-motion";

const LogoRevealer = () => {
  const [scope1, animateText] = useAnimate();
  const [scope2, animateLogo] = useAnimate();

  const [reveal, setReaveal] = useState(false);

  const logoTransition = () => {
    if (!reveal) {
      animateLogo(scope2.current, { x: 30, transition: { duration: 10, type: 'tween', ease: 'anticipate' } });
      animateText(scope1.current,{opacity:1,height:'80px',y:0})
      // animateText(scope1.current, { opacity: 1, y: -30, transition: { duration: 2, type: 'tween', ease: 'anticipate' } });
    } else {
      animateLogo(scope2.current, { x: -30, transition: { duration: 10, type: 'tween', ease: 'anticipate' } });
      animateText(scope1.current,{opacity:0,height:'0px',y:30})
    }
    // animateText(scope1.current,{opacity:0,y:30})

    setReaveal(!reveal);  
  };

  return (
    <div className={reveal ? `flex flex-col` : `ml-24`}>
      <Image
        src={accenture}
        ref={scope2}
        onMouseOver={logoTransition}
        className={reveal ? `h-7 w-7  ml-36` : `h-24 w-24 `}
      />
      <motion.h1
        className={reveal ? "text-white text-6xl " : `hidden`}
        initial={{ opacity: 0, y: -30 ,height:'0px'}}
        // animate={{opacity:1}}
        ref={scope1}
      >
        accenture
      </motion.h1>
    </div>
  );
};

export default LogoRevealer;
