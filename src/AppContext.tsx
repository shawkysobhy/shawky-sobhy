import React, { createContext, useState } from 'react';
interface ContextData {
	activeSection: string;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextData>({
	activeSection: '',
	setActiveSection: () => {},
});

export const AppContextProvider = ({ children }:{children:React.ReactNode}) => {
	const [activeSection, setActiveSection] = useState('');
	return (
		<Context.Provider value={{ activeSection, setActiveSection }}>
			{children}
		</Context.Provider>
	);
};