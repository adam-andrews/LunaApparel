import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { addToBag as addToBagRedux } from '@redux/shoppingbag';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

// Compnent Slug used on product
function ProductOverview({ product }) {
	function addToBag(e) {
		e.preventDefault();
		dispatch(addToBagRedux(product));
	}

	const dispatch = useDispatch();
	return (
		<div className="mx-auto max-w-2xl py-8 px-4 sm:py-12 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
			{/* Product details */}
			<div className="lg:max-w-lg lg:self-end">
				<div className="mt-4">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{product.name}
					</h1>
				</div>

				<section aria-labelledby="information-heading" className="mt-4">
					<h2 id="information-heading" className="sr-only">
						Product information
					</h2>

					<div className="flex items-center">
						<p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>
					</div>

					<div className="mt-4 space-y-6">
						<p className="text-base text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
						</p>
					</div>

					<div className="mt-6 flex items-center">
						<CheckIcon
							className="h-5 w-5 flex-shrink-0 text-green-500"
							aria-hidden="true"
						/>
						<p className="ml-2 text-sm text-gray-500">
							In stock and ready to ship
						</p>
					</div>
				</section>
			</div>

			{/* Product image */}
			<div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
				<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
					<img
						src={product.imageSrc}
						alt={product.imageAlt}
						className="h-full w-full object-cover object-center"
					/>
				</div>
			</div>

			{/* Product form */}
			<div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
				<section aria-labelledby="options-heading">
					<h2 id="options-heading" className="sr-only">
						Product options
					</h2>

					<form>
						<div className="mt-10">
							<button
								type="submit"
								className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-gray-700 focus:outline-none"
								onClick={addToBag}
							>
								Add to bag
							</button>
						</div>
						<div className="mt-6 text-center">
							<a href="#" className="group inline-flex text-base font-medium">
								<ShieldCheckIcon
									className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
									aria-hidden="true"
								/>
								<span className="text-gray-500 hover:text-gray-700">
									Lifetime Guarantee
								</span>
							</a>
						</div>
					</form>
				</section>
			</div>
		</div>
	);
}

export default ProductOverview;
