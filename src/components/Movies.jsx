"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Movies = ({item}) => {
    const router = useRouter();
    console.log(item, "item");
  return (
    <div onClick={()=> router.push(`/movie/${item?.id}`)} className='min-w-[470px] relative imgContainer'>
        <Image style={{objectFit:'cover'}}  width={470} height={300} src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path || item?.poster.path}`}/>
        <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
            <div className='text-2xl font-bold'>{item?.title}</div>
            <div className=''>{item?.release_date} - {item?.vote_average}</div>
        </div>
    </div>
  )
}

export default Movies