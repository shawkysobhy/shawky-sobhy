import { CERTIFICATES } from '../data/constant';
import { SectionTitle ,CertificateItem} from '../components';
function Certificate() {

	return (
		<section data-section id='certificate' className='section-wrapper' >
			<SectionTitle title='Certificate' direction='row' />
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
