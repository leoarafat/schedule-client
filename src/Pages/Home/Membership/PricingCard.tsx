const PricingCard = ({ plan }: any) => {
  const {
    status,
    cost,
    Email_support,
    Active_event_types,
    payments,
    Customize_email_notifications,
    Phone_support,
    Update_your_cancellation_policy,
    View_analytics_and_insights
  } = plan;
  console.log(plan);

  
  return (
    <div className="my-16">
      <div className="relative group">
        <div
          aria-hidden="true"
          className="absolute top-0 w-full h-full rounded-2xl bg-sky-200 shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
        ></div>
        <div className="relative p-6 space-y-6 lg:p-8">
          <h3 className="text-3xl text-white font-semibold text-center bg-slate-900 w-full p-5">
            {status}
          </h3>
          <div>
            <div className="relative flex justify-around">
              <div className="flex items-end">
                <span className="text-8xl text-gray-800 font-bold leading-0">
                  {cost}
                </span>
                <div className="pb-2">
                  <span className="block text-2xl text-gray-700 font-bold">
                    $
                  </span>
                  <span className="block text-xl text-purple-500 font-bold">
                    /month
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ul role="list" className="w-max space-y-4 py-6 m-auto text-gray-600">
            <li className="space-x-2 flex items-center">
              <i className="fa-solid fa-check-double"></i>

              <span>Active event types : {Active_event_types}</span>
            </li>
            <li className="space-x-2 flex items-center">
              <i className="fa-solid fa-check-double"></i>

              <span>Collect payments with Stripe : {payments}</span>
            </li>
            <li className="space-x-2 flex items-center">
              <i className="fa-solid fa-check-double"></i>

              <span>
                Customize email notifications : {Customize_email_notifications}
              </span>
            </li>
            <li className="space-x-2 flex items-center">
              <i className="fa-solid fa-check-double"></i>

              <span>
                Update your cancellation policy :{" "}
                {Update_your_cancellation_policy}
              </span>
            </li>
            <li className="space-x-2 flex items-center">
              <i className="fa-solid fa-check-double"></i>

              <span>
                View analytics and insights : {View_analytics_and_insights}
              </span>
            </li>
            <li className="space-x-2 flex items-center">
              <i className="fa-solid fa-check-double"></i>

              <span>24/7 Email support : {Email_support}</span>
            </li>
            <li className="space-x-2 flex items-center">
              <i className="fa-solid fa-check-double"></i>

              <span>24/7 Phone support : {Phone_support}</span>
            </li>
          </ul>

          <label
            htmlFor="my-modal-3"
            className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
          >
            <span className="text-white font-semibold">Subscribe</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
