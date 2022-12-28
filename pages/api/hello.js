import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req, res) {
	const { db } = await connectToDatabase();

	const collection = await db
		.collection('listingsAndReviews')
		.find({})
		.limit(20)
		.toArray();

	res.status(200).json({ collection });
}
