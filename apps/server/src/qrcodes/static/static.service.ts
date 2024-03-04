import { Injectable } from '@nestjs/common';
import { CreateStaticDto } from './dto/create-static.dto';
import { UpdateStaticDto } from './dto/update-static.dto';

@Injectable()
export class StaticService {
  create(createStaticDto: CreateStaticDto) {
    return 'This action adds a new static';
  }

  findAll() {
    return `This action returns all static`;
  }

  findOne(id: number) {
    return `This action returns a #${id} static`;
  }

  update(id: number, updateStaticDto: UpdateStaticDto) {
    return `This action updates a #${id} static`;
  }

  remove(id: number) {
    return `This action removes a #${id} static`;
  }
}
