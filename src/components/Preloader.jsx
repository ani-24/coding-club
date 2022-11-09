import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "@cyriacbr/react-split-text";

const Preloader = () => {
  const textRef = useRef();
  const [hidden, setHidden] = useState("");
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .from(".wrapper", {
          y: 100,
          rotate: 25,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.7)",
        })
        .to(".preloader-container", {
          y: "-100%",
          delay: 1,
        });
    }, textRef);
  }, []);

  return (
    <div ref={textRef}>
      <div className={`preloader-container ${hidden}`}>
        <h1 className="preloader-text">
          <SplitText
            LetterWrapper={({ letterIndex, children }) => (
              <span className="wrapper">{children}</span>
            )}
          >
            Coding.Club.
          </SplitText>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
