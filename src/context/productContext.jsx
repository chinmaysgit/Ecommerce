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
            const data = await axios.get('https://api.escuelajs.co/api/v1/products');
            setProducts(data.data);
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