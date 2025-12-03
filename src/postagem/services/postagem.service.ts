import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';
import { InjectRepository } from '@nestjs/typeorm';

// Serviço responsável por gerenciar as postagens
@Injectable()
export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
  ) {}

  // Retorna todas as postagens
  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find();
  }
  // Retorna uma postagem pelo ID
  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: { id },
    });

    if (!postagem)
      throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

    return postagem;
  }
  // Cria uma nova postagem
  async create(postagem: Postagem): Promise<Postagem> {
    return await this.postagemRepository.save(postagem);
  }
  // Atualiza uma postagem existente
  async update(postagem: Postagem): Promise<Postagem> {
    await this.findById(postagem.id);

    return await this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.postagemRepository.delete(id);
  }
}
