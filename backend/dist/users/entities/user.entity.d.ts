export declare class User {
    id: string;
    username: string;
    password: string;
    role: string;
    hashPassword(): Promise<void>;
}
