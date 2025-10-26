import heroSrc from "../assets/illustration-working.svg";

const Hero = () => {
    return (
        <section className="py-14 pb-44">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 px-4 mx-auto max-w-6xl">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-gray-900 mb-2 leading-tight">
                        More than just shorter links
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl mb-6">
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <a className="inline-block px-8 py-3 md:text-lg text-center font-bold text-white bg-blue-400 rounded-full hover:bg-blue-300" href="#">Get Started</a>
                </div>
                <div className="flex-1">
                    <img src={heroSrc} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero;