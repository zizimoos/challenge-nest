import { Injectable } from '@nestjs/common';
import Podcast from './entities/podcasts.entity';

@Injectable()
export class PodcastsService {
  private episodes: Podcast[] = [];

  getAll() {
    return this.episodes;
  }

  getOne(id: number) {
    return `getOne ${id}`;
  }
}
