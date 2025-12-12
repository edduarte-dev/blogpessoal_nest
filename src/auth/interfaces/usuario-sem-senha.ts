import { Postagem } from "../../postagem/entities/postagem.entity";

export interface UsuarioSemSenha {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  postagem: Postagem[];
}