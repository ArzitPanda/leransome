"use client";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import sample from "../../sample.jpg";
import { useState } from "react";
const RadCard = ({ img, title, desc, year }) => {
  const [lowerLeftRef, animate] = useAnimate();
  const [LeftRef, animate2] = useAnimate();
  const [isEnter, setIsEnter] = useState(false);
  return (
    <div>
      <motion.div
        className="relative h-[800px]  w-[70rem] bg-hero-pattern object-cover"
        initial={{ width: "30rem" }}
        // whileTap={{width:'70rem'}}
        whileHover={{ width: "70rem" }}
        transition={{ duration: 0.55, ease: [0.85, 0, 0, 1] }}
        onMouseEnter={() => {
          animate(lowerLeftRef.current, { y: 0, opacity: 1, x: 0 });
          animate2(LeftRef.current,{ y: 0, opacity: 1, x: 0 ,transition:{type:'tween',duration:1,ease:'easeInOut'}})
          setIsEnter(true);
        }}
        onMouseLeave={() => {
          animate(lowerLeftRef.current, { y: 200, opacity: 0, x: 200 });
          animate2(LeftRef.current,{  opacity: 1, x: 600 ,transition:{type:'tween',duration:1,ease:'easeInOut'} })
          setIsEnter(false);
        }}
      >
        <motion.div
          className="absolute -z-0 w-full h-full"
          //  whileHover={{ filter: 'blur(5px)' }}
        >
          <Image
            src={img || sample}
            className={`h-full w-full object-cover ${
              isEnter ? `blur-md box-border` : `blur-none`
            }`}
          />
        </motion.div>
        <div className="absolute z-10 w-full h-full overflow-hidden flex ">
          <div className="w-1/2 h-full flex flex-col items-start justify-between py-6">
            <div className="h-1/2 ">
              <h1 className="text-3xl pl-3 pt-5  text-white capitalize">
                {title || "Research Report"}
              </h1>
              <h2 className="text-4xl pl-3 pt-5 font-semibold text-white capitalize ">
                {desc || "accenture life trends"}
              </h2>
              <h3 className="text-5xl pt-2  pl-3 font-semibold capitalize text-white">
                {year || 2023}
              </h3>
            </div>

            <motion.div
              ref={lowerLeftRef}
              // initial={{y:200,opacity:0,x:200}}
            >
              <h1 className="text-6xl pl-3 pt-5 text-white">1234</h1>
              <p className="text-2xl pl-3 pt-2 text-white">Some descriptiona</p>
            </motion.div>
          
          </div>
          <motion.div
              ref={LeftRef}
              className="w-1/2 h-full flex items-end justify-between flex-col py-6 px-12"
              initial={{y:0,opacity:0,x:600}}
            >
                <div className="text-6xl text-white uppercase mt-14">
                  Big title
                </div>
              <div className="w-7/12 flex items-start">
                But I, that am not shaped for sportive tricks, Nor made to court
                an amorous looking-glass; I, that am rudely stamp'd, and want
                love's majesty To strut before a wanton ambling nymph; I, that
                am curtail'd of this fair proportion,
              </div>
          
            </motion.div>

        
        </div>
      </motion.div>
    </div>
  );
};

export default RadCard;
