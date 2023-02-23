import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Contexts/AuthProvider/AuthProvider";
import useToken from "../hooks/useToken/useToken";

const GoogleSignIn = () => {
  const { googleSignIn }: any = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result: any) => {
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const lastName = "";
        const currentAddress = "";
        const permanentAddress = "";
        const contactNumber = "";
        const gender = "";
        const birthDate = "";
        const image = "";
        const role = "";
        saveUserToDatabase(
          name,
          email,
          lastName,
          currentAddress,
          permanentAddress,
          contactNumber,
          gender,
          birthDate,
          image,
          role
        );
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const saveUserToDatabase = (
    name: string,
    email: string,
    lastName: string,
    currentAddress: string,
    permanentAddress: string,
    contactNumber: string,
    gender: string,
    birthDate: string,
    image: string,
    role: string
  ) => {
    const user = {
      name,
      email,
      lastName,
      currentAddress,
      permanentAddress,
      contactNumber,
      gender,
      birthDate,
      image,
      role,
    };

    fetch("https://scheduplannr-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleGoogleLogin}
        className="w-full h-11 rounded-full border border-gray-300 px-6 transition active:bg-gray-50"
      >
        <div className="w-max mx-auto flex items-center justify-center space-x-4">
          <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>
          <span className="block w-max text-sm font-semibold tracking-wide text-cyan-700">
            LogIn With Google
          </span>
        </div>
      </button>
    </div>
  );
};

export default GoogleSignIn;
