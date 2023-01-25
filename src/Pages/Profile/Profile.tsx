import React from "react";

const Profile = () => {
  return (
    <div className="my-10 bg-gray-200 p-10 rounded-lg">
      <h2 className="text-center text-4xl font-bold">
        Pro<span className="text-primary">file</span>
      </h2>
      <p className="text-center font-semibold mt-2">
        Ami omuk tomuk bissas koren rasel vai
      </p>
      <div className="flex items-center justify-center gap-20">
        <div className="w-1/2">
          <img
            className="rounded-full p-8"
            src="https://cdn.discordapp.com/attachments/1067344548562468954/1067777688770711655/Md._Asif_Ullah_Sikder_cyberpunk_toddler_cat_neon_kid_8k--v_4_2dee051e-26c2-4a0c-a8f6-6b9516c0c4d9.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <h4 className="text-2xl font-semibold">Name: Asif Sikder </h4>
          <p>Email: asifsikdartiktoker@gmail.com</p>
          <p>Call Me: +8801527657153</p>
          <h4 className="text-2xl mt-2">About Me</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            id incidunt cupiditate nostrum molestiae illum a impedit
            exercitationem eaque eius perferendis, nobis alias beatae ea totam
            quas, distinctio optio corrupti?
          </p>
          <div className="grid grid-cols-4 gap-5 mt-10">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
