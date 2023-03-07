import Movies from '@/components/Movies';
import React from 'react'

const Page = async({params}) => {
    const keyword =params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=137463f64543b6952f2c44872ac73d72&query=${keyword}&language=en-US&include_adult=false`);

    const data = await res.json();
    console.log(data?.results, "data")

  return (
    <div>
        {
            !data?.results ? 
            <div>Aranılan Film Bulunamadı.</div> :
            <div className='flex items-center flex-wrap gap-3 container'>
                {
                data?.results.map((item, index) => (
                <Movies key={index} item={item}/>
            ))
            }
            </div>
                
        }
    </div>
  )
}

export default Page