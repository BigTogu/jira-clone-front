import Link from 'next/link';

function Button({ value, text, link, textLink }) {
	return (
		<div className="flex w-full flex-col items-center md:mb-0 lg:mb-3">
			<input
				type="submit"
				value={value}
				className="w-3/4 cursor-pointer rounded-3xl bg-blue-500 py-2 text-[10px] font-semibold text-white shadow-md shadow-blue-950 lg:text-base"
			/>
			<p className="mt-3 flex justify-center text-[10px] text-gray-500 lg:text-base">
				{text}
				{'\u00A0'}
				<Link className="text-blue-500" href={link}>
					{textLink}
				</Link>
			</p>
		</div>
	);
}

export default Button;
