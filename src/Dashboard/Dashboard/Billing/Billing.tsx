import React from 'react';
import { useQuery } from 'react-query';
import BillingCard from './BillingCard';

const Billing = () => {
  const { data: membership = [] } = useQuery({
    queryKey: ["membership"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/membership"
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(membership);
  return (
    <div className='pl-12 md:pl-0'>
      <h1 className="text-6xl font-bold text-center uppercase">
        Bill<span className="text-primary">ing</span>
      </h1>
      <h1 className='text-xl text-center font-bold mt-10'>Want to upgrade your account?</h1>
      <h1 className='text-sm text-center font-bold'>Choose the right subscription for you</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-10">

            {membership.map((plan: any) => (
              <BillingCard plan={plan} key={plan._id}></BillingCard>
            ))}
            
          </div>
    </div>
  );
};

export default Billing;