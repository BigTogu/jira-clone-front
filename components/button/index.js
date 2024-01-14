import Link from "next/link";

function Button({ value, text, link, textLink }) {
  return (
    <div className="w-full lg:mb-3 md:mb-0 flex flex-col items-center">
      <input
        type="submit"
        value={value}
        className="bg-blue-500 text-white py-2 rounded-3xl font-semibold shadow-blue-950 shadow-md cursor-pointer text-[10px] lg:text-base w-3/4"
      />
      <p className="text-[10px] lg:text-base text-gray-500 flex justify-center mt-3">
        {text}
        {"\u00A0"}
        <Link className="text-blue-500" href={link}>
          {textLink}
        </Link>
      </p>
    </div>
  );
}

export default Button;
