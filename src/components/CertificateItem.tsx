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
		<li className=' my-[2rem]'>
			<a
				target='_blank'
				href={certificateLink}
				aria-label='see certification details'>
				<p>
					{certificateName}{' '}
					<IoLink className='inline-block md:ml-4 text-brand' />
				</p>
			</a>
		</li>
	);
}

export default CertificateItem;
