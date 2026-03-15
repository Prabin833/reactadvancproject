import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRafe = useRef(null)

  const imageArray = [
  'https://i.pinimg.com/736x/64/15/d9/6415d9d763294e5011190b7982e2c6c0.jpg',
  'https://i.pinimg.com/736x/64/15/d9/6415d9d763294e5011190b7982e2c6c0.jpg',
  'https://i.pinimg.com/1200x/66/cf/73/66cf73df4385d4d660b6debe277eba95.jpg',
  'https://i.pinimg.com/736x/fb/6f/3c/fb6f3c71a62b90c37c5de1ce4248a616.jpg',
  'https://i.pinimg.com/1200x/fe/f1/4a/fef14a425027ecad21786b05ab1db424.jpg',
  'https://i.pinimg.com/736x/e0/af/b0/e0afb0bdf272c34a6f3a4037d3622457.jpg',
  'https://i.pinimg.com/736x/68/0d/a9/680da9200913ec26c7d0b302f0ec168c.jpg',
  'https://i.pinimg.com/1200x/b7/cd/7d/b7cd7d9770cb876d5f68756dd690d886.jpg',
  'https://i.pinimg.com/736x/f3/32/85/f332858090f0968d8c565e2cf14abc78.jpg',
  'https://i.pinimg.com/1200x/18/ed/30/18ed30f1fc0157410d06fa1cde915034.jpg'
  ]

  useGSAP(function(){

    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start:'top 17.2%',
        end:'top -90%',
        pin:true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin:1, 
        invalidateOnRefresh:true,
        onUpdate:(elem)=>{
          let imageIndex;
          if (elem.progress<1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else{
            imageIndex = imageArray.length-1
          }
          imageRafe.current.src = imageArray[imageIndex]
          
        }
      }
    })
  })
  return (
    <div className="parent text-white">
      <div id="page1" className="py-1">
        <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] rounded-3xl  w-[15vw] top-30 left-[30vw] ">
          <img ref={imageRafe} className="h-full w-full object-cover" src='https://i.pinimg.com/736x/f3/32/85/f332858090f0968d8c565e2cf14abc78.jpg' alt=""
          />
        </div>
        <div className="relative">
          <div className="mt-[48vh]">
            <h1 className="text-[15vw] uppercase text-center leading-[12vw]">
              Keep
              <br />
              learning
            </h1>
          </div>
          <div className="pl-[50%] mt-20">
            <p className="text-2xl">
              &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Life is a journey full of opportunities, and the key to growth is
              to keep learning every day. Every experience, whether big or
              small, teaches us something new. By staying curious and
              open-minded, we can discover new skills, gain wisdom, and overcome
              challenges with confidence. Remember, learning doesn’t stop after
              school—it continues throughout life, shaping us into better,
              stronger, and smarter individuals. So embrace every lesson and
              keep learning, because knowledge is the path to endless
              possibilities.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen"></div>
    </div>
  );
};

export default Agence;
