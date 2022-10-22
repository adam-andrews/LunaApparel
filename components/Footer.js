import Logo from '../images/Logo.svg';
export default function Footer() {
	return (
		<footer className="bg-gray-500 opacity-50 mt-10">
			<div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
				<div className="mt-8 flex justify-center space-x-6">
					<img className="h-8 w-auto" src={Logo.src} alt="" />
				</div>
				<p className="mt-8 text-center text-base text-white">
					&copy; {new Date().getFullYear()} Luma apparel, Inc. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
