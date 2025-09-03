export interface TutorDTO {
    id: string;
    name: string;
    email: string;
    phone: number;
    city: string;
    state: string;
    subjects: string[];
    bio: string;
    rating: number;
    dateCreated: Date;
}