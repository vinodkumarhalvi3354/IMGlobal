/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UseGuards, Req, Res, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  @ApiResponse({ status: 409, description: 'Username already exists' })
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(
      registerDto.username,
      registerDto.password,
    );
    
    return {
      message: 'User registration successful',
      id: user.id,
      username: user.username,
    };
  }

  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({ status: 200, description: 'User successfully logged in' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Req() req, @Res({ passthrough: true }) res: Response) {
    
    const result = await this.authService.login(req.user);
    
    // Set JWT as HttpOnly cookie
    res.cookie('jwt', result.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // use secure in production
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
    });
    
    return {
      message: 'Login successful',
      user: result.user,
      access_token: result.access_token,
    };
  }

  @ApiOperation({ summary: 'Get current user information' })
  @ApiResponse({ status: 200, description: 'Returns user information' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Req() req) {
    return {
      user: {
        id: req.user.userId,
        username: req.user.username,
        role: req.user.role,
      }
    };
  }

  @ApiOperation({ summary: 'Logout user' })
  @ApiResponse({ status: 200, description: 'User successfully logged out' })
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Logout successful' };
  }
}