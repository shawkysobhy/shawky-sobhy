import { IoLink } from 'react-icons/io5';
interface CertificateItemProps {
	certificateName: string;
	certificateLink: string;
}
function CertificateItem({
	certificateName,
	certificateLink,
}: CertificateItemProps) {
	return (
		<li className='flex items-center my-[2rem] gap-3'>
			<a
				target='_blank'
				href={certificateLink}
				aria-label='see certification details'>
				<p>{certificateName}</p>
			</a>
			<IoLink className='text-brand' />
		</li>
	);
}

export default CertificateItem;
