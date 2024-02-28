import { useInView } from 'react-intersection-observer';
import { useEffect, useContext } from 'react';
import { Context } from '../AppContext';

const useElementVisibility = ( id ) => {
	const { ref, inView } = useInView({ threshold: 0 });
	const { setActiveSection } = useContext(Context);
	useEffect(() => {
		if (inView) {
			setActiveSection(id);
		}
	}, [inView, setActiveSection, id]);

	return { ref };
};
export default useElementVisibility;
