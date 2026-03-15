import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import insta from "../assets/WS---K72.ca---MenuThumbnail.jpg";
import { NavbarContext } from "../context/NavContext";

gsap.registerPlugin(useGSAP);

const FullScreenNav = () => {
  const container = useRef(null);
  const tl = useRef(null);

  const [navOpen, setnavOpen] = useContext(NavbarContext);

  // 1. Setup the timeline once
  useGSAP(
    () => {
      tl.current = gsap.timeline({ paused: true });

      // Match the display toggle
      tl.current.to(container.current, {
        display: "block",
        duration: 0,
      });

      tl.current.from(".stair", {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
        stagger: { amount: 0.3 },
      });

      tl.current.from(
        ".navLink", // Using your original class name
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.current.from(".link", {
        opacity: 0,
        rotateX: 90,
        stagger: { amount: 0.2 },
      }, "-=0.2");

      // Infinite marquee (independent of the main timeline)
      gsap.to(".moveX", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    },
    { scope: container }
  );

  // 2. Trigger play/reverse based on state
  useGSAP(() => {
    if (navOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [navOpen]);
  return (
    <div
      ref={container}
      style={{ display: "none" }}
      className="text-white overflow-hidden h-screen w-full fixed top-0 left-0 z-50"
    >
      {/* Background Stairs - Restored original layout */}
      <div className="h-screen w-full fixed top-0 left-0 flex pointer-events-none">
        <div className="stair h-full w-1/5 bg-[#000]"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-[#000]"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-[#000]"></div>
      </div>

      {/* Content - Restored original structure */}
      <div className="relative z-10">
        <div className="navLink flex w-full justify-between p-2 items-start">
          <div className="w-25">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 103 44">
                <path fillRule="evenodd" fill="white" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
             </svg>
          </div>
          <div onClick={() => setnavOpen(false)} className="h-20 w-20 relative cursor-pointer">
            <div className="h-28 w-0.5 -rotate-45 origin-top absolute bg-[#d3fd50]"></div>
            <div className="h-28 w-0.5 right-0 rotate-45 origin-top absolute bg-[#d3fd50]"></div>
          </div>
        </div>

        <div className="py-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="link group origin-top relative border-t border-white overflow-hidden">
              <h1 className="text-[6.5vw] text-center leading-[0.8] pt-10 uppercase font-semibold">
                Instagram
              </h1>
              {/* Marquee effect on Hover - Restored original sizing */}
              <div className="moveLink absolute inset-0 text-black flex opacity-0 group-hover:opacity-100 transition-opacity bg-[#d3fd50]">
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap text-[6.5vw] text-center leading-[0.8] pt-10 uppercase font-semibold">
                    Tap and contact me through the instagram DM
                  </h2>
                  <img className="h-26 shrink-0 w-60 rounded-full object-cover" src={insta} alt="me" />
                </div>
                <div className="moveX flex items-center">
                  <h2 className="whitespace-nowrap text-[6.5vw] text-center leading-[0.8] pt-10 uppercase font-semibold">
                    Tap and contact me through the instagram DM
                  </h2>
                  <img className="h-26 shrink-0 w-60 rounded-full object-cover" src={insta} alt="me" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;