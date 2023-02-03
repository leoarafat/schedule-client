import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import FifteenAmChild from "./FifteenAmChild";
import FifteenPmChild from "./FifteenPmChild";

const Fifteen = () => {
  const { setSlot, setSlotPm, slot, slotPm }: any = useContext(AuthContext);
  const { data: fifteenMinsAm, isLoading } = useQuery({
    queryKey: ["fifteenMinsAM"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/fifteenMinsAM"
      );
      const data = res.json();
      return data;
    },
  });

  const { data: fifteenMinsPm } = useQuery({
    queryKey: ["fifteenMinsPM"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/fifteenMinsPM"
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="h-[25rem] lg:py-0 py-12 px-2">

        {
          !slot && !slotPm &&
          <h1 className="text-center text-2xl mb-4 text-primary -mt-2">Please Select A Time Slot</h1>
        }
        {
          slot &&
          <h1 className="text-center text-2xl mb-4 text-primary -mt-2">
            You have selected {slot}
          </h1>
        }
        {
          slotPm &&
          <h1 className="text-center text-2xl mb-4 text-primary -mt-2">
            You have selected {slotPm}
          </h1>
        }

        <div className="flex justify-center gap-4">
          <div className="flex flex-col gap-4 h-[22rem] overflow-y-auto pr-2">
            {fifteenMinsAm &&
              fifteenMinsAm[0].slots.map((fifteenAm: any) => (
                <FifteenAmChild
                  key={fifteenAm._id}
                  fifteenAMslots={fifteenAm}
                  setSlot={setSlot}

                ></FifteenAmChild>
              ))}
          </div>
          <div className="flex flex-col gap-4 h-[22rem] overflow-y-auto pr-2 ">
            {fifteenMinsPm &&
              fifteenMinsPm[0].slots.map((fifteenPm: any) => (
                <FifteenPmChild
                  key={fifteenPm._id}
                  fifteenPMslots={fifteenPm}
                  setSlotPm={setSlotPm}

                ></FifteenPmChild>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifteen;
