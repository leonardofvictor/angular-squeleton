export class Domains {
    success: boolean;
    message?: string;
    content: [Domain[]]
}

export class Domain {
    id: number;
    name: string;
}