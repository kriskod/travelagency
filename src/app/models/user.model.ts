import { Role } from './role.model'

export interface UserStructure {
    _id: string;
    username: string;
    email: string;
    role: Role;
}
