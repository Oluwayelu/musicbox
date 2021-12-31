export interface FlowInterface {
  title: string;
  subTitle: string;
  footer: string;
  icon: string;
  cover: string;
  backgroundImage: string;
}

export interface IRecentlyPlayed {
  title: string;
  subtitle: string;
  image: string;
  likes: string;
}

export interface Albums {
  title: string;
  subtitle: string;
  cover: string;
  releasedDate: string;
}

export interface IArtist {
  name: string;
  likes: string;
  albums: Albums[];
}
