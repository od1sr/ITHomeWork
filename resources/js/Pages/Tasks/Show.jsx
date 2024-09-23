import { Link } from '@inertiajs/react';
import { Layout } from '@/Layouts/Basic';
import { setDateFormat } from "@/utils";

export default function Show({ task, csrf_token }) {

    return (
        <Layout>
            <h1 className="mb-8 text-3xl font-bold">{task.subject}</h1>
            <h1 className="mb-8 text-3xl font-bold">{task.description}</h1>
            {task.additional_info ? <p className="mb-8">{task.additional_info}</p> : null}
            {task.due_date ? <p className="mb-8">Сдать до: {setDateFormat(task.due_date)}</p> : null}

            <Link
                href={route('tasks.edit', task.id)}
                className="text-blue-500 hover:text-blue-700 underline mr-4"
            >
                Редактировать
            </Link>
            <form action={route('tasks.destroy', task.id)} method="POST" className="inline-block">
                <input type="hidden" name="_method" value="DELETE" />
                <input type="hidden" name="_token" value={csrf_token} />
                <button type="submit" className="text-red-500 hover:text-red-700 underline">Удалить</button>
            </form>

        </Layout>
    );
}
