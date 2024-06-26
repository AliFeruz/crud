import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Loader from "./Loader";
import LoginForm from "./forms/LoginForm";
import NavBar from "./Navbar";
import BottomBar from "./BottomBar";
import Topbar from "./Topbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen w-screen flex items-center justify-center">
        <LoginForm />
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      {/* <Logo/> */}
      <div className="relative">
      <Topbar />
      <NavBar />
      <BottomBar />
      </div>
      {children}
    </main>
  );
};

export default RootLayout;
