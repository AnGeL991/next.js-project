import { OfferDetails } from '@/components';
import { Offer } from '@/components/offer/types/offer.interface';

export default function Details({ details, similarOffer }: any) {
	return <OfferDetails details={details} similarOffer={similarOffer} />;
}

export const getServerSideProps = async ({ query: { jobId } }: any) => {
	const res = await fetch(`https://6082be765dbd2c001757a628.mockapi.io/api/v1/jobs/${jobId}`);
	const data = await res.json();

	const similarOfferResponse = await fetch(`https://6082be765dbd2c001757a628.mockapi.io/api/v1/jobs?page=1&limit=100&s
	earch=${data.department}`);
	const similarOffer = await similarOfferResponse.json();
	const similarOfferWithoutSideOffer = similarOffer.items.filter((offer: Offer) => offer.id != jobId);

	return {
		props: {
			details: data,
			similarOffer: similarOfferWithoutSideOffer,
		},
	};
};
