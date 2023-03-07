"use client"
import React from 'react'
import Image from 'next/image'

const Movies = ({item}) => {
    console.log(item, "item");
  return (
    <div className='min-w-[470px] imgContainer'>
        <Image width={470} height={300} src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path || item?.poster.path}`}/>
    </div>
  )
}

export default Movies