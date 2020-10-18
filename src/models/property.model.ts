export interface CreatePropertyDTO {
    title: string;
    description: string;
    price: number;
    type: string;
    country: string;
    city: string;
}

export interface SearchPropertyDTO {
    type: string | null;
    country: string | null;
    city: string | null;
}