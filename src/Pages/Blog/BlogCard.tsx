import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({allBlogs}:any) => {
    const {title, description, image, _id } = allBlogs;

  return (
    <div>
      <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={image}
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-6 relative">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            {title}
            </h3>
          <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
           <> {description ? <>{description.slice(0, 100)+'....'}</> : description}</>
          </p>
          <Link className="inline-block" to={`blogPost/${_id}`}>
            <span className="text-primary">Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
