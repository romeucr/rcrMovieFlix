export type MovieResponse = {
   content: Movie[],
   totalPages: number
}

export type Movie = {
   id: number,
   title: string,
   subTitle: string,
   year: number,
   imgUri: string,
   synopsis: string,
   genreId: number
}

export type GenreResponse = {
   id: number
   name: string
}