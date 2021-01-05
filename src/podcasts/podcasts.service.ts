import { Injectable } from '@nestjs/common';
import Podcast from './entities/podcasts.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  getAll() {
    return this.podcasts;
  }

  getOne(id: number) {
    return `getOne ${id}`;
  }

  getEpisodes(id: number) {
    return `getEpisodes ${id}`;
  }

  create(podcastsData: Podcast): boolean {
    this.podcasts.push({ id: this.podcasts.length + 1, ...podcastsData });
    return true;
  }

  createEpisode(id: number) {
    return `createEpisode ${id}`;
  }

  delete(id: number) {
    return `delete ${id}`;
  }
}
