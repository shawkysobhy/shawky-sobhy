import { IoLink } from 'react-icons/io5';

function CertificateItem({ certificateName, certificateLink }) {
	return (
		<li className='flex items-center my-[2rem] gap-3'>
			<p>{certificateName}</p>
			<a
				href={certificateLink}
				className='text-brand'
				aria-label='see certification details'>
				<IoLink />
			</a>
		</li>
	);
}

export default CertificateItem;
