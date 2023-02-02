import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { MdOutlineVerifiedUser } from "react-icons/md";

const AllUserTables = () => {
  const [search, setSearch] = useState("");
  const [filterUser, setFilterUser] = useState([]);

  const { data: userInfo = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  console.log(userInfo);

  useEffect(() => {
    const result = userInfo?.filter((user) => {
      return user?.name?.toLowerCase()?.match(search?.toLowerCase());
    });
    setFilterUser(result);
  }, [userInfo, search]);

  const column = [
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "User Email",
      selector: (row) => row.email,
    },
    {
      name: "Handle Admin",
      cell: (row) => (
        <>
          {row?.role !== "admin" && (
            <button onClick={() => handleAdmin(row._id)} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </>
      ),
    },
    {
      name: "Status",
      selector: (row) => (
        <>
          {row?.role === "admin" && (
            <p className="flex items-center">
             {row.role} <MdOutlineVerifiedUser className="w-4 h-4 text-blue-400" />
              
            </p>
          )}
        </>
      ),
    },
  ];

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful");
          refetch();
        }
      });
  };

  return (
    <DataTable
      title="User List"
      columns={column}
      data={filterUser}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search User"
          className="w-[250px] bg-gray-200 text-gray-800 border focus:ring ring-sky-300 rounded outline-none transition duration-100 px-3 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      }
      subHeaderAlign="left"
    />
  );
};

export default AllUserTables;
