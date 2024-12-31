import React from 'react'
import Gallery from './Gallery';
import Vedio from './Vedio';
const Gallerys = () => {
  return (
    <div>
         <section className="bg-gray-100 dark:bg-[#121C2B] h-[300px] flex items-center justify-center">

<h1 className='text-3xl font-semibold text-gray-800 pt-20 capitalize text-center lg:text-4xl dark:text-white pb-1'>Gallery</h1>
</section>
<section className="bg-gray-100 dark:bg-[#0b1727] dark:text-white pt-10">
      <div className="flex justify-center md:mb-4">
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
    </div>
  )
}

export default Gallerys