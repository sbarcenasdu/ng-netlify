export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    image: string;
    gender: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
}
