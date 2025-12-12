import { compare, hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    const saltos: number = 10;
    return await hash(senha, saltos);
  }

  async compararSenha(
    senhaDigitada: string,
    senhaBanco: string,
  ): Promise<boolean> {
    return await compare(senhaDigitada, senhaBanco);
  }
}
