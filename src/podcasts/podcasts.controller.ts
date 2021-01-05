import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import Podcast, { Episode } from './entities/podcasts.entity';
import { PodcastsService } from './podcasts.service';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly PodcastsService: PodcastsService) {}
  @Get()
  getAll() {
    return this.PodcastsService.getAll();
  }

  @Post()
  create(@Body() podcastData: Podcast) {
    return this.PodcastsService.create(podcastData);
  }

  @Get('/:id')
  getOne(@Param('id') podcastId: string) {
    return this.PodcastsService.getOne(+podcastId);
  }

  @Patch(':id')
  upDate(@Param('id') podcastId: string, @Body() updateData: any) {
    return this.PodcastsService.upDate(+podcastId, updateData);
  }

  @Delete(':id')
  delete(@Param('id') podcastId: string) {
    return this.PodcastsService.delete(+podcastId);
  }

  @Get(':id/episodes')
  getEpisodes(@Param('id') podcastId: string) {
    return this.PodcastsService.getEpisodes(+podcastId);
  }

  @Post(':id/episodes')
  createEpisode(
    @Param('id') episodeId: string,
    @Body() createEpisode: Episode[],
  ) {
    return this.PodcastsService.createEpisode(+episodeId, createEpisode);
  }

  @Patch(':id/episodes/:episodeId')
  upDateEpisodeId(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
    @Body() upDateEpisode: Episode,
  ) {
    return this.PodcastsService.upDateEpisodeId(
      +podcastId,
      +episodeId,
      upDateEpisode,
    );
  }

  @Delete(':id/episodes/:episodeId')
  deleteEpisodeId(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.PodcastsService.deleteEpisodeId(+podcastId, +episodeId);
  }
}
