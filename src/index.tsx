import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";
import AuthProvider from "./components/Contexts/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { SocketProvider } from "./context/Providers/Providers";
import { PeerProvider } from "./context/Peer";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SocketProvider>
      <PeerProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
            <Toaster />
          </AuthProvider>
        </QueryClientProvider>
      </PeerProvider>
    </SocketProvider>
  </React.StrictMode>
);
