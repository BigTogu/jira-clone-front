import IconoJira from "../../public/assets/icono_Jira_Clone.svg";
import Image from "next/image";

export default function Register() {
  function handleRegister() {
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "miniTogulinSilvia",
        password: "test",
        email: "silvia.kenaan@gmail.com",
      }),
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen custom-gradient">
      <form className=" max-w-lg lg:border-[#111D37] rounded-3xl lg:border-[10px] p-4 lg:p-12 lg:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] lg:custom-gradient-mobile">
        <div className="flex flex-col justify-center items-center mb-6 lg:mb-12 w-full">
          <Image className="h-[70px] mb-2" src={IconoJira} alt="Icono Jira" />

          <p className="font-bold text-3xl">Jira</p>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
          <div className="w-full md:w-1/2 px-3 mb-3 lg:mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-gray-200 focus:border-blue-400 py-3 px-4 lg:mb-3 leading-tight focus:outline-none rounded-xl bg-gray-50 text-[10px] lg:text-xs"
              type="text"
              placeholder="Silvia"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full  text-gray-700 border border-gray-200 focus:border-blue-400 py-3 px-4 mb-3 leading-tight focus:outline-none rounded-xl bg-gray-50 text-[10px] lg:text-xs"
              type="text"
              placeholder="Kenaan Mulero"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
              for="grid-password"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 text-[10px] lg:text-xs"
              type="email"
              placeholder="silvia.kenaan@gmail.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 lg:mb-3 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 text-[10px] lg:text-xs"
              type="password"
              placeholder="******************"
            />
            <p className="text-gray-600 text-[10px] lg:text-xs italic max-lg:mb-1">
              Make it as long and as crazy as you would like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-1 lg:mb-6">
          <div className="w-full md:w-1/2 px-3 mb-3 lg:mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2 "
              for="grid-city"
            >
              Country
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 rounded-xl text-[10px] lg:text-xs"
              type="text"
              placeholder="Spain"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-3 lg:mb-6 ">
            <label
              class="block uppercase tracking-wide text-gray-700 text-[10px] lg:text-xs font-bold mb-2"
              for="grid-zip"
            >
              Telephone
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400 text-[10px] lg:text-xs"
              type="text"
              placeholder="+34 601200422"
            />
          </div>
        </div>
        <div className="w-3/4 lg:mb-6 md:mb-0 m-auto">
          <input
            type="submit"
            value="Register"
            className="bg-blue-500 text-white py-2 rounded-3xl font-semibold shadow-blue-950 shadow-md cursor-pointer w-full text-[10px] lg:text-xs"
            onClick={handleRegister}
          />
        </div>

        <p className="text-[8px] text-gray-500 flex justify-center mt-6">
          Designed and developed by silvia.kenaan@gmail.com
        </p>
      </form>
    </div>
  );
}
