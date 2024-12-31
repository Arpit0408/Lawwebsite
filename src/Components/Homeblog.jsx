import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};

function BlogSection() {
  const [blogs, setBlogs] = useState([]);

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
  const removeHtmlTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove all HTML tags
  };
  
  const truncateText = (text, length) => {
    const cleanText = removeHtmlTags(text);  // Remove HTML tags
    return cleanText.length > length ? cleanText.substring(0, length) + '...' : cleanText;
  };
  // Limit to first 3 blogs
  const displayedBlogs = blogs.slice(0, 6);

  return (
    <section className="text-black-600 body-font bg-gray-100 dark:bg-[#0b1727] dark:text-white pb-10">
      <div className="flex justify-center md:mb-4">
        <div className=" text-center justify-center">
        
          <section className="  text-center">
          <h2 className="text-3xl  font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white pb-0">Legal Blog/Resources</h2>
      <p className="text-lg pt-4 leading-relaxed max-w-4xl mx-auto">
      Welcome to the Adv. G. V. 
Deshmukh & Associates Legal Blog and Resource Center! Stay informed 
and empowered with expert insights, practical guides, and the latest updates 
in a variety of legal fields. Whether you're looking for advice on a legal 
issue, industry updates, or in-depth articles on complex legal topics, we've 
got you covered. Our Latest Articles and Resources.
      </p>
    </section>
        </div>
       
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {displayedBlogs.map((blog) => (
            <div key={blog.id} className="p-4 md:w-1/3"             data-aos="zoom-in" data-aos-duration="1000"
>
              <div className="h-full border-2 border-blue-500 dark:border-gray-700 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={`https://advocategvadmin.advgvdeshmukh.com/${blog.banner}`} // Assuming 'banner' is the key for the blog's image URL
                  alt="blog"
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{blog.category}</h2> */}
                  <h1 className="title-font text-lg font-medium text-gray-900 text-white mb-3">{blog.title}</h1>
                  <p className="leading-relaxed mb-3"> {truncateText(blog.content, 15)}</p> {/* Assuming 'excerpt' is a short description of the blog */}
                  <div className="flex items-center flex-wrap">
                    <Link to={`/blog/${blog.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
      <Link to="/blog"> <button type="submit" className="text-white text-center bg-blue-500 dark:bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:bg-indigo-700 rounded text-lg">
    All Blogs
  </button></Link>
</div>

    </section>
  );
}

export default BlogSection;
