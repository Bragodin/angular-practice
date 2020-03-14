export interface Photo {
    _id: string;
    name: string;
    albumId: string;
    userId?: string;
    likes?: string[];
}