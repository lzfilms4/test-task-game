export interface CardType {
  id: number,
  developer: string,
  freetogame_profile_url: string,
  game_url: string,
  genre: string,
  platform: string,
  publisher: string,
  release_date: string,
  short_description: string,
  thumbnail: string,
  title: string
}

export interface FullGameInfo extends CardType {
  minimum_system_requirements: Record<string, string>,
  screenshots: { id: number, image: string }[],
  status: string
}
