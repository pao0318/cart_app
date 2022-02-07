import React, { createContext, useEffect, useState, useContext } from 'react';

const Cart = createContext()

export const ValContext = ({ children }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData()

        // eslint-disable-next-line
    }, []);

    async function getData() {
        const response = await fetch(
            ` https://dnc0cmt2n557n.cloudfront.net/products.json`,
            {
                method: "GET",
            }
        );
        const res = await response.json();
        setData(res);

    }
    return <Cart.Provider value={{ data, setData }}>
        {children}
    </Cart.Provider>;
};

export const CartState = () => {
    return useContext(Cart);
}
