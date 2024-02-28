import { FaLink } from 'react-icons/fa6';

function CertificateItem({ certificateName, certificateLink }) {
	return (
		<li className='flex items-center my-[2rem] gap-3'>
			<p>{certificateName}</p>
			<a href={certificateLink} className='text-brand'>
				<FaLink />
			</a>
		</li>
	);
}

export default CertificateItem;
