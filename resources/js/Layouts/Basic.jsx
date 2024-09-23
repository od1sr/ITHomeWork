import { Link } from "@inertiajs/react";

export function Layout({ children }) {
    return (
        <div style={{height: "100%"}} className="flex flex-col">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <img src="https://www.chuvsu.ru/wp-content/themes/SiteOnWpTEAM/img/logo.gif"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Мои дз)</span>
                        <div className="flex items-center lg:order-2">
                            <Link href={route('tasks.index')} className="text-gray-800 dark:text-white 
                                hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 
                                font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 
                                mr-2 dark:hover:bg-gray-700 focus:outline-none 
                                dark:focus:ring-gray-800"
                            >Список</Link>
                            <Link href={route('tasks.create')} className="text-gray-800 dark:text-white 
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
        </div>
    );
}