import {  getMovieById, getMovies } from '@/lib/movies'
import React from 'react'


export function generateMetadata({params:{id}}){
  return {
    title: id
  }
}

export default async function SingleMovie({params:{id}}) {
  const movie = await getMovieById(id)
  return (
    <div>
      {movie.title}
    </div>
  )
}

export async function generateStaticParams(){
  const movies = await getMovies()
  return movies.data.map(movie=>({
    id:movie.id.toString()
  }))
}