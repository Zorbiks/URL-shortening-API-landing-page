const Form = ({handleSubmit}) => {
    return (
        <section className="-mb-18 relative z-10">
            <div className="px-4 mx-auto max-w-6xl">
                <div className="bg-[url(/bg-shorten-desktop.svg)] md:bg-[url(/bg-shorten-desktop.svg)] bg-purple-950 px-16 py-12 rounded-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <input className="bg-white rounded-md flex-1 p-4" type="text" placeholder="Shorten a link here..." name="url" />
                            <button className="font-bold block px-8 py-2 text-center text-white bg-blue-400 rounded-md hover:bg-blue-300 cursor-pointer" type="submit">Shorten It!</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form;