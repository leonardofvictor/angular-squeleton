import { User } from './user';

export class UserList {
    total: string;
    per_page: string;
    current_page: string;
    last_page: string;
    next_page_url?: string;
    prev_page_url?: string;
    from: string;
    to: string;
    data: [ User[] ];
}
