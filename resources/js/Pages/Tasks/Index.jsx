import { Layout } from "@/Layouts/Basic"; '../../Layouts/Basic.jsx';
import { Link } from '@inertiajs/react';
import { setDateFormat } from "@/utils";

export default function Tasks({tasks}){
    console.log(tasks);

    const taskList = tasks.map((task, i) => (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i}
                </th>
                <td className="px-6 py-4">
                    {task.subject}
                </td>
                <Link href={`/tasks/${task.id}`}>
                <td className="px-6 py-4">
                    {task.description}
                </td>
                </Link>
                <td className="px-6 py-4">
                    {task.additional_info}
                </td>
                <td className="px-6 py-4">
                    {setDateFormat(task.due_date)}
                </td>
        </tr>
    ));

    console.log(taskList);

    return (
        <Layout>
            <h1>Задачи</h1>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                №
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Предмет
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Задание
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Описание
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Дедлайн
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList}
                    </tbody>
                </table>
            </div>

        </Layout>
    );
}