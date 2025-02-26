import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findOne(username: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    create(username: string, password: string): Promise<User>;
}
