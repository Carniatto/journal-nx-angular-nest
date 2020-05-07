import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { JournalEntry } from '@trombonix/types';

import { AppService } from './app.service';

@Controller('entries')
export class AppController {
 constructor(private readonly appService: AppService) {}

 @Get()
 getData() {
   return this.appService.getData();
 }

 @Post()
 create(@Body() body: JournalEntry) {
   return this.appService.create(body);
 }

 @Delete(':id')
 delete(@Param('id', ParseIntPipe) id: number) {
   return this.appService.delete(id);
 }
}
