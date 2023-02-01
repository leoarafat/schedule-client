import { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";

const Payment = () => {
  const params = useParams();
  const id = params.id;

  const { user }: any = useContext(AuthContext);

  const { data: membership = [] } = useQuery({
    queryKey: ["membership"],
    queryFn: async () => {
      const res = await fetch(
        `https://scheduplannr-server.vercel.app/membership/${id}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(membership);
  return (
    <div>
      <h1 className="text-6xl font-bold text-center uppercase">
        Pay<span className="text-primary">Now</span>
      </h1>
      {/* <h1 className="text-center text-xl mt-10">
        You are on <span className="font-bold">{membership?.status}</span> Plan
      </h1> */}
      <h1 className="text-center text-xl mt-10">Please Pay <span className="font-bold text-2xl">${membership?.cost}</span> to upgrade <span className="font bold text-2xl">{membership?.status}</span></h1>
    </div>
  );
};

export default Payment;
