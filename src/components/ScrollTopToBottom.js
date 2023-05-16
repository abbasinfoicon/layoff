import React, { useEffect, useState } from "react";

const ScrollTopToBottom = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // console.log(scrollPosition);
    // const scroll = document.body.scrollTop
    //   console.log(scroll);

    return (
        <>
            {scrollPosition > 300 ? (
                <button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }} id="scroll"><img src="assets/images/up-arrow.png" alt="" className="img-fluid" /></button>

            ) : null}
        </>
    );
};

export default ScrollTopToBottom;