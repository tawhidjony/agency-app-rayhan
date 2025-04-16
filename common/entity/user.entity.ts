export interface UserEntity {
    username: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    image: string | null;
    passport_or_nid: string;
    nationality: string;
    gender: string;
    isForigner: boolean;
    role_id: number;
    department_id: number;
    status: string;
    id: number;
    is_active: boolean;
    is_superuser: boolean;
    created_at: string;
    updated_at: string | null;
    created_by: string | null;
    updated_by: string | null;
}