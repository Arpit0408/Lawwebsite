import React from 'react'
import Testimonial from './Testimonial';
import { Link } from 'react-router-dom';
import adv from '../assets/images/ab1.jpg'
import Hihlihts from './keypoints';
const About = () => {
  return (
   <>
<section className="bg-gray-100 dark:bg-[#121C2B] h-[300px] flex items-center justify-center">

     <h1 className='text-3xl font-semibold text-gray-800 pt-20 capitalize text-center lg:text-4xl dark:text-white pb-1'>About Us</h1>
    </section>
 <section className="bg-gray-100 dark:bg-[#0b1727] mt-10">
  
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white pb-1">Adv. G. V. Deshmukh & Associates</h2>
            <p className="mt-4 text-gray-700 text-justify dark:text-gray-300 text-lg">
            At Adv. G. V. Deshmukh & Associates, we are committed to 
providing comprehensive legal services tailored to meet the needs of 
our diverse clientele. Our firm specializes in a broad spectrum of legal 
areas, ensuring that we can address complex issues with precision and 
professionalism. With years of experience and an unwavering 
commitment to justice, our dedicated team of legal experts is here to 
protect your rights and interests.
            </p>
            
           
          </div>

          <div className="mt-12 md:mt-0"             data-aos="zoom-in" data-aos-duration="1000"
          >
            <img
             // src="https://img.freepik.com/premium-photo/successful-lawyer-office-sitting-desk_158518-3065.jpg?w=900"
             src={adv}
              alt="Adv. G V. Deshmukh"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <Hihlihts/>
<Testimonial/>
    </section>
      <section class="bg-gray-100 dark:bg-[#0b1727] py-12 pb-12">
     <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white pb-10">
  Commitment to Transparent Communication and Client Satisfaction
</h2>

      <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8 text-center">
      At Adv. G. V. Deshmukh & Associates, 
we believe that clear communication and client satisfaction are the 
foundation of a successful attorney-client relationship. Our commitment to 
transparency means:
      </p>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white dark:bg-[#1c2b3a] shadow-xl rounded-lg p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="md:w-2/3">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">ADV. G. V. DESHMUKH</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">(Civil/ Property and Criminal Lawyer in Pune)</p>
        </div>
        <div class="mt-4 md:mt-0 md:w-1/3">
          <p class="text-gray-600 dark:text-gray-400">
            <strong>Mobile No.:</strong> 9604455660<br />
            <strong>E-mail ID:</strong> <a href="mailto:adv.ganeshvd@gmail.com" class="text-blue-600 dark:text-blue-400">adv.ganeshvd@gmail.com</a><br />
            <strong>Address:</strong> Office No. 204, 2nd floor, Ashiyana Building, Near District and Session Court, gate no. 4, Nyaymurti Rande Path, Shivaji Nagar, Pune – 411005
          </p>
        </div>
      </div>
      <div class="mt-8 space-y-6 text-gray-800 dark:text-gray-300">
       
      <ul className="list-disc ml-5 space-y-2 text-[20px]">
          <li>  <strong>Clear, Honest Advice:</strong> We provide straightforward legal guidance, 
explaining complex legal matters in simple terms so you can make informed 
decisions.</li>
<li>  <strong>Frequent Updates:</strong> We keep you informed at every stage of your case, 
ensuring that you're never left in the dark about the status or developments.
</li>
<li>  <strong>Responsive Service:</strong> Our team is always available to answer your questions 
and address your concerns, ensuring that you feel supported throughout the 
legal process.</li>
<li>  <strong>Tailored Solutions: </strong> We take the time to understand your unique situation, 
crafting legal strategies that align with your goals and priorities.
</li>
<li>  <strong>Client Satisfaction First:</strong> Your success and peace of mind is our top 
priorities. We work diligently to secure the best possible outcomes and 
ensure you’re satisfied with our services.</li>

        </ul>

        <p>We strive to build trust through open, honest communication and a client-focused approach, ensuring that every interaction is a positive experience</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      {/* <section className="bg-gray-100 dark:bg-[#0b1727] dark:text-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <Testimonial />
        </div>
      </section> */}
   </>
  )
}

export default About