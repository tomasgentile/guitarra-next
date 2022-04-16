export const dateFormat = (date) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    const newDate = new Date(date)

    return newDate.toLocaleString('es-ES', options);
}