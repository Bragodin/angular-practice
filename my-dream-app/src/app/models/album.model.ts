import { Photo } from './photo.model';

export interface Album {
    _id?: string; 
    name: string;
    userId: string;
    photosName: Photo[];
}