import React, { useState ,useEffect } from 'react';
import { FaGavel, FaFileSignature, FaMoneyCheckAlt, FaHandHoldingUsd, FaHome, FaSearch ,FaAward} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faShieldAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/law1.jpg';
import image2 from '../assets/images/law2.jpg';
import image3 from '../assets/images/law3.jpg';
import image4 from '../assets/images/adv23.jpg';
import adv from '../assets/images/ab1.jpg'
import Testimonial from './Testimonial';
import { Link } from 'react-router-dom';
import Gallery from './Gallery.jsx';
import Vedio from './Vedio.jsx';
import Homeblog from './Homeblog.jsx'
import Contact from './Contact.jsx'
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import Banner from './Banner.jsx'
import Webtestimonial from './gtesti.jsx'
 
const Home = () => {
 

 

  return (
    <div >
     
     {/* <div className="relative">
  <Carousel
    showArrows={false}
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    transitionTime={1000}
    className="w-full h-[800px]"
  >
    <div>
      <img
        src={image1}
        alt="Law Image 1"
        className="w-full h-[800px] object-cover"
      />
    </div>
    <div>
      <img
        src={image2}
        alt="Law Image 2"
        className="w-full h-[800px] object-cover"
      />
    </div>
    <div>
      <img
        src={image3}
        alt="Law Image 3"
        className="w-full h-[800px] object-cover"
      />
    </div>
  </Carousel>

  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1727] bg-opacity-50">

    <h1 className="text-white text-center text-3xl md:text-5xl lg:text-6xl font-bold p-6">
    Expert Legal Services Across Civil, 
Property, Corporate, Criminal, and Special Litigation Matters.  
    </h1>
    <p className="text-white text-center text-1xl md:text-3xl lg:text-3xl font-[600] p-6">
    Providing tailored legal solutions for individuals, 
    businesses, and organizations across diverse legal areas.
    </p>
  </div>
</div> */}
<Banner/>

      <section className="bg-gray-100 dark:bg-[#0b1727] mt-10">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className=" text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-4">About Us</h2>
              <p className="mt-4 text-gray-600 text-justify dark:text-gray-300 text-lg">
              Welcome to Adv. G. V. 
Deshmukh & Associates, where We specialize in a comprehensive range of 
legal services, including civil and property litigation, corporate law, real 
estate matters, and criminal cases. Our dedicated team of experienced 
attorneys is committed to providing top-tier legal representation. Whether 
you're dealing with a property dispute, need assistance with corporate 
litigation, or require legal representation in criminal matters, we have the 
expertise to protect your rights and achieve successful outcomes.              </p>
              <div className="mt-8">
              <Link to="/about" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 font-medium">
   Read More <span className="ml-2">&#8594;</span>
  </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                // src="https://img.freepik.com/premium-photo/successful-lawyer-office-sitting-desk_158518-3065.jpg?w=900"
                src={adv}
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
                data-aos="zoom-in" data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </section>

<div className="bg-gray-100 dark:bg-[#0b1727] text-black dark:text-white py-12">
  <div className="container mx-auto px-4">
    {/* Our Approach Section */}
    <section className="mb-12 text-center mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-10">Our Approach</h2>
      <p className="text-lg leading-relaxed max-w-4xl mx-auto">
        Our approach is centered around understanding the unique needs of each client and providing tailored solutions that address their specific legal challenges. With a meticulous and client-focused methodology, Adv. G. V. Deshmukh ensures that every case is handled with the utmost professionalism and dedication.
      </p>
    </section>

    {/* Why Choose Us Section */}
    <section className=" mt-20">
            <h2 className="text-3xl font-semibold mb-8 text-center  text-gray-800 capitalize lg:text-4xl dark:text-white pb-8 ">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center mb-4">
  <FontAwesomeIcon icon={faBriefcase} className="text-blue-500 text-3xl mr-2" />
  <h3 className="text-xl font-semibold">Experienced and Skilled Attorneys:</h3>
</div>

          <p className="text-lg leading-relaxed">
     With expertise across a wide spectrum of legal fields, our lawyers are 
          equipped to handle complex cases.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center mb-4">
  <FontAwesomeIcon icon={faShieldAlt} className="text-green-500 text-3xl mr-1.5" />
  <h3 className="text-xl font-semibold">Tailored Legal Solutions:</h3>
</div>

          <p className="text-lg leading-relaxed">
          We understand that every case is unique. Our approach is to offer 
personalized legal advice that addresses the specific needs of our clients.

          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center mb-4">
  <FontAwesomeIcon icon={faUser} className="text-purple-500 text-3xl mr-1.5" />
  <h3 className="text-xl font-semibold">Proven Success in Litigation
  :</h3>
</div>

          <p className="text-lg leading-relaxed">
          With a solid track record of successful cases, we have earned the trust of 
          clients across Maharashtra and beyond.
          </p>
        </div>
      </div>
    </section>
  </div>
</div>


<section className="bg-gray-100 dark:bg-[#0b1727] dark:text-white mt-10">
<div className="container px-6 mx-auto text-center">
  <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-10">
      {/* Discover Our <br /> Exceptional <span className="underline decoration-blue-500">Legal Services</span> */}
      Our Expertise
    </h1>

    <p className="text-lg leading-relaxed max-w-4xl mx-auto">
    Civil & Property Litigation, Money Recovery, Real 
Estate & Property Transfer, MAHA-RERA, Registration of Documents,
Indian Contract Act, Land Laws In Maharashtra, Corporate Law, Company 
Law, Arbitration and Conciliation Act, Co-operative & Society Act, 
Consumer Law, Intellectual Property Rights (Ipr)., Rent Control Law, 
School & Universities Tribunals, Labour law, Family Laws, law Criminal 
Litigations or Cases, Accident Claim, Information Technology Laws.

    </p>

    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaGavel className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Civil and Property Litigation</h1>
    <p className="text-gray-500 dark:text-gray-300">
      We offer comprehensive legal assistance in civil disputes, including property-related matters. Our services include representing clients in:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Property ownership disputes</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Breach of contract</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Succession and inheritance disputes</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Partition suits and more</div>
    </div>
  </div>

  <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaFileSignature className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Real Estate & Property Transfer</h1>
    <p className="text-gray-500 dark:text-gray-300">
      Whether you're buying, selling, or leasing property, we assist with the legal complexities of real estate transactions. Our services include:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Drafting and reviewing sale agreements</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Property title verifications</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Lease agreements</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Due diligence for property transfer</div>
    </div>
  </div>

  <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaMoneyCheckAlt className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Family Laws</h1>
    <p className="text-gray-500 dark:text-gray-300">
      We offer legal representation in family matters, including:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Divorce and child custody</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Maintenance and alimony</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Domestic violence cases</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Child custody</div>
    </div>
  </div>

  <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaHandHoldingUsd className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Criminal Litigation & Cases</h1>
    <p className="text-gray-500 dark:text-gray-300">
      Our criminal law team represents clients in various criminal matters, including:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Bail applications</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Trial representation</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">White-collar crimes</div>
    </div>
  </div>

  <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaHome className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Co-oprative & Society Laws </h1>
    <p className="text-gray-500 dark:text-gray-300">
    Our services include legal assistance for housing societies and cooperative societies in disputes involving:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Society Administration</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Property Transfer in Societies</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Disputes Between Members and the Society</div>
    </div>
  </div>

  <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-gray-700 rounded-xl" data-aos="zoom-in" data-aos-duration="1000">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      <FaSearch className="w-8 h-8" />
    </span>
    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Land Laws in Maharashtra</h1>
    <p className="text-gray-500 dark:text-gray-300">
      Our team is skilled in handling land disputes governed by Maharashtra’s specific land laws. We assist with:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Land acquisition disputes</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Tenancy disputes</div>
      <div className="p-1 border border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">Title disputes under the Maharashtra Land Revenue Code</div>
    </div>
  </div>
</div>

  </div>

  <div className="flex justify-center pt-8">
      <Link to="/services"> <button type="submit" className="text-white text-center bg-blue-500 dark:bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded text-lg">
   All Services
  </button></Link>
</div>
</section>


      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-[#0b1727] dark:text-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <Testimonial />

    
        </div>
      </section>
      {/* <section


  className="bg-gray-100 dark:bg-white dark:text-white"
  style={{ height: '100px', marginTop: '-5rem', zIndex: '9999999999' }}
>
  sdggs
</section> */}
 <section className="bg-gray-100 dark:bg-[#0b1727] dark:text-white">
 <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
<Webtestimonial/>
        </div>
      </section>
   

      <Homeblog/>

      <section className="bg-gray-100 dark:bg-[#0b1727] dark:text-white pt-10">
      <div className="flex justify-center md:mb-2">
				<div className="sm:max-w-lg text-center justify-center">
					<h2 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-1">
          Legal Events Images
					</h2>
				
				</div>
			</div>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <Gallery/>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-[#0b1727] dark:text-white pt-10">
      <div className="flex justify-center md:mb-4">
				<div className="sm:max-w-lg text-center justify-center">
					<h2 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-1">
          Legal Events Video 
					</h2>
				
				</div>
			</div>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <Vedio/>
        </div>
      </section>

    <Contact/>
    </div>
  );
};

export default Home;
