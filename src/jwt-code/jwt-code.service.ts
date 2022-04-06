import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class JwtCodeService {
  constructor(private readonly jwtservice: JwtService) {}

  //This is create token method
  async CreateJwtToken(login: any) {
    const jwt = await this.jwtservice.signAsync({ username: login.username });
    return jwt;
  }

  /**This is verify token method */
  async verifyJwtToken(token: string) {
    const verifyToken = await this.jwtservice.verifyAsync(token);
    return verifyToken;
  }

  /**This is delete token method */
  async deleteToken(response: Response): Promise<string> {
    response.clearCookie('jwt');
    return 'logout success';
  }
}
