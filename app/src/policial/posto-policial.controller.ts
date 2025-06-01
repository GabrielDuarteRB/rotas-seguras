import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PolicialService } from './policial.service';
import { CreatePostoPolicialDto } from './dto/create-posto-policial.dto';
import { UpdatePostoPolicialDto } from './dto/update-posto-policial.dto';
import { ReplacePostoPolicialDto } from './dto/replace-posto-policial.dto';

@Controller('posto-policial')
export class PostoPolicialController {
  constructor(private readonly policialService: PolicialService) {}

  @Post()
  create(@Body() createPostoPolicialDto: CreatePostoPolicialDto) {
    try {
      return this.policialService.createPostoPolicial(createPostoPolicialDto);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll() {
    try {
      return this.policialService.findAllPostoPolicial();
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.policialService.findByIdPostoPolicial(+id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() updatePostoPolicialDto: UpdatePostoPolicialDto) {
    try {
      return this.policialService.updatePostoPolicial(+id, updatePostoPolicialDto);
    } catch (error) {
      throw error;
    }
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() replacePostoPolicialDto: ReplacePostoPolicialDto) {
    try {
      return this.policialService.updatePostoPolicial(+id, replacePostoPolicialDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.policialService.removePostoPolicial(+id);
    } catch (error) {
      throw error;
    }
  }
}