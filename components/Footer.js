import Logo from '@images/Logo.svg';
import Image from 'next/image';
export default function Footer() {
	return (
		<footer className="bg-gray-800 opacity-90 mt-10">
			<div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
				<div className="mt-8 flex justify-center space-x-6">
					<Image height={32} width={32} src={Logo.src} alt="" />
				</div>
				<p className="mt-8 text-center text-base text-white">
					&copy; {new Date().getFullYear()} Luma apparel, Inc. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
