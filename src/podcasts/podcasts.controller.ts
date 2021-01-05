import { Controller, Get, Param } from '@nestjs/common';
// import { Episode } from './entities/podcasts.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly PodcastsService: PodcastsService) {}
  @Get()
  getAll() {
    return this.PodcastsService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') episodeId: string) {
    return this.PodcastsService.getOne(+episodeId);
  }
}
