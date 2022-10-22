import React from 'react';
import Navbar from '@components/Navbar';
import Hero from '@images/Hero.jpeg';
import MobileMenu from '@components/MobileMenu';
import ShopByCategory from '@components/ShopByCategory';
import Footer from '@components/Footer';
function Home() {
	return (
		<div className="bg-white">
			{/* Hero section */}
			<MobileMenu />
			<div className="relative bg-white-900">
				{/* Decorative image and overlay */}
				<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
					<img
						src={Hero.src}
						alt=""
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-gray-900 opacity-50"
				/>

				{/* Navigation */}
				<Navbar />
				<div className="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0">
					<h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
						New arrivals are here
					</h1>
					<p className="mt-4 text-xl text-white">
						The new arrivals have, well, newly arrived. Check out the latest
						options from our summer small-batch release while they're still in
						stock.
					</p>
					<a
						href="#"
						className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
					>
						Shop New Arrivals
					</a>
				</div>
			</div>
			<ShopByCategory />
			<Footer />
		</div>
	);
}

export default Home;
