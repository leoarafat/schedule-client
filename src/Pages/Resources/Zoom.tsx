import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Zoom = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/tpr2dTK/Zoom-Integration-Desktop.png"
          alt=""
          width={"640px"}
        />
      </div>
      <div className="my-5">
        <p className="text-center text-xl">Create a seamless workflow with</p>
        <p className="text-center text-xl">secure video calls</p>
      </div>
      <div className="flex justify-center">
        <hr className="w-20" />
      </div>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-3/4">
          <div className="flex items-center gap-10">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Connect securely to your Zoom account</p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Automatically schedule private Zoom sessions</p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Send automated notifications to all stakeholders</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Configure your Zoom settings from ScheduPlannr</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Receive automatic updates to rescheduled/deleted events</p>
            </div>
          </div>
          <div className="flex items-center gap-10 mt-5">
            <div>
              <BsFillCheckCircleFill />
            </div>{" "}
            <div>
              <p>Support a variety of meeting types</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <hr className="md:w-3/4"/>
      </div>
    </div>
  );
};

export default Zoom;
