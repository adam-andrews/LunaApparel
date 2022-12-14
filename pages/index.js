import React from 'react';
import Navbar from '@components/Navbar';
import Hero from '@images/Hero.jpeg';
import MobileMenu from '@components/MobileMenu';
import ShopByCategory from '@components/ShopByCategory';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function Home() {
	return (
		<div className="bg-white">
			<Head>
				<title>Luna apparel</title>
				<meta
					name="description"
					content="Luna apparel is a high end clothing brand that is focused on quality and style."
					key="desc"
				/>
			</Head>
			{/* Hero section */}
			<MobileMenu />
			<div className="relative bg-white-900">
				{/* Decorative image and overlay */}
				<div aria-hidden="true" className="absolute inset-0 overflow-hidden">
					<Image src={Hero.src} alt="" layout="fill" priority />
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
					<Link href="/newarrivals">
						<a className="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100">
							Shop New Arrivals
						</a>
					</Link>
				</div>
			</div>
			<ShopByCategory />
			<Footer />
		</div>
	);
}

export default Home;

// export async function getServerSideProps(context) {
// 	const { db } = await connectToDatabase();

// 	const collection = await db
// 		.collection('products')
// 		.find({})
// 		.limit(20)
// 		.toArray();

// 	const properties = JSON.parse(JSON.stringify(collection));

// 	return {
// 		props: { properties },
// 	};
// }
