import { NAVBAR } from '../data/constant';
import useElementVisibility from '../hooks/useElementVisibility';
import { CERTIFICATES } from '../data/constant';
import CertificateItem from '../components/CertificateItem';
import { SectionTitle } from '../components';
function Certificate() {
	const { ref } = useElementVisibility(NAVBAR.Certificate);

	return (
		<section ref={ref} id={NAVBAR.Certificate} className='section-wrapper'>
			<SectionTitle title='Certificate' />
			<ul>
				{CERTIFICATES.map((item) => (
					<CertificateItem
						key={item.certificateName}
						certificateLink={item.certificateLink}
						certificateName={item.certificateName}
					/>
				))}
			</ul>
		</section>
	);
}

export default Certificate;
