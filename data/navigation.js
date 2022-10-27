//Female images
import FemaleBagCover from '@images/FemaleBagCover.webp';
import FemaleJacketCover from '@images/FemaleJacketCover.webp';
import FemaleShoeCover from '@images/FemaleShoeCover.webp';
import FemaleTshirtCover from '@images/FemaleTshirtCover.webp';
// Mens images
import MaleBackpackCover from '@images/MaleBackpackCover.avif';
import MaleJacketCover from '@images/MaleJacketCover.avif';
import MaleShoesCover from '@images/MaleShoesCover.jpeg';
import MaleTshirtCover from '@images/MaleTshirtCover.jpeg';

export const navigation = {
	categories: [
		{
			name: 'Women',
			featured: [
				{
					name: 'Tshirt',
					href: '/women/tshirts',
					imageSrc: FemaleTshirtCover.src,
					imageAlt:
						'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
				},
				{
					name: 'Jackets',
					href: '/women/jackets',
					imageSrc: FemaleJacketCover.src,
					imageAlt:
						'Model opening tan leather long wallet with credit card pockets and cash pouch.',
				},
				{
					name: 'Shoes',
					href: '/women/shoes',
					imageSrc: FemaleShoeCover.src,
					imageAlt:
						'Model wearing minimalist watch with black wristband and white watch face.',
				},
				{
					name: 'Carry',
					href: '/women/carry',
					imageSrc: FemaleBagCover.src,
					imageAlt:
						'Model opening tan leather long wallet with credit card pockets and cash pouch.',
				},
			],
		},
		{
			name: 'Men',
			featured: [
				{
					name: 'Basic Tees',
					href: '/men/tshirts',
					imageSrc: MaleTshirtCover.src,
					imageAlt: 'Model wearing light heather gray t-shirt.',
				},
				{
					name: 'Jackets',
					href: '/men/jackets',
					imageSrc: MaleJacketCover.src,
					imageAlt:
						'Model opening tan leather long wallet with credit card pockets and cash pouch.',
				},
				{
					name: 'Shoes',
					href: '/men/shoes',
					imageSrc: MaleShoesCover.src,
					imageAlt:
						'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
				},
				{
					name: 'Carry',
					href: '/men/carry',
					imageSrc: MaleBackpackCover.src,
					imageAlt:
						'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
				},
			],
		},
	],
	pages: [{ name: 'New', href: '/newarrival' }],
};
