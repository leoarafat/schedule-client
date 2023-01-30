import React from "react";

const DetailsPage = ({ singleUser }: any) => {
  const { name, email } = singleUser;
  return (
    <div>
      <section className="p-6 bg-base-100">
        <form
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
            <div className="space-y-2">
              <p className="font-medium">
                <img
                  className="rounded-full w-[120px] h-[120px]"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
                  alt=""
                />
              </p>
              <p>
                <input
                  className="md:w-full rounded-sm p-2"
                  type="file"
                  name=""
                  id=""
                />
              </p>
            </div>

            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm font-semibold">
                  firs name
                </label>
                <input
                  id="firstname"
                  type="text"
                  defaultValue={name}
                  placeholder="First name"
                  className="w-full rounded-sm p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm font-semibold">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-sm p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  readOnly
                  disabled
                  defaultValue={email}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-sm p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm font-semibold">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-sm p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="gender" className="text-sm font-semibold">
                  Gender
                </label>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm font-semibold">
                  Date & Birth
                </label>
                <input
                  id="date"
                  type="date"
                  placeholder=""
                  className="w-full rounded-sm p-2"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm font-semibold">
                  Contact Number
                </label>
                <input
                  id="number"
                  type="number"
                  placeholder=""
                  className="w-full rounded-sm p-2"
                />
              </div>
              <div className="col-span-full ">
                <label htmlFor="zip" className="text-sm font-semibold">
                  Bio
                </label>
                <textarea className="textarea w-full rounded-sm p-2 bg-white" placeholder="Bio"></textarea>
              </div>
            </div>
          </fieldset>
          <div className="flex justify-end">
            <button type="submit" className="btn text-gray-50">
              Update Profile
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default DetailsPage;
