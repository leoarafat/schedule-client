import { useContext } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const Team = () => {
  const { user }: any = useContext(AuthContext);

  const {
    data: team = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["team", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://scheduplannr-server.vercel.app/team?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  console.log(team);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link to={"/dashboard/createTeam"}>
          <button className="inline-block rounded bg-primary px-4 py-2 font-medium text-white hover:bg-indigo-700">
            <div className="flex items-center gap-4">
              <div>
                <IoCreateOutline />
              </div>
              <div>
                <p>Create Team</p>
              </div>
            </div>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {team.map((e: any, i: number) => {
          const {
            name,
            name1,
            name2,
            name3,
            name4,
            email1,
            email2,
            email3,
            email4,
            description,
          } = e;

          return (
            <div className="shadow-lg p-10">
              <div className="overflow-x-auto">
                <div className="flex justify-end mb-5">
                  <button className="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                    <RiDeleteBin6Line />
                  </button>
                </div>
                <div>
                  <p className="text-4xl font-bold text-center mb-5">{name}</p>
                  <p className="text-center my-5">
                    {description}Jala !!! jala !!! Antor jala!!!
                  </p>
                </div>
                <div></div>
                <table className="divide-y-2 divide-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Name
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                        Email
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {name1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {email1}
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {name2}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {email2}
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {name3}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {email3}
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {name4}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {email4}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
