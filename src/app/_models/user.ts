import { Photo } from './Photo';

export interface User {
    id: number;
    username: string;
    KnownAs: string;
    age: Int16Array;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    // These are for the detailed list
    // optional properties need to be after required
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
