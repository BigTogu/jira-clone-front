import CheckmarkIcon from '../../public/assets/check-square.svg';
import Image from 'next/image';
function SuccessSubmit() {
	return (
		<div className="mb-2 flex items-center justify-center text-green-500">
			<Image className="h-6 w-auto" src={CheckmarkIcon} alt="Icono de éxito" />
			<span className="ml-2">Registration successful!</span>
		</div>
	);
}

export default SuccessSubmit;
