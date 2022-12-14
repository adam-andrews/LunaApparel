import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openMobileMenu } from '@redux/mobilemenu';
import { navigation } from '@data/navigation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Logo from '@images/Logo.svg';
import Image from 'next/image';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}
function Navbar() {
	const { shoppingbag } = useSelector((state) => state.shoppingbag);

	const dispatch = useDispatch();
	return (
		<header className="relative z-10">
			<nav aria-label="Top">
				{/* Secondary navigation */}
				<div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div>
							<div className="flex h-16 items-center justify-between">
								{/* Logo (lg+) */}
								<div className="hidden lg:flex lg:flex-1 lg:items-center">
									<Link href="/">
										<a>
											<span className="sr-only">Luma apparel</span>
											<Image height={32} width={32} src={Logo.src} alt="" />
										</a>
									</Link>
								</div>

								<div className="hidden h-full lg:flex">
									{/* Flyout menus */}
									<Popover.Group className="inset-x-0 bottom-0 px-4">
										<div className="flex h-full justify-center space-x-8">
											{navigation.categories.map((category) => (
												<Popover key={category.name} className="flex">
													{({ open }) => (
														<>
															<div className="relative flex">
																<Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out focus:outline-none">
																	{category.name}
																	<span
																		className={classNames(
																			open ? 'bg-white' : '',
																			'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
																		)}
																		aria-hidden="true"
																	/>
																</Popover.Button>
															</div>

															<Transition
																as={Fragment}
																enter="transition ease-out duration-200"
																enterFrom="opacity-0"
																enterTo="opacity-100"
																leave="transition ease-in duration-150"
																leaveFrom="opacity-100"
																leaveTo="opacity-0"
															>
																<Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
																	<div
																		className="absolute inset-0 top-1/2 bg-white shadow"
																		aria-hidden="true"
																	/>

																	<div className="relative bg-white">
																		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
																			<div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
																				{category.featured.map((item) => (
																					<div
																						key={item.name}
																						className="group relative"
																					>
																						<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
																							<img
																								src={item.imageSrc}
																								alt={item.imageAlt}
																								className="object-cover object-center"
																							/>
																						</div>
																						<Link href={item.href}>
																							<a className="mt-4 block font-medium text-gray-900">
																								<span
																									className="absolute inset-0 z-10"
																									aria-hidden="true"
																								/>
																								{item.name}
																							</a>
																						</Link>
																						<p
																							aria-hidden="true"
																							className="mt-1"
																						>
																							Shop now
																						</p>
																					</div>
																				))}
																			</div>
																		</div>
																	</div>
																</Popover.Panel>
															</Transition>
														</>
													)}
												</Popover>
											))}

											{navigation.pages.map((page) => (
												<Link key={page.name} href={page.href}>
													<a className="flex items-center text-sm font-medium text-white">
														{page.name}
													</a>
												</Link>
											))}
										</div>
									</Popover.Group>
								</div>

								{/* Mobile menu and search (lg-) */}
								<div className="flex flex-1 items-center lg:hidden">
									<button
										type="button"
										className="-ml-2 p-2 text-white"
										onClick={() => dispatch(openMobileMenu())}
									>
										<span className="sr-only">Open menu</span>
										<Bars3Icon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>

								{/* Logo (lg-) */}
								<Link href="/">
									<a href="#" className="lg:hidden">
										<span className="sr-only">Luma clothing</span>
										<img src={Logo.src} alt="" className="h-8 w-auto" />
									</a>
								</Link>

								<div className="flex flex-1 items-center justify-end">
									<div className="flex items-center lg:ml-8">
										{/* Cart */}
										<div className="ml-4 flow-root lg:ml-8">
											<Link href="/checkout">
												<a className="group -m-2 flex items-center p-2 ">
													<ShoppingBagIcon
														className="h-6 w-6 flex-shrink-0 text-white"
														aria-hidden="true"
													/>
													<span className="ml-2 text-sm font-medium text-white">
														{shoppingbag.length}
													</span>
													<span className="sr-only">
														items in cart, view bag
													</span>
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
