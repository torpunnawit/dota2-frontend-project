

function Footer() {

    return (
        <footer className=" bg-black pt-8 pb-6 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-blueGray-700">
                            THANK YOU FOR YOUR VISIT !
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            You can contact me on any of these platforms,
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="" target="_blank">
                                    <img src="https://www.svgrepo.com/show/447139/line-fill.svg" alt="" />
                                </a>
                            </button>
                            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="/" target="_blank">
                                    <img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="" />
                                </a>
                            </button>
                            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <a href="/" target="_blank">
                                    <img src="https://www.svgrepo.com/show/474322/facebook.svg" alt="" />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Useful Links
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Github</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Other Resources

                                </span>
                                <ul className="list-unstyled"><li>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"> License</a>
                                </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Privacy Policy</a></li>
                                    <li>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact Us</a></li></ul></div></div></div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">Copyright ©
                            <span id="get-current-year">2024</span>
                            <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">
                            </a> Dota2 JS by<a href="https://www.facebook.com/Bararedd" className="text-blueGray-500 hover:text-blueGray-800"> Punnawit</a>.</div>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer