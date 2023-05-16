import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";

const options = {
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
};

const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([]);
    const getData = () => {
        fetch('data.json').then(res => {
            return res.json();
        }).then(data => {
            setTestimonial(data.testimonials)
        });
    }
    useEffect(() => {
        getData()
    }, [])

    console.log("testimonial", testimonial)

    return (
        <section className="py-12 overflow-hidden bg-primary bg-opacity-80 md:py-20">
            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <svg className="absolute transform top-full right-full translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 rotate-3" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-squares">
                    <title id="svg-squares">squares</title>
                    <defs>
                        <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-primary" fill="currentColor"></rect>
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"></rect>
                </svg>

                <div className="relative">
                    {testimonial.length &&
                        <OwlCarousel {...options}>
                            {
                                testimonial?.map((item, index) => {
                                    return (
                                        <blockquote key={index}>
                                            <div className="max-w-3xl mx-auto text-xl font-bold leading-7 text-center text-white md:leading-10 md:text-3xl text-shadow-sm">
                                                <p> &quot;{item.content}&quot; </p>
                                            </div>
                                            <footer className="mt-8">
                                                <div className="md:flex md:items-center md:justify-center">
                                                    <div className="md:flex-shrink-0">
                                                        <img src={item.authorImg} className="w-10 h-10 mx-auto border-2 border-slate-200 rounded-full shadow-sm object-cover" alt="Testimonial" /></div>
                                                    <div className="mt-3 text-center md:mt-0 md:ml-3 md:flex md:items-center text-shadow-sm">
                                                        <div className="text-lg font-medium text-white">{item.author}</div>
                                                    </div>
                                                </div>
                                            </footer>
                                        </blockquote>
                                    )
                                })
                            }
                        </OwlCarousel>
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials