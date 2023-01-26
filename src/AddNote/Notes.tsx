import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "react-query";

const Notes = () => {

  const { data: notes, isLoading, refetch } = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/notes');
      const data = res.json();
      return data;
    }
  })

  if (isLoading) {
    return <p>loading...</p>
  }

  console.log(notes)

  return (
    <div>
      <div className="">
        <h1 className="text-4xl text-center mb-5 text-primary font-semibold">
          Your Notes
        </h1>

        {
          notes.map((note: any) =>
            <div className="border border-gray-500 bg-blue-100 py-5 px-10 rounded-lg m-3">
              <p className="text-2xl flex items-center justify-between">
                <label htmlFor="my-modal-3" className="w-full">
                  <p>{note.title}</p>
                </label>
                <span className="flex items-center text-lg">
                  11/12/2023{" "}
                  <RiDeleteBin6Line className="text-3xl ml-5 hover:text-red-700" />
                </span>

              </p>

              {/* The button to open modal */}


              {/* Put this part before </body> tag */}

            </div>)
        }

        < input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <p>d</p>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Notes;
