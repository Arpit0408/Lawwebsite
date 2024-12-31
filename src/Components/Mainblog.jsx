import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Contact from './Contact';
import pro from '../assets/images/av2.jpg'
const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://advocategvadmin.advgvdeshmukh.com/singleblog.php?id=${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setBlog(data.data);
        } else {
          setError('Failed to load blog');
        }
      })
      .catch(error => {
        setError('Error fetching blog');
        console.error('Error fetching blog:', error);
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!blog) return <p>Loading blog...</p>;

  return (
    <main className="mt-20">
      <div className="mb-4 w-full mx-auto relative bg-white text-black-500 dark:bg-[#0b1727] dark:text-white">
        <div className="px-4 lg:px-0">
          <h2 className="py-4 text-4xl sm:text-left lg:text-center dark:bg-[#0b1727] dark:text-white text-black font-semibold leading-tight">
            {blog.title}
          </h2>
        </div>
        <img
          src={`https://advocategvadmin.advgvdeshmukh.com/${blog.banner}`}
          className="w-full object-cover lg:rounded"
          style={{ height: '28em' }}
          alt={blog.title}
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:px-40 lg:space-x-12 dark:bg-[#0b1727] dark:text-white">
        <div className="px-4 lg:px-0 mt-12 text-black-700 text-lg leading-relaxed w-full lg:w-3/4 dark:bg-[#0b1727] dark:text-white">
          <div className="mb-8">
          <p>{blog.category}</p>

          <p className="pb-6">{blog.content.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              {/* <p>{blog.category}</p> */}
            </div>
            <div className="flex items-center space-x-4">
  <img src={pro} className="w-24 h-24 rounded-full" />
  <h3 className="pb-6 text-xl font-medium">{blog.author}</h3>
  </div>

            </div>
        </div>
      </div>

      <Contact/>

    </main>

  );
};

export default BlogPost;
