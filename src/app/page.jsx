import React from 'react'

const Page = async({searchParams}) => {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=137463f64543b6952f2c44872ac73d72&language=en-US&page=1`,
  {next : { revalidate:10000}})

  const data = await res.json();
  console.log(data, "data")
  return (
    <h1 className="">
    Veri Çekme Alanı
    </h1>
  )
}

export default Page