import React from 'react';
import Product from '../components/Product';
import { products1, products2 } from '../data/product';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Newarrivals() {
	return (
		<div className="bg-gray-50">
			<div>
				<main>
					<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
						<div className="py-24 text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900">
								New Arrivals
							</h1>
							<p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
								Thoughtfully designed apparal developed by master craftsmen. for
								all ocasions.
							</p>
						</div>
						{/* Product grid */}
						<section aria-labelledby="products-heading" className="mt-8">
							<h2 id="products-heading" className="sr-only">
								Products
							</h2>

							<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
								{products1.map((product) => (
									<Product product={product} />
								))}
							</div>
						</section>

						<section
							aria-labelledby="featured-heading"
							className="relative mt-16 overflow-hidden rounded-lg lg:h-96"
						>
							<div className="absolute inset-0">
								<img
									src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg"
									alt=""
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<div
								aria-hidden="true"
								className="relative h-96 w-full lg:hidden"
							/>
							<div
								aria-hidden="true"
								className="relative h-32 w-full lg:hidden"
							/>
							<div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
								<div>
									<h2
										id="featured-heading"
										className="text-xl font-bold text-white"
									>
										Mens Collection
									</h2>
									<p className="mt-1 text-sm text-gray-300">
										Browse Some items from the Men's collection
									</p>
								</div>
								<a
									href="#"
									className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 py-3 px-4 text-base font-medium text-white hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
								>
									View the collection
								</a>
							</div>
						</section>

						<section
							aria-labelledby="more-products-heading"
							className="mt-16 pb-24"
						>
							<h2 id="more-products-heading" className="sr-only">
								More products
							</h2>

							<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
								{products2.map((product) => (
									<Product product={product} />
								))}
							</div>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
