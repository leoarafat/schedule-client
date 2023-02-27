import { RouterProvider } from "react-router-dom";
import Chat from "./components/Chat/Chat";

import { router } from "./Routes/Routes/Routes";


function App() {
  
  return (
    <div className="">
      <Chat />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
