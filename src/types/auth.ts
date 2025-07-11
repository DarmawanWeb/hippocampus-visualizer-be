import { Request } from 'express';
import { Role } from '@/enums/role.enum';

export interface RegisterUserData {
  name: string;
  email: string;
  password: string;
  role?: Role;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

export interface AuthUser {
  id: number;
  email: string;
  role: string;
}

export interface AuthRequest extends Request {
  user?: AuthUser;
}
