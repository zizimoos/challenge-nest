export class Episode {
  id: number;
  episode: string;
}

class Podcast {
  id: number;
  title: string;
  category: string;
  rating: number;
  episodes: Episode[];
}

export default Podcast;
