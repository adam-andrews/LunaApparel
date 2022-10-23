import React from 'react';
import { useRouter } from 'next/router';
import { MaleProducts } from '@data/products';
import Navbar from '@components/Navbar';
import Product from '@components/Product';

function checkCategory(product, category) {
	console.log(category, product.category);
	return product.category === category;
}

function Category() {
	const router = useRouter();
	const { category } = router.query;
	return (
		<div>
			<main>
				<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
					<div className="py-24 text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">
							{category}
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
							{/* Filters the products that don't match the category */}
							{MaleProducts.filter((product) =>
								checkCategory(product, category)
							).map((product) => (
								<Product key={product.id} product={product} />
							))}
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}

export default Category;
