import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  title: string;
  note: string;
};

const AddNotes = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const addNotes: any = {
      title: data.title,
      note: data.note,
    };

    fetch("https://scheduplannr-server.vercel.app/notes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addNotes),
    })
      .then((res) => res.json())
      .then((data) => {
        // setDataa(data)
        if (data.acknowledged) {
          alert("done!");
          // toast.success('Successfully toasted!')
          // loading(true)
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-blue-100 p-10 my-16">
      <div className="border-2 bg-blue-50 border-dashed border-gray-500 py-10 lg:px-16 px-5 text-2xl text-primary font-bold">
        <h2 className="mb-5 font-semibold lg:text-3xl text-2xl">
          Take your note
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("title")}
            placeholder="Add Title"
            className="border border-gray-500 input input-bordered w-full mb-3"
          />
          <textarea
            {...register("note")}
            className="textarea textarea-bordered border-gray-500 w-full h-32"
            placeholder="What's on your mind?"
          ></textarea>
          <button className="btn btn-primary text-white px-7 mt-3">
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
