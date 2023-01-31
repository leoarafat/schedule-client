import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

type UserSubmitForm = {
  displayName: string;
  email: string;
  password: string;
  image: any;
};
interface dataProps {
  image: any;
  email: string;
  password: string;
  displayName: string;
}

const Unique = () => {
  const {user}: any = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm<UserSubmitForm>();

  const handleAdd = (data: dataProps) => {
    saveUserToDatabase(data?.email, data?.displayName);
    console.log(data?.email);
  };

  const saveUserToDatabase = (email: any, name: any) => {
    const user = { email, name };
    fetch(`http://localhost:5000/unique`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Feedback Successful')
      });
  };


  return (
    <>
      <div className="flex justify-center py-20">
        <div className="rounded-3xl border bg-gray-50 w-[30rem] flex flex-col gap-12 p-12">

          <form
            onSubmit={handleSubmit(handleAdd)}
            className="flex flex-col gap-8"
          >
            <div className="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 focus-within:before:!scale-x-100 before:transition before:duration-300">
              <textarea
                {...register("displayName", {
                  required: "Name is Required",
                })}
                
                placeholder="Give us Feedback"
                className="w-full bg-transparent pb-3  border-b border-gray-300 outline-none transition p-2"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <button
                type="submit"
                className="w-full rounded-full bg-sky-500 text-white h-11 flex items-center justify-center px-6 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
              >
                <span className="text-base font-semibold">Feedback</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Unique;
