import { Injectable, NotFoundException } from '@nestjs/common';
import Podcast, { Episode } from './entities/podcasts.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  getAll() {
    return this.podcasts;
  }

  create(podcastsData: Podcast): boolean {
    this.podcasts.push({ id: this.podcasts.length + 1, ...podcastsData });
    return true;
  }

  getOne(id: number): Podcast {
    const podcast = this.podcasts.find((pod) => pod.id === id);
    if (!podcast) {
      throw new NotFoundException(`Podcast with ID ${id} not found`);
    }
    return podcast;
  }

  upDate(id: number, updateData: any): boolean {
    const podcast = this.getOne(id);
    this.delete(id);
    this.podcasts.push({ ...podcast, ...updateData });
    if (!podcast) {
      return false;
    }
    return true;
  }

  delete(id: number): boolean {
    this.getOne(id);
    this.podcasts = this.podcasts.filter((pod) => pod.id !== id);
    if (!this.podcasts) {
      return false;
    }
    return true;
  }

  getEpisodes(id: number): Episode[] {
    const podcast = this.podcasts.find((pod) => pod.id === id);
    const episode = podcast.episodes;
    return episode;
  }

  createEpisode(id: number, createEpisode: Episode[]) {
    const podcast = this.getOne(id);
    podcast.episodes = createEpisode;
    return podcast;
  }

  upDateEpisodeId(
    podcastId: number,
    episodeId: number,
    upDateEpisode: Episode,
  ) {
    const podcast = this.getOne(podcastId);
    const newEpisode = podcast.episodes.find((epi) => epi.id === episodeId);
    this.deleteEpisodeId(podcastId, episodeId);
    podcast.episodes[newEpisode.id] = upDateEpisode;
    return podcast;
  }

  deleteEpisodeId(podcastId: number, episodeId: number) {
    const podcast = this.getOne(podcastId);
    const newEpisode = podcast.episodes.filter((epi) => epi.id !== episodeId);
    podcast.episodes = newEpisode;
  }
}
