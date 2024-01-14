import IconoJira from "../../public/assets/icono_Jira_Clone.svg";
import Image from "next/image";
import React from "react";

function LogoIcon() {
  return (
    <div className="flex flex-col justify-center items-center mb-6 lg:mb-12 w-full">
      <Image
        className="w-auto h-[70px] mb-2"
        src={IconoJira}
        alt="Icono Jira"
      />

      <p className="font-bold text-3xl">Jira</p>
    </div>
  );
}
export default LogoIcon;
