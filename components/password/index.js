import EyeOpen from '../../public/assets/eye-opened.svg';
import EyeClose from '../../public/assets/eye-closed.svg';

import Image from 'next/image';
import React, { useState } from 'react';

function PasswordComponent() {
	const [isVisible, setIsVisible] = useState(false);
	const [password, setPassword] = useState('');

	return (
		<div className="-mx-3 mb-1 flex flex-wrap lg:mb-6">
			<div className="w-full px-3">
				<label
					className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-gray-700 lg:text-xs"
					htmlFor="grid-password"
				>
					Password
				</label>
				<div className="mb-1 flex w-full flex-row  items-center gap-3 rounded-xl border-gray-200 bg-gray-50 py-2 focus:border-blue-400 focus:bg-white lg:mb-3 lg:py-3 ">
					<input
						className="block w-full appearance-none rounded-xl border border-none bg-gray-50  px-4 text-[10px]  leading-tight text-gray-700 focus:outline-none lg:text-xs"
						type={isVisible ? 'text' : 'password'}
						name="password"
						placeholder="******************"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<span className="px-3">
						{isVisible ? (
							<Image
								className="h-5 w-auto"
								src={EyeOpen}
								alt="Icono ojo abierto"
								onClick={() => password && setIsVisible(!isVisible)}
							/>
						) : (
							<Image
								className="h-5 w-auto"
								src={EyeClose}
								alt="Icono ojo cerrado"
								onClick={() => password && setIsVisible(!isVisible)}
							/>
						)}
					</span>
				</div>
				<p className="text-[10px] italic text-gray-600 max-lg:mb-1 lg:text-xs">
					Make it as long and as crazy as you would like
				</p>
			</div>
		</div>
	);
}

export default PasswordComponent;
