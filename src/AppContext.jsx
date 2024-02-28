import { createContext, useState } from 'react';
export const Context = createContext();

export const AppContextProvider = ({ children }) => {
	const [activeSection, setActiveSection] = useState('');
	return (
		<Context.Provider value={{ activeSection, setActiveSection }}>
			{children}
		</Context.Provider>
	);
};