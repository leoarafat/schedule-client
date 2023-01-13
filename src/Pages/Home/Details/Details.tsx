import React from "react";

const Details = () => {
  return (
    <div className="mt-20">
      <div className="text-center hidden lg:block">
        <h1 className="lg:text-4xl text-3xl font-bold leading-loose s">
          Simplify meeting scheduling today
        </h1>
        <p className="lg:text-xl mt-4 mx-10">
          Start booking more meetings with less hassle.
        </p>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse mt-5">
          <img
            src="https://koalendar.com/assets/_ClLyQxnuf-826.webp"
            alt=""
            className=" rounded-lg shadow-2xl lg:w-3/12 hidden lg:flex"
          />
          <div className="lg:w-8/12 md:w-full mr-auto lg:text-left md:text-left text-center">
            <h3 className="lg:text-3xl md:text-3xl text-3xl font-bold leading-loose lg:text-left lg:mt-10 text-center">
              How it works
            </h3>
            <p className="pt-6 lg:text-xl md:text-xl text-sm lg:text-left text-center text-neutral">
              Never send another "When can you meet?" email again. Get the right
              people together. At the right time. In 3 steps.
            </p>

            <div className="lg:flex md:flex items-center my-10 md:mt-16 lg:flex-row md:flex-row flex-row-reverse">
              <div className="lg:w-1/12 w-3/12 lg:mr-auto md:mr-auto mx-auto">
                <img
                  src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png"
                  className="lg:w-full md:w-9/12"
                  alt=""
                />
              </div>
              <div className="lg:mr-32">
                <h4 className="lg:text-2xl md:text-2xl text-xl font-semibold leading-relaxed">
                  Create simple rules
                </h4>
                <p className="lg:text-lg md:text-lg text-sm lg:mx-0 md:mx-0 mx-4 mt-2 text-neutral md:w-11/12">
                  Setup is easy. Add your availability preferences and it'll do
                  the work for you.
                </p>
              </div>
            </div>

            <div className="lg:flex md:flex items-center my-10 md:mt-16 lg:flex-row md:flex-row flex-row-reverse">
              <div className="lg:w-1/12 w-3/12 lg:mr-auto md:mr-auto mx-auto">
                <img
                  src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png"
                  className="lg:w-full md:w-9/12"
                  alt=""
                />
              </div>
              <div className="lg:mr-32">
                <h4 className="lg:text-2xl md:text-2xl text-xl font-semibold leading-relaxed">
                  Create simple rules
                </h4>
                <p className="lg:text-lg md:text-lg text-sm lg:mx-0 md:mx-0 mx-4 mt-2 text-neutral md:w-11/12">
                  Setup is easy. Add your availability preferences and it'll do
                  the work for you.
                </p>
              </div>
            </div>

            <div className="lg:flex md:flex items-center my-10 md:mt-16 lg:flex-row md:flex-row flex-row-reverse">
              <div className="lg:w-1/12 w-3/12 lg:mr-auto md:mr-auto mx-auto">
                <img
                  src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png"
                  className="lg:w-full md:w-9/12"
                  alt=""
                />
              </div>
              <div className="lg:mr-32">
                <h4 className="lg:text-2xl md:text-2xl text-xl font-semibold leading-relaxed">
                  Create simple rules
                </h4>
                <p className="lg:text-lg md:text-lg text-sm lg:mx-0 md:mx-0 mx-4 mt-2 text-neutral md:w-11/12">
                  Setup is easy. Add your availability preferences and it'll do
                  the work for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
