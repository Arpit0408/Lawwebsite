import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const baseImageUrl = 'https://advocategvadmin.advgvdeshmukh.com/';

const TestimonialSection = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [index, setIndex] = useState(0);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('https://advocategvadmin.advgvdeshmukh.com/readreview.php');
                const data = await response.json();

                if (data.success && Array.isArray(data.data)) {
                    setTestimonials(data.data);
                } else {
                    console.error('Failed to load testimonials.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchTestimonials();
    }, []);

   
    const nextTestimonial = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('fullname', name);
        formData.append('review', review);
        if (image) formData.append('image', image);

        try {
            const response = await fetch('https://advocategvadmin.advgvdeshmukh.com/insertreview.php', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                alert('Review submitted successfully.');
                setName('');
                setReview('');
                setImage(null);
                fetchTestimonials();
            } else {
                alert('Error: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the review.');
        }
    };

    if (testimonials.length === 0) {
        return <p>Loading...</p>;
    }

    // Calculate the current set of testimonials to display
    const displayedTestimonials = testimonials.slice(index, index + 3);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="container px-6 mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-10">
                        Testimonials
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    {displayedTestimonials.map((testimonial, i) => (
                        <div key={i} className="w-full sm:w-1/2 lg:w-1/3 mb-6 p-4">
                            <div className="h-full text-center border-2 border-blue-500 dark:border-gray-700 rounded-lg p-5">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src={testimonial.image ? `${baseImageUrl}${testimonial.image}` : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="gray"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>'}
                                />
                                <p className="leading-relaxed dark:text-white">{testimonial.content}</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 dark:text-white font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-4">
                    <button onClick={prevTestimonial} className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
                    </button>
                    <button onClick={nextTestimonial} className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-10">
                    <div className="container px-6 mx-auto text-center">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-10">
                            Give Review
                        </h1>
                    </div>
                    <div className="bg-white dark:bg-[#121C2B] dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none dark:bg-[#121C2B] dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="review">
                                Review
                            </label>
                            <textarea
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                className="shadow appearance-none border dark:bg-[#121C2B] dark:text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="4"
                                placeholder="Enter your review"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="image">
                                Image
                            </label>
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                className="shadow appearance-none border dark:bg-[#121C2B] dark:text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default TestimonialSection;
