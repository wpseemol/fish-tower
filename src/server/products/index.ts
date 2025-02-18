'use server';

import { CardProductType } from '@/types/product';

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export async function getPopularProducts(): CardProductType[] | null {
    try {
        const response = await fetch(`${baseUrl}api/v1/products/popular`);

        if (response.ok) {
            const { data } = await response.json();
            return data;
        }
    } catch (error) {
        console.error('category fetch:', error);
        return null;
    }
}
