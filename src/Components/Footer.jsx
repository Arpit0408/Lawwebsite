import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return (
        <footer className={`bg-gray-900 text-white ${darkMode ? 'bg-gray-800' : 'bg-gray-900'}`}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            {/* <img src="" className="h-8 me-3" alt="FlowBite Logo" /> */}
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                ADV. G. V. DESHMUKH
                            </span>
                        </Link>
                        <div className="container mx-auto w-[300px] text-start">
                            <p className="text-lg font-semibold mb-2">
                                Civil, Property, and Criminal Lawyer | Pune
                            </p>
                            <p className="text-sm">
                                Dedicated to providing expert legal services in civil, revenue, and criminal law matters. With extensive experience and a deep understanding of legal proceedings, Adv. G. V. Deshmukh is committed to delivering comprehensive legal solutions tailored to your needs.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                            Opening hours
                        </h2>
                        <ul className="text-gray-500 text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">Monday to Friday - 9.00am to 9.00pm</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/about" className="hover:underline">Saturday - 10.00am to 8.00pm</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/blog" className="hover:underline">Sundays and Holidays: Closed</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                                Useful pages
                            </h2>
                            <ul className="text-gray-500 text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Home</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/about" className="hover:underline">About</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/blog" className="hover:underline">Blogs</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/addareview" className="hover:underline">Give Review</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                                Legal
                            </h2>
                            <ul className="text-gray-500 text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                            <div className="flex space-x-4 mt-4">
                                <a href="https://www.instagram.com/ganeshvd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="https://www.facebook.com/share/bATy1yBy3iTFq9G2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="https://x.com/GvDeshmukh1984" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/ganesh-deshmukh-01293311a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <FaLinkedinIn size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center text-gray-400">
    <a href="https://www.linkedin.com/in/arpit-paliwal-47b660248/?utm" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Developed by Arpit Paliwal™
    </a>
</span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
