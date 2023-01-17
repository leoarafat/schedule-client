import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4">
            <img
              className="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
              alt=""
            />

            <div className="bg-white flex flex-col justify-start p-6">
              <p className="text-blue-700 text-sm font-bold uppercase pb-4">
                Technology
              </p>
              <p className="text-3xl font-bold hover:text-gray-700 pb-4">
                Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
              </p>
              <p className="text-sm pb-3">
                By{" "}
                <p className="font-semibold hover:text-gray-800">David Grzyb</p>
                Published on April 25th, 2020
              </p>
              <p className="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus,
                quis iaculis dui porta volutpat. In sit amet posuere magna..
              </p>
              <a
                href="/blogPost"
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease uppercase">
                  Continue Reading
                </span>
              </a>
            </div>
          </article>

          <article className="flex flex-col shadow my-4">
            <img
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=3"
              alt=""
            />

            <div className="bg-white flex flex-col justify-start p-6">
              <p className="text-blue-700 text-sm font-bold uppercase pb-4">
                Technology
              </p>
              <p className="text-3xl font-bold hover:text-gray-700 pb-4">
                Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
              </p>
              <p className="text-sm pb-3">
                By{" "}
                <p className="font-semibold hover:text-gray-800">David Grzyb</p>
                Published on April 25th, 2020
              </p>
              <p className="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus,
                quis iaculis dui porta volutpat. In sit amet posuere magna..
              </p>
              <a
                href="/blogPost"
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease uppercase">
                  Continue Reading
                </span>
              </a>
            </div>
          </article>

          <article className="flex flex-col shadow my-4">
            <img
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
              alt=""
            />

            <div className="bg-white flex flex-col justify-start p-6">
              <p className="text-blue-700 text-sm font-bold uppercase pb-4">
                Technology
              </p>
              <p className="text-3xl font-bold hover:text-gray-700 pb-4">
                Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
              </p>
              <p className="text-sm pb-3">
                By{" "}
                <p className="font-semibold hover:text-gray-800">David Grzyb</p>
                Published on April 25th, 2020
              </p>
              <p className="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus,
                quis iaculis dui porta volutpat. In sit amet posuere magna..
              </p>
              <a
                href="/blogPost"
                className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-primary opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease uppercase">
                  Continue Reading
                </span>
              </a>
            </div>
          </article>

          <div className="flex items-center py-8">
            <a
              href="#"
              className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
            >
              1
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
            >
              2
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >
              Next <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis est eu odio sagittis tristique. Vestibulum ut finibus leo.
              In hac habitasse platea dictumst.
            </p>
            <a
              href="/about"
              className="w-full bg-primary text-white font-bold text-sm uppercase rounded hover:bg-blue-600 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                alt=""
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                alt=""
              />
            </div>
            <a
              href="#"
              className="w-full bg-primary text-white font-bold text-sm uppercase rounded hover:bg-blue-600 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i className="fab fa-instagram mr-2"></i> Follow @dgrzyb
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
