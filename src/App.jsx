import { useState } from "react";

import { shortenURL } from "./utils/shorten";

import iconBrandSrc from "./assets/icon-brand-recognition.svg";
import iconDetailedSrc from "./assets/icon-detailed-records.svg";
import iconCustomSrc from "./assets/icon-fully-customizable.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import ShortedLink from "./components/ShortedLink";
import Footer from "./components/Footer";

const App = () => {
    const [shortURLs, setShortURLs] = useState([]);

    const handleSubmit = async (event) => {
        console.log(event)
        event.preventDefault();
        const formData = new FormData(event.target);
        const url = formData.get('url');

        // Check if url is already shortened
        let urlAlreadyShortened = false
        shortURLs.forEach(item => {
            if (item.url === url) {
                urlAlreadyShortened = true;
            }
        });

        if (urlAlreadyShortened) {
            console.log('Url already shortened')
            return;
        }

        const shortUrl = await shortenURL(url)

        const newURL = {
            url,
            shortUrl
        }

        console.log(newURL)

        setShortURLs(prev => [...prev, newURL])
    }

    return (
        <>
            <Navbar />

            <Hero />

            <Form handleSubmit={handleSubmit} />

            <section className="bg-blue-50 py-32 pt-24">
                <div className="px-4 mx-auto max-w-6xl relative">
                    {/* List of shortened links */}
                    {
                        shortURLs.map((data, idx) => (
                            <ShortedLink key={idx} url={data.url} shortUrl={data.shortUrl} />
                        ))
                    }
                    


                    <h2 className="text-center text-gray-900 text-4xl font-bold mt-32 mb-4">Advanced Statistics</h2>
                    <p className="text-center text-gray-500 max-w-lg mx-auto mb-32">
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-24 lg:gap-8 relative">
                        <div className="absolute left-1/2 lg:top-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 h-full w-2 lg:h-2 lg:w-full bg-blue-400"></div>
                        <div className="bg-white rounded-md px-8 pt-16 pb-6 relative lg:-top-8">
                            <div className="rounded-full bg-purple-950 inline-block p-6 absolute -top-12 left-8">
                                <img src={iconBrandSrc} alt="" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Recognition</h3>
                            <p className="text-gray-500">Boost your brand recognition with each click. Generic links don’t
                                mean a thing. Branded links help instil confidence in your content.</p>
                        </div>
                        <div className="bg-white rounded-md px-8 pt-16 pb-6 relative">
                            <div className="rounded-full bg-purple-950 inline-block p-6 absolute -top-12 left-8">
                                <img src={iconDetailedSrc} alt="" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Records</h3>
                            <p className="text-gray-500">Gain insights into who is clicking your links. Knowing when and where
                                people engage with your content helps inform better decisions.</p>
                        </div>
                        <div className="bg-white rounded-md px-8 pt-16 pb-6 relative lg:top-8">
                            <div className="rounded-full bg-purple-950 inline-block p-6 absolute -top-12 left-8">
                                <img src={iconCustomSrc} alt="" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Customizable</h3>
                            <p className="text-gray-500">Improve brand awareness and content discoverability through customizable
                                links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-purple-950 py-14 bg-cover bg-[url(/bg-boost-mobile.svg)] lg:bg-[url(/bg-boost-desktop.svg)]">
                <div className="px-4 mx-auto max-w-6xl text-center">
                    <h1 className="text-center text-4xl font-bold text-white mb-8">Boost your links today</h1>
                    <a className="inline-block px-8 py-3 md:text-lg text-center font-bold text-white bg-blue-400 rounded-full hover:bg-blue-300" href="#">Get Started</a>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default App
