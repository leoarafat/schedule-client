import { useContext, useEffect, useState } from "react";
import AddNote from "../../AddNote/AddNote";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user }: any = useContext(AuthContext);
  const [userInfo, setData] = useState([]);
  console.log(userInfo);
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://localhost:5000/user?email=${user?.email}`)
      ).json();
      setData(data);
    };

    dataFetch();
  }, [user?.email]);
  // console.log(user);
  return (
    <>
      {userInfo?.map((usr: any) => {
        const {
          firstName,
          lastName,
          currentAddress,
          permanentAddress,
          contactNumber,
          gender,
          birthDate,
          image,
          profession,
          about,
          name
        } = usr;
        return (
          <div className="pl-5 md:pl-0">
            <h1 className="text-6xl font-bold text-center md:text-left">
              Pro<span className="text-primary">file</span>
            </h1>
            <div className="container mx-auto my-5 p-5">
              <div className="md:flex no-wrap md:-mx-2 ">
                <div className="w-full md:w-3/12 md:mx-2">
                  <div className=" p-3 border-t-4 border-primary">
                    <div className="image overflow-hidden">
                      {user ? (
                        <img
                          className="h-auto w-full mx-auto"
                          src={image}
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          alt=""
                        />
                      )}
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                      {name}
                    </h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6 text-bold">
                      {profession}
                    </h3>
                    <p className="text-sm text-gray-500 hover:text-gray-600 leading-6 py-5 text-center md:text-left">
                      {about}
                    </p>
                  </div>
                  <div className="my-4"></div>
                </div>

                <div className="w-full h-64">
                  <div className=" p-5 rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                      <span className="text-primary">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                      <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            First Name
                          </div>
                          <div className="px-4 py-2">{firstName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Last Name
                          </div>
                          <div className="px-4 py-2">{lastName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Gender</div>
                          <div className="px-4 py-2">{gender}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Contact No.
                          </div>
                          <div className="px-4 py-2">{contactNumber}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Current Address
                          </div>
                          <div className="px-4 py-2">{currentAddress}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Permanant Address
                          </div>
                          <div className="px-4 py-2">{permanentAddress}</div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">Email</div>
                          <div className="px-4 py-2">
                            <a className="text-blue-800" href={user?.email}>
                              {user?.email}
                            </a>
                          </div>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="px-4 py-2 font-semibold">
                            Birthday
                          </div>
                          <div className="px-4 py-2">{birthDate}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-4"></div>

                  <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div>
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                        <span className="text-primary">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <p className="tracking-wide">Add Note</p>
                      </div>
                      <AddNote></AddNote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Profile;