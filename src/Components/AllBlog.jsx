import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaGavel, FaFileSignature, FaMoneyCheckAlt, FaHandHoldingUsd, FaHome, FaSearch } from 'react-icons/fa'; // Import necessary icons

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8; // Adjust the number of blogs per page as needed

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://advocategvadmin.advgvdeshmukh.com/allblog.php');
        if (response.data.success) {
          setBlogs(response.data.data); // Store the fetched blogs in the state
        } else {
          console.error('Failed to fetch blogs:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate the current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  const removeHtmlTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove all HTML tags
  };
  
  const truncateText = (text, length) => {
    const cleanText = removeHtmlTags(text);  // Remove HTML tags
    return cleanText.length > length ? cleanText.substring(0, length) + '...' : cleanText;
  };
  return (
    <>
    <section className="bg-gray-100 dark:bg-[#121C2B] h-[300px] flex items-center justify-center">

<h1 className='text-3xl font-semibold text-gray-800 pt-20 capitalize text-center lg:text-4xl dark:text-white pb-1'>All Blog</h1>
</section>
  
  
    <div className="bg-white dark:bg-[#0b1727] dark:text-white mt-20 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
        <h2 className="text-3xl  font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white pb-0">Legal Blog/Resources</h2>
      <p className="text-lg pt-4 leading-relaxed text-center max-w-4xl mx-auto">
      Welcome to the Adv. G. V. 
Deshmukh & Associates Legal Blog and Resource Center! Stay informed 
and empowered with expert insights, practical guides, and the latest updates 
in a variety of legal fields. Whether you're looking for advice on a legal 
issue, industry updates, or in-depth articles on complex legal topics, we've 
got you covered. Our Latest Articles and Resources.
      </p>
        </div>
        {/* text - end */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8 ">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="flex flex-col items-center border-blue-500 dark:border-gray-700 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 md:flex-row"
            >
              <Link
                to={`/blog/${blog.id}`}
                className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 dark:bg-gray-800 md:h-full md:w-32 lg:w-48"
              >
                <img
                  src={`https://advocategvadmin.advgvdeshmukh.com/${blog.banner}`}
                  loading="lazy"
                  alt={blog.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>

              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-sm text-gray-400 dark:text-gray-500">
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>

                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    {blog.title}
                  </Link>
                </h2>

                <p className="text-gray-500 dark:text-gray-400">
                  {truncateText(blog.content, 15)}
                </p>

                <div>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 text-gray-600 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === i + 1
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
            className="px-4 py-2 mx-1 text-gray-600 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllBlog;
