import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

const productContext = createContext();

export const ProductContextApi = ({ children }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const data = await axios.get('https://dummyjson.com/products?limit=100');
            setProducts(data.data.products);
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
        <productContext.Provider value={products}>
            {children}
        </productContext.Provider>
    )
}

export const useProducts = () => {
    return useContext(productContext);
}