import { Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        id: string;
        username: string;
    }>;
    login(loginDto: LoginDto, req: any, res: Response): Promise<{
        message: string;
        user: {
            id: any;
            username: any;
            role: any;
        };
        access_token: string;
    }>;
    getProfile(req: any): {
        user: {
            id: any;
            username: any;
            role: any;
        };
    };
    logout(res: Response): {
        message: string;
    };
}
