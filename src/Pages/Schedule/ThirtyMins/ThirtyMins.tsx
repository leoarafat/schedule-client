import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../components/Contexts/AuthProvider/AuthProvider";

const ThirtyMins = () => {
  const { setSlot, setSlotPm }: any = useContext(AuthContext);

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
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className="h-[25rem] md:py-0 py-12 px-2">
        <h1 className="text-center text-2xl mb-4 text-primary -mt-2">
          Please select a time slot{" "}
        </h1>
        <div className="flex justify-center gap-4">
          <div className="flex flex-col gap-4 h-[22rem] overflow-y-auto pr-2">
            {thirtyMinsAm &&
              thirtyMinsAm[0].slots.map((thirtyAm: any) => (
                <span
                  onClick={() => setSlot(thirtyAm)}
                  key={thirtyAm._id}
                  className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                >
                  {thirtyAm}
                </span>
              ))}
          </div>
          <div>
            <div className="flex flex-col gap-4 h-[22rem] overflow-y-auto pr-2">
              {thirtyMinsPm &&
                thirtyMinsPm[0].slots.map((thirtyPm: any) => (
                  <span
                    onClick={() => setSlotPm(thirtyPm)}
                    key={thirtyPm._id}
                    className="cursor-pointer inline-block rounded border border-primary py-3 px-5 text-xl font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
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
