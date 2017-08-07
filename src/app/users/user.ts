export class User {
    id: number;
    distinguishedname: string;
    first_name: string;
    last_name: string;
    email: string;
    login: string;
    domain_id: number;
    active: number;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    user_id_parent?: number;
    user_id?: number;
    childs?: [ any ];

}