import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Contexts/AuthProvider/AuthProvider";
import DetailsPage from "./DetailsPage";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user }: any = useContext(AuthContext);

  const [userInfo, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`http://localhost:5000/user?email=${user?.email}`)
      ).json();

      setData(data);
      toast.success("User Profile Updated successfully");
      navigate("/dashboard/profile");
    };

    dataFetch();
  }, [user?.email]);

  return (
    <div>
      {userInfo?.map((singleUser: any) => (
        <DetailsPage key={singleUser?._id} singleUser={singleUser} />
      ))}
    </div>
  );
};

export default UpdateProfile;
