import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [slide, setSlide] = useState({});
    const getData = () => {
        fetch('data.json').then(res => {
            return res.json();
        }).then(data => {
            setSlide(data.slider)
        });
    }
    useEffect(() => {
        getData()
    }, [])

    // console.log("slider", slide)

    return (
        <section id="r1ggg8sk05" className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48" >
            <div className="slider">
                <div className="first-section max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                    <div className="relative z-[1]">
                        <div className="space-x-2 flex items-center">
                            <img className="h-8 w-auto" src="assets/images/logo.svg" alt="LayoffAlert logo" />
                            <p className="text-2xl font-sans font-bold text-gray-900">LoffAlert</p>
                        </div>

                        <div className="mt-14">
                            <div className="mt-6 sm:max-w-xl">
                                <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl">{slide.title}<span className="text-primary">.</span></h1>
                                <h2 className="mt-6 text-lg text-gray-500 sm:text-xl">{slide.subtitle}</h2>
                            </div>

                            <div className="mt-6">
                                <div className="inline-flex items-center">
                                    <div>
                                        <p className="sm:pl-2.5 text-base font-black tracking-tight text-gray-800 sm:text-lg"> “{slide.quote}” </p>
                                        <p className="sm:pl-2.5 text-sm sm:text-base font-bold text-gray-800 text-right">- {slide.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:pl-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="hidden sm:block">
                            <svg className="absolute -mr-3 lg:m-0 lg:left-0 bottom-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
                                <defs>
                                    <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
                                    </pattern>
                                </defs>
                                <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"></rect>
                            </svg>
                        </div>
                        <div className="relative pl-4 ml-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:flex lg:items-center xl:pl-12">
                            <img className="w-full rounded-l-3xl lg:w-auto 2xl:h-full 2xl:max-w-none 2xl:rounded-3xl" src={slide.img} />
                            <img className="rounded-l-3xl lg:w-auto  2xl:max-w-none 2xl:rounded-3xl" src={slide.img2} /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider