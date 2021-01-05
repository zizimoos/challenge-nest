import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import Podcast from './entities/podcasts.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly PodcastsService: PodcastsService) {}
  @Get()
  getAll() {
    return this.PodcastsService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') podcastId: string) {
    return this.PodcastsService.getOne(+podcastId);
  }

  @Get(':id/episodes')
  getEpisodes(@Param('id') podcastId: string) {
    return this.PodcastsService.getEpisodes(+podcastId);
  }

  @Post()
  create(@Body() podcastData: Podcast) {
    return this.PodcastsService.create(podcastData);
  }

  @Post(':id/episodes')
  createEpisode(@Param('id') episodeId: string) {
    return this.PodcastsService.createEpisode(+episodeId);
  }

  @Delete(':id')
  delete(@Param('id') podcastId: string) {
    return this.PodcastsService.delete(+podcastId);
  }
}
