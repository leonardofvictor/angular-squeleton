export class Groups {
    success: boolean;
    message?: string;
    content: [Group[]]
}

export class Group {
    id: number;
    name: string;
    domain_id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    pivot: {
        user_id: number;
        group_id: number;
    }
}