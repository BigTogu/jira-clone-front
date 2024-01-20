import React, { useRef } from 'react';
import InputField from '../inputField/index.js';
import PasswordComponent from '../password/index.js';
import Button from '../button/index.js';
import Image from 'next/image';
import IconoJira from '../../public/assets/icono_Jira_Clone.svg';

function FormHeader() {
	return (
		<div className="mb-6 flex w-full flex-col items-center justify-center md:my-8">
			<Image
				className="mb-2 h-[70px] w-auto"
				src={IconoJira}
				alt="Icono Jira"
			/>
			<p className="text-3xl font-bold">Jira</p>
		</div>
	);
}

function FormField({ field, index }) {
	if (field.type === 'password') {
		return <PasswordComponent key={index} {...field} />;
	}

	return (
		<div key={index} className="-mx-3 mb-1 flex flex-wrap md:mb-6">
			<InputField {...field} />
		</div>
	);
}

function FormRow({ fields }) {
	return (
		<div className="flex w-full flex-row gap-3">
			{fields.map((field, index) => (
				<div key={index} className="mb-3 w-full md:mb-6 md:w-1/2">
					<InputField {...field} />
				</div>
			))}
		</div>
	);
}
function FormComponent({
	fields,
	handleSubmit,
	buttonLabel,
	linkInfo,
	descriptionLink,
	buttonText,
}) {
	const boundingRef = useRef(null);
	return (
		<div className="[perspective:800px]">
			<form
				className=",md:p-4 md:custom-gradient-mobile group relative max-w-lg rounded-3xl px-4 transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] md:border-[10px] md:border-[#111D37] md:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
				onSubmit={handleSubmit}
				onMouseLeave={() => (boundingRef.current = null)}
				onMouseEnter={e => {
					boundingRef.current = e.currentTarget.getBoundingClientRect();
				}}
				onMouseMove={e => {
					if (!boundingRef.current) return;
					const x = e.clientX - boundingRef.current.left;
					const y = e.clientY - boundingRef.current.top;
					const xPercentage = x / boundingRef.current.width;
					const yPercentage = y / boundingRef.current.height;
					const xRotation = (xPercentage - 0.5) * 20;
					const yRotation = (0.5 - yPercentage) * 20;

					e.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
					e.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
					e.currentTarget.style.setProperty('--x', `${xPercentage * 100}%`);
					e.currentTarget.style.setProperty('--y', `${yPercentage * 100}%`);
				}}
			>
				<FormHeader />
				{fields.map((field, index) =>
					field.length > 1 ? (
						<FormRow key={index} fields={field} />
					) : (
						<FormField key={index} field={field} />
					),
				)}

				<Button
					value={buttonText}
					text={descriptionLink}
					link={linkInfo}
					textLink={buttonLabel}
				/>
				<p className="mt-6 flex justify-center text-[8px] text-gray-500">
					Designed and developed by silvia.kenaan@gmail.com
				</p>
				<div className="group-hover:bg-[radial-gradient(at_var(--x)_var(--y), rgba(255,255,255,0.3)_20%,transparent_80%)] pointer-events-none absolute inset-0"></div>
			</form>
		</div>
	);
}

export default FormComponent;
