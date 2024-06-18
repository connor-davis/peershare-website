import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

export default function RootLayout() {
  return (
    <div className="flex flex-col w-screen h-screen bg-background">
      <Navbar />
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <Outlet />
        <div className="flex items-center justify-center bg-muted text-muted-foreground mt-auto">
          Created by LoneWolf Software
        </div>
      </div>
    </div>
  );
}
