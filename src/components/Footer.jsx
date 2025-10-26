import logoSrc from "../assets/logo.svg";
import facebookIconSrc from "../assets/icon-facebook.svg";
import instagramIconSrc from "../assets/icon-instagram.svg";
import pinterestIconSrc from "../assets/icon-pinterest.svg";
import twitterIconSrc from "../assets/icon-twitter.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-950 py-16">
            <div className="px-4 mx-auto max-w-6xl">
                <div className="text-center grid gap-y-12 grid-cols-12">
                    <div className="col-span-full lg:col-span-4">
                        <img className="mx-auto lg:mx-0 invert-100 brightness-0" src={logoSrc} alt="Logo" />
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <h3 className="font-bold text-white mb-4 text-sm">Features</h3>
                        <ul className="grid gap-1">
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Link Shortening
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Branded Links
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Analytics
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <h3 className="font-bold text-white mb-4 text-sm">Resources</h3>
                        <ul className="grid gap-1">
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Developers
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <h3 className="font-bold text-white mb-4 text-sm">Company</h3>
                        <ul className="grid gap-1">
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-400 text-sm" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-full lg:col-span-2">
                        <ul className="flex gap-6 justify-center lg:justify-start items-center">
                            <li className="shrink-0">
                                <a className="hover:text-amber-300" href="#">
                                    <img src={facebookIconSrc} alt="Facebook Icon" />
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a href="#">
                                    <img className="shrink-0" src={twitterIconSrc} alt="Twitter Icon" />
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a href="#">
                                    <img className="shrink-0" src={pinterestIconSrc} alt="Pinterest Icon" />
                                </a>
                            </li>
                            <li className="shrink-0">
                                <a href="#">
                                    <img className="shrink-0" src={instagramIconSrc} alt="Instagram Icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;