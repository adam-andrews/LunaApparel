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
					imageAlt: '',
				},
				{
					name: 'Jackets',
					href: '/women/jackets',
					imageSrc: FemaleJacketCover.src,
					imageAlt: '.',
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
					imageAlt: '',
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
					imageAlt: '',
				},
				{
					name: 'Jackets',
					href: '/men/jackets',
					imageSrc: MaleJacketCover.src,
					imageAlt: '',
				},
				{
					name: 'Shoes',
					href: '/men/shoes',
					imageSrc: MaleShoesCover.src,
					imageAlt: '',
				},
				{
					name: 'Carry',
					href: '/men/carry',
					imageSrc: MaleBackpackCover.src,
					imageAlt: '',
				},
			],
		},
	],
	pages: [{ name: 'New', href: '/newarrival' }],
};
