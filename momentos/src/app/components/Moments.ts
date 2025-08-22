export interface Moments {
    id?: number;
    title: string;
    descripton: string;
    image:string;
    created_at?: string;
    update_at?: string;
    coments?:[{tetx: string; username: string}];
}