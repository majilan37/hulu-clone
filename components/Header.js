import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    HomeIcon, 
    CollectionIcon, 
    BadgeCheckIcon, 
    LightningBoltIcon,
    SearchIcon, 
    UserIcon
    
 } from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex flex-col items-center py-4 sm:flex-row sm:justify-center">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <div className="flex justify-end flex-grow">
                <Image 
                    src='https://bit.ly/3oYORCx'
                    width={200}
                    height={100}
                />
            </div>
        </header>
    )
}

export default Header
