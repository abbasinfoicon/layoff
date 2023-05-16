import React, { useEffect, useState } from 'react'

const Features = () => {
    const [feature, setFeature] = useState([]);
    const getData = () => {
        fetch('data.json').then(res => {
            return res.json();
        }).then(data => {
            setFeature(data.features)
        });
    }
    useEffect(() => {
        getData()
    }, [])

    // console.log("features", feature)

    return (
        <section className="relative pt-16 overflow-hidden bg-white space-y-24">
            {
                feature.map((item, index) => {
                    return (
                        <div className="third-section" key={index}>
                            <div className="lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-6 xl:gap-12 2xl:gap-24">

                                <div className={`${(index + 1) % 2 == 0 ? " lg:mx-auto lg:max-w-3xl xl:pl-12 2xl:pl-20 2xl:justify-self-end" : "lg:col-start-2 lg:mx-0 lg:px-0 lg:pr-8 max-w-xl px-4"} mx-auto space-y-6 sm:px-6 lg:py-28 xl:py-32 2xl:mx-0`}>
                                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">{item.title}<span className="text-primary">.</span></h2>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl">{item.desc}</p>

                                    {
                                        item.ios ? <><a href={item.ios}><img src="assets/images/ios.png" /></a><a href={item.android}><img src="assets/images/android.png" /></a></> : ''
                                    }

                                </div>

                                <div className={`${(index + 1) % 2 == 0 ? "" : "lg:col-start-1"} mt-12 sm:mt-16 lg:mt-0`}>
                                    <div className={`${(index + 1) % 2 == 0 ? "pl-4 sm:-mr-48 sm:-mr-6 sm:pl-6 md:-mr-16" : "pr-4 -sm:ml-48 sm:pr-6 md:-ml-16"} lg:px-0 lg:m-0 lg:relative lg:h-full lg:flex lg:items-center`}>
                                        <img src={item.img} className={`${(index + 1) % 2 == 0 ? "" : "w-full 2xl:max-h-[44rem]"} lg:right-0 rounded-r-2xl`} alt="Early notifications" />
                                        {
                                            item.img2 ? <img src={item.img2} className="lg:right-0 rounded-r-2xl img3" alt="Personalized alerts" /> : ''
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Features