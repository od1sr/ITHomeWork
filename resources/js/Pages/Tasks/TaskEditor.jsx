import { Link, useForm } from '@inertiajs/react';
import { Layout } from '@/Layouts/Basic';

export default function Editor({ task, type }) {

    const { data, setData, errors, post: postRequest, put: putRequest } = useForm({
        subject: task?.subject ?? '',
        description: task?.description ?? '',
        additional_info: task?.additional_info ?? '',
        due_date: task?.due_date ?? '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        type === 'create' ? postRequest('/tasks', { onSuccess: () => console.log('success') }) : putRequest(`/tasks/${task.id}`, { onSuccess: () => console.log('success') });
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {type === 'create' ? 'Создание задания' : 'Редактирование задания'}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Предмет
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={data.subject}
                                onChange={(e) => setData('subject', e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        {errors.subject && <div className="text-red-600">{errors.subject}</div>}
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Описание
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="description"
                                name="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        {errors.description && <div className="text-red-600">{errors.description}</div>}
                    </div>

                    <div>
                        <label htmlFor="additional_info" className="block text-sm font-medium text-gray-700">
                            Дополнительная информация
                        </label>
                        <div className="mt-1">
                            <textarea
                                id="additional_info"
                                name="additional_info"
                                value={data.additional_info}
                                onChange={(e) => setData('additional_info', e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        {errors.additional_info && <div className="text-red-600">{errors.additional_info}</div>}
                    </div>

                    <div>
                        <label htmlFor="due_date" className="block text-sm font-medium text-gray-700">
                            Крайний срок
                        </label>
                        <div className="mt-1">
                            <input
                                id="due_date"
                                name="due_date"
                                type="datetime-local"
                                min={new Date().toISOString().slice(0, 16)}
                                max="2029-12-31T23:59"
                                value={ data.due_date }
                                onChange={(e) => {setData('due_date', e.target.value)}}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        {errors.due_date && <div className="text-red-600">{errors.due_date}</div>}
                    </div>

                    <div className="mt-8">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {type === 'create' ? 'Создать' : 'Сохранить'}
                        </button>
                        <Link
                            href={route('tasks.index')}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ml-2"
                        >
                           Отмена
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
}
/*
Editor.propTypes = {
    task: PropTypes.object,
    errors: PropTypes.object,
    chidlren: PropTypes.node,
    csrf_token: PropTypes.string,
    type: PropTypes.oneOf(['create', 'edit']),
};
*/