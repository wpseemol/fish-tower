'use client';
import { useCart } from '@/hooks';
import { getLocalStorageValue } from '@/utils/localstorage';
import { useEffect } from 'react';

export default function GetCartData() {
    const { setCart } = useCart();

    async function fetchCartData() {
        setCart((prev) => ({ ...prev, loading: true }));
        try {
            const cartItems = getLocalStorageValue();
            if (cartItems) {
                const queryString = new URLSearchParams({
                    'cart-items': cartItems.join('|'),
                }).toString();

                const response = await fetch(`/api/v1/cart?${queryString}`);

                if (response.ok) {
                    const data = await response.json();

                    setCart((prev) => ({
                        ...prev,
                        cartProducts: data.cartProducts,
                    }));

                    console.log('get cart json data:', data);
                }
            }
        } catch (error) {
        } finally {
            setCart((prev) => ({ ...prev, loading: false }));
        }
    }

    useEffect(() => {
        /**
         * fetch data from cart data here
         */

        fetchCartData();
    }, []);

    return <></>;
}
