import { useContext } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { useQuery } from "react-query";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";

const Team = () => {
  const { user }: any = useContext(AuthContext)
  const {
    data: team = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["team", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/team?email=${user?.email}`);
      const data = res.json();
      return data;
    },
  });

  console.log(team);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <>
      {team.map((e: any, i: number) => {
        const {
          name,
          name1,
          name2,
          name3,
          name4,
          email,
          email1,
          email2,
          email3,
          email4,
        } = e;

        return (
          <div className="my-10 pl-10">
            <h1 className="text-center text-4xl py-10 font-semibold">{name}</h1>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-xl">
                  <div className="w-full border-t-8 border-primary rounded-lg flex flex-col gap-6 p-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl">Member 1</h1>
                      <div>
                        <p className="text-xl">
                          <span className="text-gray-500">Name</span>: {name1}
                        </p>
                        <p className="text-xl">
                          <span className="text-gray-500">Email</span>:{email1}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-4 border-t-2 border-gray-400 py-2">
                      <div></div>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Edit"
                      >
                        <AiOutlineEdit size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Delete"
                      >
                        <AiOutlineDelete size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Share"
                      >
                        <AiOutlineShareAlt size={"2rem"} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-xl">
                  <div className="w-full border-t-8 border-primary rounded-lg flex flex-col gap-6 p-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl">Member 2</h1>
                      <div>
                        <p className="text-xl">
                          <span className="text-gray-500">Name</span>: {name2}
                        </p>
                        <p className="text-xl">
                          <span className="text-gray-500">Email</span>:{email2}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-4 border-t-2 border-gray-400 py-2">
                      <div></div>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Edit"
                      >
                        <AiOutlineEdit size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Delete"
                      >
                        <AiOutlineDelete size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Share"
                      >
                        <AiOutlineShareAlt size={"2rem"} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-xl">
                  <div className="w-full border-t-8 border-primary rounded-lg flex flex-col gap-6 p-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl">Member 3</h1>
                      <div>
                        <p className="text-xl">
                          <span className="text-gray-500">Name</span>: {name3}
                        </p>
                        <p className="text-xl">
                          <span className="text-gray-500">Email</span>:{email3}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-4 border-t-2 border-gray-400 py-2">
                      <div></div>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Edit"
                      >
                        <AiOutlineEdit size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Delete"
                      >
                        <AiOutlineDelete size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Share"
                      >
                        <AiOutlineShareAlt size={"2rem"} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-xl">
                  <div className="w-full border-t-8 border-primary rounded-lg flex flex-col gap-6 p-4">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl">Member 4</h1>
                      <div>
                        <p className="text-xl">
                          <span className="text-gray-500">Name</span>: {name4}
                        </p>
                        <p className="text-xl">
                          <span className="text-gray-500">Email</span>:{email4}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-4 border-t-2 border-gray-400 py-2">
                      <div></div>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Edit"
                      >
                        <AiOutlineEdit size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Delete"
                      >
                        <AiOutlineDelete size={"2rem"} />
                      </button>
                      <button
                        className="text-gray-500 hover:text-black"
                        title="Share"
                      >
                        <AiOutlineShareAlt size={"2rem"} />
                      </button>
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

export default Team;
