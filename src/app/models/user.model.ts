import { Role } from './role.model'

export interface User {
    _id: string;
    name: string;
    email: string;
    role: Role;
}
