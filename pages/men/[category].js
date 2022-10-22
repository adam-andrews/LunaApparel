import React from 'react';
import { useRouter } from 'next/router';
import { products1 } from '@data/products';
import Navbar from '@components/Navbar';

function slug() {
	const router = useRouter();
	console.log(products1);
	const { category } = router.query;
	return (
		<div>
			<Navbar />;
		</div>
	);
}

export default slug;
