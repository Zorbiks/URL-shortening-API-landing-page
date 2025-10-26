import { useState } from "react"

const ShortedLink = ({url, shortUrl}) => {
    const [clicked, setClicked] = useState(false)

    const copyShortUrl = () => {
        navigator.clipboard.writeText(shortUrl)
        setTimeout(() => {
            setClicked(false)
        }, 1000)
        setClicked(true)
    }

    return (
        <div className="mb-4">
            <div className="flex items-center gap-8 px-8 py-4 bg-white rounded-lg">
                <div className="text-lg flex-1 text-purple-950">
                    {url}
                </div>
                <div className="text-lg text-blue-400">
                    {shortUrl}
                </div>
                <div>
                    <button className={`${clicked ? 'bg-purple-950 text-white' : 'bg-blue-400 hover:bg-blue-300'} font-bold block px-8 py-2 text-center text-white  rounded-md cursor-pointer`} onClick={copyShortUrl}>
                        {clicked ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShortedLink