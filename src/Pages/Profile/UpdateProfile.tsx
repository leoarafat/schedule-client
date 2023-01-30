import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import DetailsPage from "./DetailsPage";

const UpdateProfile = () => {
  const { user }: any = useContext(AuthContext);
  console.log(user);

  const { data: userInfo = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/user?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(userInfo);

  return (
    <div>
      {userInfo?.map((singleUser: any) => (
        <DetailsPage key={singleUser?._id} singleUser={singleUser} />
      ))}
    </div>
  );
};

export default UpdateProfile;
