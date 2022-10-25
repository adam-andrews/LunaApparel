import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

// Product Component Thumbnail and price, Loaded on new Arrivals page
function Product({ product }) {
	return (
		<Link
			key={product.id}
			href={`/product/${product.id}`}
			className="group"
			replace
		>
			<a>
				<div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3 hover:opacity-75">
					<Image
						src={product.imageSrc}
						alt={product.imageAlt}
						layout="fill"
						priority
					/>
				</div>
				<div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
					<h3>{product.name}</h3>
					<p>{product.price}</p>
				</div>
				<p className="mt-1 text-sm italic text-gray-500">
					{product.description}
				</p>
			</a>
		</Link>
	);
}

export default Product;
