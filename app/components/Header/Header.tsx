"use client";

import { useState } from "react";
import DropdownMenu from "./DropDown";
import Registration from "./Registration";
import logo from "../../../public/logo.svg";
import Image from "next/image";

export default function Header() {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  return (
    <header className="text-white flex items-center justify-between px-[5%] border-b-2 border-b-white h-[84px]">
      <Image src={logo} width={45} height={45} alt="logo" />
      <nav>
        <ul className="flex items-center justify-between">
          {userLoggedIn ? (
            <li>
              <DropdownMenu setUserLoggedIn={setUserLoggedIn} />
            </li>
          ) : (
            <button onClick={handleOpen}>შესვლა</button>
          )}
        </ul>
      </nav>
      <Registration
        open={open}
        setOpen={setOpen}
        setUserLoggedIn={setUserLoggedIn}
      />
    </header>
  );
}