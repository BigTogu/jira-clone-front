import CheckmarkIcon from "../../public/assets/check-square.svg";
import Image from "next/image";
function SuccessSubmit() {
  return (
    <div className="flex items-center justify-center text-green-500 mb-2">
      <Image className="w-auto h-6" src={CheckmarkIcon} alt="Icono de éxito" />
      <span className="ml-2">Registration successful!</span>
    </div>
  );
}

export default SuccessSubmit;
