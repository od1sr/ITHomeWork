import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div style={{height: "100%"}} className="flex flex-col">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <img src="https://www.chuvsu.ru/wp-content/themes/SiteOnWpTEAM/img/logo.gif"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Мои дз)</span>
                        <div className="flex items-center lg:order-2">
                            <Link href="#" className="text-gray-800 dark:text-white 
                                hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 
                                font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 
                                mr-2 dark:hover:bg-gray-700 focus:outline-none 
                                dark:focus:ring-gray-800"
                            >Список</Link>
                            <Link href="#" className="text-gray-800 dark:text-white 
                                hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 
                                font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 
                                mr-2 dark:hover:bg-gray-700 focus:outline-none 
                                dark:focus:ring-gray-800"
                            >Добавить</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="self-center">
                {children}
            </div>
            
            <footer className="bg-white shadow dark:bg-gray-800 hidden"
            style={{flex: "0 0 auto"}}>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
                </div>
            </footer>

        </div>
    );
}