import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [isLoading, setIsLoading] = useState(false);


  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      setIsLoading(true);
      const data = await (
        await fetch(`https://scheduplannr-server.vercel.app/blogs`)
      ).json();
      setBlogs(data);
      setIsLoading(false)
    };
    dataFetch();
  }, []);
  return (
    <div>
      <div className="py-12">
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Sharing is Caring
            </h2>
            <p className="lg:mx-auto lg:w-6/12 text-gray-60">
            Sharing is the joint use of a resource or space. It is also the process of dividing and distributing. In its narrow sense, it refers to joint or alternating use of inherently finite goods, such as a common pasture or a shared residence.
            </p>
          </div>
          {
            isLoading &&
                <div className="flex justify-center items-center">
                  {/* <Loading /> */}
                  <img src="https://visme.co/blog/wp-content/uploads/2020/02/header-1200.gif" alt="" />
                </div>
          }
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs?.map((allBlogs: any) => (
              <BlogCard allBlogs={allBlogs} key={allBlogs._id}></BlogCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
