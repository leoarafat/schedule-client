import React from "react";

const PaymentTerms = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold my-5">Payment Terms & Condition</h1>

      <li className="my-2">
        If you are a free version of one of our Services, it is really free; we
        don not ask you for credit card and - just like for customers who pay
        for our services - we don't sell your data
      </li>
      <li className="my-2">
        If you are upgrading from free plan to a paid plan, we will charge your
        card immediately and your billing cycle starts on the day of upgrade.
        For other upgrades or downgrades in plan level, the new rate starts from
        the next billing cycle.
      </li>
      <li className="my-2">
        All Fees are exclusive of all taxes, levels, or duties imposed by taxing
        authorities. Where required, we will collect those taxes on behalf of
        the taxing authority and remit those taxes to taxing
        authorities.Otherwise you are responsible for payment of all taxes,
        levels, or duties.
      </li>
      <div className="flex justify-center lg:justify-end mt-20">
        <img src="https://i.ibb.co/MSsVHm1/logo.png" className="w-48" alt="" />
      </div>
    </div>
  );
};

export default PaymentTerms;
