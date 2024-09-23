export const setDateFormat = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', 'hour': '2-digit', 'minute': '2-digit' });
};

