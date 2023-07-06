export default function ProductForm() {
    return (
        <>
            <div className="w-full flex flex-col py-8 items-center justify-center">
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="10" />
                            {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" /> */}
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full  md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Quantity
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="10" />
                        </div>
                        <div className="w-full  md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Price
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="1500" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Description
                            </label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gr bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:bg-white" placeholder="Write your thoughts here..."></textarea>

                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}