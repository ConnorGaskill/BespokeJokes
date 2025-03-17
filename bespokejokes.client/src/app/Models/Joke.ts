export interface Joke {

  jokeId: number,
  jokeText: string,
  punchLineText: string,
  author: string,
  postDate: Date,
  updateDate: Date
}
export const emptyJoke: Joke = {
    jokeId: 0,
    jokeText: "",
    punchLineText: "",
    author: "",
  postDate: new Date("2025-03-15"),
  updateDate: new Date("2025-03-15")
}
