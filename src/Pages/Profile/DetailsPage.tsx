import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
interface dataProps {
  name: string;
  email: string;
  firstName: string;
  lastName: string;
  currentAddress: string;
  permanentAddress: string;
  contactNumber: string;
  gender: string;
  birthDate: string;
}
const DetailsPage = ({ singleUser }: any) => {
  const { _id, email } = singleUser;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataProps>();

  const handleAdd = (data: dataProps) => {
    saveToDatabase(
      data.name,
      data.email,
      data.firstName,
      data.lastName,
      data.currentAddress,
      data.permanentAddress,
      data.contactNumber,
      data.gender,
      data.birthDate
    );
  };

  const saveToDatabase = (
    name: string,
    email: string,
    firstName: string,
    lastName: string,
    currentAddress: string,
    permanentAddress: string,
    contactNumber: string,
    gender: string,
    birthDate: string
  ) => {
    const TeamData = {
      name,
      email,
      firstName,
      lastName,
      currentAddress,
      permanentAddress,
      contactNumber,
      gender,
      birthDate,
    };
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(TeamData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Profile Update Successful");
      });
  };
  return (
    <div>
      <div className="my-10 pl-10">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h1 className="text-center text-4xl py-10 font-semibold">
            Update Your <span className="text-primary">Profile</span>
          </h1>

          <form
            onSubmit={handleSubmit(handleAdd)}
            className="max-w-screen-md grid sm:grid-cols-2 gap-8 mx-auto"
          >
            {/* <div>
              <label
                htmlFor="name"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Your First Name
              </label>
              <input
                {...register("name", {
                  required: "Name is Required",
                })}
                defaultValue={name}
                id="name"
                name="name"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.name && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.name.message}
                </p>
              )}
            </div> */}
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName", {
                  required: "Name is Required",
                })}
                id="firstName"
                name="firstName"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("lastName", {
                  required: true,
                })}
                id="lastName"
                name="lastName"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Your Email
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                defaultValue={email}
                readOnly
                id="email"
                name="email"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="currentAddress">Your Current Address</label>
              <input
                {...register("currentAddress", {
                  required: "Name is Required",
                })}
                id="currentAddress"
                name="currentAddress"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Address"
              />
              {errors.currentAddress && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.currentAddress.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="permanentAddress">Your Permanent Address</label>
              <input
                {...register("permanentAddress", {
                  required: "Name is Required",
                })}
                id="permanentAddress"
                name="permanentAddress"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Address"
              />
              {errors.permanentAddress && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.permanentAddress.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                {...register("contactNumber", {
                  required: true,
                })}
                id="contactNumber"
                name="contactNumber"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Number"
              />
              {errors.contactNumber && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.contactNumber.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select
              {...register("gender")}
              className="select input-bordered w-full max-w-xs"
            >
              <option disabled>Please Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
              {errors.gender && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="birthDate">Birth & Date</label>
              <input
                {...register("birthDate", {
                  required: true,
                })}
                type='date'
                id="birthDate"
                name="birthDate"
                className="w-full bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
                placeholder="Email"
              />
              {errors.birthDate && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.birthDate.message}
                </p>
              )}
            </div>
            <div></div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus-visible:ring ring-sky-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
