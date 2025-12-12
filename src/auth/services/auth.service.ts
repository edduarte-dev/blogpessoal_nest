import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioService } from '../../usuario/services/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { Bcrypt } from '../bcrypt/bcrypt';
import { UsuarioLogin } from '../entities/usuariologin.entity';
import { UsuarioResponse } from '../interfaces/usuario-response.interface';
import { UsuarioSemSenha } from '../interfaces/usuario-sem-senha';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private bcrypt: Bcrypt,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<UsuarioSemSenha | null> {
    const buscaUsuario = await this.usuarioService.findByUsuario(username);

    if (!buscaUsuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    const matchPassword = await this.bcrypt.compararSenha(
      password,
      buscaUsuario.senha,
    );

    if (buscaUsuario && matchPassword) {
      const { senha, ...resposta } = buscaUsuario;
      return resposta;
    }

    return null;
  }

  async login(usuarioLogin: UsuarioLogin): Promise<UsuarioResponse> {
    const payload = { sub: usuarioLogin.usuario };

    const buscaUsuario = await this.usuarioService.findByUsuario(
      usuarioLogin.usuario,
    );

    if (!buscaUsuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

    return {
      id: buscaUsuario.id,
      nome: buscaUsuario.nome,
      usuario: buscaUsuario.usuario,
      foto: buscaUsuario.foto,
      token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }
}