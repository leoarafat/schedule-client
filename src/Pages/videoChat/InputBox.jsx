import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/Providers/Providers";
import service from '../../Assets/service.png'

const InputBox = () => {
  const { socket } = useSocket();

  const [email, setEmail] = useState();
  const [roomId, setRoomId] = useState();
  const navigate = useNavigate();

  const handleRoomJoined = useCallback(
    ({ roomId }) => {
      navigate(`/room/${roomId}`);
    },
    [navigate]
  );
  useEffect(() => {
    socket?.on("joined-room", handleRoomJoined);
    return () =>{
      socket?.off("joined-room", handleRoomJoined)
    }
  }, [handleRoomJoined, socket]);

  const handleJoinRoom = () => {
    socket?.emit("join-room", { emailId: email, roomId });
  };

  // console.log(socket)
  return (
    <div className="flex flex-col w-[450px] mx-auto ">
      <h1 className="text-3xl text-center underline">Support Box</h1>
        <span className="text-center">You can contact us for any problem.</span>
      <div className="flex flex-col">      
        <img src={service} alt="" />
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 rounded-md bg-gray-100 text-gray-900 mb-2"
        type="email"
        placeholder="Enter your email"
        name="email"
        id="email"
      />
      <input
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        className="p-2 rounded-md bg-gray-100 text-gray-900"
        type="text"
        placeholder="Enter your code"
        name="roomId"
        id="roomId"
      />
      <button
        onClick={handleJoinRoom}
        className="btn btn-primary mt-2 text-white"
      >
        Enter Room
      </button>
      </div>

    </div>
  );
};

export default InputBox;
