import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

type UserSubmitForm = {
  name: string;
  email: string;
  phone: number;
  organization: string;
  title: string;
  location: string;
  link: string;
  description: string;
};

const EditSchedule = ({
  organization,
  slot,
  name,
  link,
  location,
  title,
}: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>();

  const handleEdit = (data: UserSubmitForm) => {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const organization = data.organization;
    const title = data.title;
    const location = data.location;
    const link = data.link;
    const description = data.description;

    const info = {
      name,
      email,
      phone,
      organization,
      title,
      location,
      link,
      description,
    };
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </>
  );
};

export default EditSchedule;
