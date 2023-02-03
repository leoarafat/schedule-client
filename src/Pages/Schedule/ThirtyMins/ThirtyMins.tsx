import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const ThirtyMins = () => {
  const { setSlot, setSlotPm, slot, slotPm }: any = useContext(AuthContext);

  const { data: thirtyMinsAm, isLoading } = useQuery({
    queryKey: ["thirtyMinsAm"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/thirtyMinsAM"
      );
      const data = res.json();
      return data;
    },
  });
  const { data: thirtyMinsPm } = useQuery({
    queryKey: ["thirtyMinsPm"],
    queryFn: async () => {
      const res = await fetch(
        "https://scheduplannr-server.vercel.app/thirtyMinsPM"
      );
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <div className="w-[33rem] flex items-center justify-center"><Loading /></div>;
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
          <div className="flex flex-col gap-4 h-[22rem] overflow-scroll pr-2">
            {thirtyMinsAm &&
              thirtyMinsAm[0].slots.map((thirtyAm: any, i: number) => (
                <span
                  onClick={() => setSlot(thirtyAm)}
                  key={i}
                  className="cursor-pointer inline-block rounded border border-primary py-3 w-56 text-center text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                >
                  {thirtyAm}
                </span>
              ))}
          </div>
          <div>
            <div className="flex flex-col gap-4 h-[22rem] overflow-scroll pr-2">
              {thirtyMinsPm &&
                thirtyMinsPm[0].slots.map((thirtyPm: any) => (
                  <span
                    onClick={() => setSlotPm(thirtyPm)}
                    key={thirtyPm._id}
                    className="cursor-pointer inline-block rounded border border-primary py-3 w-56 text-center text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                  >
                    {thirtyPm}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirtyMins;
