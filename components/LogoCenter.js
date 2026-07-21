import React from 'react';
import AltLogo from '@images/AltLogo.svg';
import Link from 'next/link';
function LogoCenter() {
	return (
		<div className="mt-4 flex justify-center opacity-80">
			<Link href="/">
					<img className="h-16 w-auto" src={AltLogo.src} alt="" />
			</Link>
		</div>
	);
}

export default LogoCenter;
