import IcomSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

export function Search (){
    return(

        <div className='flex item-center gap-4'>
             <Image
             src={IcomSearch}
             alt="Search"
             />
            <input type="text" className='bg-transparent outline-none pr-5 text-white placeholder:text-white' placeholder='buscar'
            />
        </div>
    )
}