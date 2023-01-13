import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Details from './Pages/Home/Details/Details';
import { router } from './Routes/Routes/Routes';


function App() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <RouterProvider
        router={router}
      />
      <Details></Details>
    </div>
  );
}

export default App;
