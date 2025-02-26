/* eslint-disable prettier/prettier */
import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();

    // Extract JWT from HttpOnly cookies or Authorization header
    const token = request.cookies?.jwt || request.headers.authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('JWT token missing');
    }

    return super.canActivate(context);
  }
}
