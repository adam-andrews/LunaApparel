import React from 'react';
import Product from '@components/Product';
import { MaleProducts, FemaleProducts } from '@data/products';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Newarrivals() {
	return (
		<div className="bg-gray-50">
			<main>
				<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="py-24 text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">
							New Arrivals
						</h1>
						<p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
							Thoughtfully designed apparel developed by master craftsmen. for
							all ocasions.
						</p>
					</div>
					<section
						aria-labelledby="more-products-heading"
						className="mt-16 pb-24"
					>
						<h2 id="more-products-heading" className="sr-only">
							More products
						</h2>

						<div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
							{MaleProducts.map((product) => (
								<Product key={product.id} product={product} />
							))}
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
