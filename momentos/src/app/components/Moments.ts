export interface Moments {
    id?: number;
    title: string;
    descripiton: string;
    created_at?: string;
    update_at?: string;
    coments?:[{tetx: string; username: string}];
}