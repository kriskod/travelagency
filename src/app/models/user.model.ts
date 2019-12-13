export interface User {
    _id: string;
    name: string;
    email: string;
    roles: Roles;
}

export interface Roles {
    user: boolean;
    admin?: boolean;
}