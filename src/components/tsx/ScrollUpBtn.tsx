import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
const ScrollUpBtn = () => {
  window.addEventListener("scroll", () => {
    const scrollBtn = document.querySelector(".scrollToTop");
    window.scrollY > 200 ? scrollBtn?.classList.remove("hidden") : scrollBtn?.classList.add("hidden");
  })
  return (
    <>
        <BiUpArrowAlt onClick={()=> window.scroll(0,0)} className="scrollToTop cursor-pointer fixed right-10 bottom-20 bg-navy-100 p-2 text-5xl rounded-full hidden" />
    </>
  );
};

export default ScrollUpBtn;
