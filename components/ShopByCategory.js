import React from 'react';
import { collections } from '@data/collections';
import Link from 'next/link';

function ShopByCategory() {
	return (
		<section
			aria-labelledby="collection-heading"
			className="mx-auto max-w-xl px-4 pyå-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 "
		>
			<h2
				id="collection-heading"
				className="text-2xl font-bold tracking-tight text-gray-900"
			>
				Shop by Collection
			</h2>
			<p className="mt-4 text-base text-gray-500">
				Each season, we collaborate with world-class designers to create a
				collection inspired by the natural world.
			</p>

			<div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
				{collections.map((collection) => (
					<Link key={collection.name} href={collection.href}>
						<a className="group block">
							<div
								aria-hidden="true"
								className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
							>
								<img
									src={collection.imageSrc}
									alt={collection.imageAlt}
									className="h-full w-full object-cover object-center"
								/>
							</div>
							<h3 className="mt-4 text-base font-semibold text-gray-900">
								{collection.name}
							</h3>
							<p className="mt-2 text-sm text-gray-500">
								{collection.description}
							</p>
						</a>
					</Link>
				))}
			</div>
		</section>
	);
}

export default ShopByCategory;
