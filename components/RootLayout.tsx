import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Loader from "./Loader";
import LoginForm from "./forms/LoginForm";
import NavBar from "./Navbar";
import BottomBar from "./BottomBar";
import Topbar from "./Topbar";
import background from '@/public/pattern-randomized.svg'
import { url } from "inspector";
import Image from "next/image";

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
    <main className="min-h-screen w-full flex items-center justify-center relative"
    >   <Image
        src={background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{
          position: 'absolute',
          zIndex: -1
          }}
          />
      <Topbar />
      {/* <NavBar />
      <BottomBar /> */}
      
      {children}
    </main>
  );
};

export default RootLayout;
