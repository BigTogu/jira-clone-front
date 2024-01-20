import IconoJira from '../../public/assets/icono_Jira_Clone.svg';
import Image from 'next/image';
import React from 'react';

function LogoIcon() {
	return (
		<div className="mb-6 flex w-full flex-col items-center justify-center lg:mb-12">
			<Image
				className="mb-2 h-[70px] w-auto"
				src={IconoJira}
				alt="Icono Jira"
			/>

			<p className="text-3xl font-bold">Jira</p>
		</div>
	);
}
export default LogoIcon;
