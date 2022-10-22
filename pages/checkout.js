import React from 'react';
import Navbar from '../components/Navbar';
function checkout() {
	return (
		<div aria-hidden="true" className="absolute inset-0 ">
			<div className="bg-gray-500">
				<Navbar />
			</div>
		</div>
	);
}

export default checkout;
