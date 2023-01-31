import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const params = useParams();
    const id = params.id;

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
            {
                membership &&
                <h1>{membership.status}</h1>
            }
        </div>
    );
};

export default Payment;