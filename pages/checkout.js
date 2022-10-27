import { MaleProducts } from '@data/products';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import LogoCenter from '@components/LogoCenter';
import { useSelector } from 'react-redux';
import CheckoutProduct from '@components/CheckoutProduct';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function convertPriceToInteger(price) {
	if (!price) return 0;
	return parseInt(price.replace(/[£,]+/g, ''));
}

export default function Checkout() {
	const { shoppingbag } = useSelector((state) => state.shoppingbag);
	let basketPrice = shoppingbag.reduce((accumulator, value) => {
		return accumulator + convertPriceToInteger(value.price) * value.quantity;
	}, 0);

	const taxPrice = basketPrice * 0.2;
	const shippingPrice = basketPrice > 100 ? 0 : 10;
	return (
		<div className="bg-white">
			<LogoCenter />
			<main className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Shopping Cart
				</h1>

				<form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
					<section aria-labelledby="cart-heading" className="lg:col-span-7">
						<h2 id="cart-heading" className="sr-only">
							Items in your shopping cart
						</h2>

						<ul
							role="list"
							className="divide-y divide-gray-200 border-t border-b border-gray-200"
						>
							{shoppingbag.map((product, productIdx) => (
								<CheckoutProduct
									key={product.id}
									product={product}
									productIdx={productIdx}
								/>
							))}
						</ul>
					</section>

					{/* Order summary */}
					<section
						aria-labelledby="summary-heading"
						className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
					>
						<h2
							id="summary-heading"
							className="text-lg font-medium text-gray-900"
						>
							Order summary
						</h2>

						<dl className="mt-6 space-y-4">
							<div className="flex items-center justify-between">
								<dt className="text-sm text-gray-600">Subtotal</dt>
								<dd className="text-sm font-medium text-gray-900">
									£{basketPrice}
								</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="flex items-center text-sm text-gray-600">
									<span>Shipping estimate</span>
									<a
										href="#"
										className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">
											Learn more about how shipping is calculated
										</span>
										<QuestionMarkCircleIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									</a>
								</dt>
								<dd className="text-sm font-medium text-gray-900">
									£{shippingPrice}
								</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="flex text-sm text-gray-600">
									<span>Tax estimate</span>
									<a
										href="#"
										className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">
											Learn more about how tax is calculated
										</span>
										<QuestionMarkCircleIcon
											className="h-5 w-5"
											aria-hidden="true"
										/>
									</a>
								</dt>
								<dd className="text-sm font-medium text-gray-900">
									£{basketPrice * 0.2}
								</dd>
							</div>
							<div className="flex items-center justify-between border-t border-gray-200 pt-4">
								<dt className="text-base font-medium text-gray-900">
									Order total
								</dt>
								<dd className="text-base font-medium text-gray-900">
									£{basketPrice + shippingPrice + taxPrice}
								</dd>
							</div>
						</dl>

						<div className="mt-6">
							<button
								type="submit"
								className="w-full rounded-md border border-transparent bg-gray-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
							>
								Checkout
							</button>
						</div>
					</section>
				</form>
			</main>
		</div>
	);
}
