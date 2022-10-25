import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MaleProducts, FemaleProducts } from '@data/products';
import ProductOverview from '@components/ProductOverview';
import LogoCenter from '@components/LogoCenter';

function checkProductId(product, productId) {
	console.log(productId, product.id);
	if (product.id == productId) {
		console.log('true');
	}
	return product.id == productId;
}

export default function Product() {
	const router = useRouter();
	const { productId } = router.query;

	return (
		<div className="">
			<LogoCenter />
			{MaleProducts.filter((product) => checkProductId(product, productId)).map(
				(product) => (
					<ProductOverview key={product.id} product={product} />
				)
			)}
		</div>
	);
}
