import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Profile = () => {
  return (
    <div className="my-10 bg-gray-200 p-10 rounded-lg">
      <h2 className="text-center text-4xl font-bold">
        Pro<span className="text-primary">file</span>
      </h2>
      <p className="text-center font-semibold mt-2">
        Ami omuk tomuk bissas koren rasel vai
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center  md:gap-20">
        <div className="w-1/3">
          <img
            className="lg:rounded-full"
            src="https://cdn.discordapp.com/attachments/1067344548562468954/1068048452245786624/Moddasir_cyberpank_toddler_cat_neon_kid_8k_v_4_670da8d2-f209-4930-a191-194b0839d02a.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h4 className="text-2xl font-semibold">Name: Asif Sikder </h4>
          <p>Email: asifsikdartiktoker@gmail.com</p>
          <p>Call Me: +8801527657153</p>
          <h4 className="text-2xl font-semibold mt-2">About Me</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            id incidunt cupiditate nostrum molestiae illum a impedit
            exercitationem eaque eius perferendis, nobis alias beatae ea totam
            quas, distinctio optio corrupti?
          </p>
          <div className="flex justify-evenly mt-16">
            <div>
              <Link to="#">
                <BsFacebook size={"2rem"} />
              </Link>
            </div>
            <div>
              <Link to="#">
                <MdOutlineMarkEmailUnread size={"2rem"} />
              </Link>
            </div>
            <div>
              <Link to="#">
                <BsLinkedin size={"2rem"} />
              </Link>
            </div>
            <div>
              <Link to="#">
                <BsGithub size={"2rem"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
