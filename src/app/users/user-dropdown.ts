export class UserDropdown {
    success: boolean;
    message?: string;
    content: [UserDropdownContent]
}
export class UserDropdownContent {
    id: number;
    name: string;
}