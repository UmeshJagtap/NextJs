// 'use client'

// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; 
// import { useGSAP } from "@gsap/react";
// import './TypedMessage.css';

// gsap.registerPlugin(ScrollTrigger, SplitText);

// export default function GSAP() {
//   const messageRef = useRef(null);
//   const textRef = useRef(null);

//   const tl = useGSAP(() => {
//     const splitText = new SplitText(textRef.current, { type: "lines" });
//     const lines = splitText.lines;
//     gsap.set(lines, { opacity: 0, x: -100 }); // Set initial position off-screen to the left
//     return gsap.timeline({
//       scrollTrigger: {
//         trigger: messageRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     })
//       .to(lines, { opacity: 1, x: 0, stagger: 0.2 }); // Slide in horizontally
//   }, []); // Empty dependency array to run only once

//   return (
//     <div className="gsap-container bg-gray-500 text-white" ref={messageRef}>
//       <h1 ref={textRef} className="p-10 m-2 text-4xl">Hello GSAP!</h1>
//       <div className="h-[50rem] bg-gray-200">ASDFG</div>
//       <div className="h-[50rem] bg-gray-100">XYZ</div>
//       <div className="h-[50rem] bg-gray-200">GHJKL</div>
//     </div>
//   );
// }

'use client'

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import { useGSAP } from "@gsap/react";
import './TypedMessage.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function GSAP() {
  const messageRef = useRef(null);
  const textRef = useRef(null);
  const xyzRef = useRef(null);

  const tl = useGSAP(() => {
    const splitText = new SplitText(textRef.current, { type: "lines" });
    const lines = splitText.lines;
    gsap.set(lines, { opacity: 0, x: 1000 }); // Set initial position off-screen to the left
    return gsap.timeline({
      scrollTrigger: {
        trigger: messageRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    })
      .to(lines, { opacity: 1, x: 0, stagger: 0.2 }); // Slide in horizontally
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    gsap.fromTo(
      xyzRef.current,
      { scale: 0, opacity: 0 }, // Initial state: scaled down and invisible
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: xyzRef.current,
          start: "top 80%", // Trigger when the element is near the viewport
          end: "top 50%",
          toggleActions: "play none none reverse", // Play animation on scroll in, reverse on scroll out
        },
      }
    );
  }, []);

  return (
    <div className="gsap-container bg-gray-500 text-red-600" ref={messageRef}>
      <div className="p-4 m-2 h-[50rem] bg-gray-200 text-8xl">ASDFG</div>
      <div className="p-4 m-2 h-[50rem] bg-gray-100 flex items-center justify-center text-4xl">
        <p ref={xyzRef}>XYZ</p>
      </div>
      <h1 ref={textRef} className="p-10 m-2 h-[50rem] flex items-center text-5xl">Hello GSAP!</h1>
      <div className="p-2 m-2 h-[50rem] bg-gray-200 text-4xl">GHJKL</div>
    </div>
  );
}

// Grey for the background color : #F8F8F8;