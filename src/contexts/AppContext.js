import React, {useState} from 'react';

export const AppContext = React.createContext();

function AppContextProvider({children}) {
    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);

    const contextValues = {
        categories, setCategories,
        categorySelected, setCategorySelected,
        categoryProducts, setCategoryProducts,
    };

    return (
        <AppContext.Provider
            value={contextValues}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
