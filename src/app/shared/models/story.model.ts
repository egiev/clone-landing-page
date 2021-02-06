export interface Story {
  img_url: string,
  username: string,
  date: string,
  title: string,
  tags: Array<string>,
  reactions: number,
  comments: Array<string>,
}