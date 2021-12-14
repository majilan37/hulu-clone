import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({result},  ref) => {
    const IMG_API = 'https://image.tmdb.org/t/p/original/';
    return (
        <div ref={ref} className="group cursor-pointer transition duration-200 transform hover:scale-105 hover:z-50 m-2">
            <Image 
                layout='responsive'
                src={IMG_API + result.backdrop_path}
                height={1000}
                width={1920}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-150 group-hover:font-bold ease-out">
                    {result.title || result.original_name}
                </h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} +` } {' '}
                    {result.release_date || result.first_air_date} * {' '}
                    <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail