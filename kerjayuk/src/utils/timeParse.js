import dayjs from "dayjs";


export const dateParse = (date) => {
    const today = dayjs();
    const yesterday = dayjs().subtract(1, 'day');

    if (today.isSame(dayjs(date), 'day')) {
        return 'today';
    } else if (yesterday.isSame(dayjs(date), 'day')) {
        return 'yesterday';
    } else {
        return dayjs(date).format('YYYY-MM-DD');
    }
}

export const getPartOfDay = (time) => {
    const currentHour = dayjs(time).hour();

    if (currentHour >= 5 && currentHour < 12) {
        return 'Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Afternoon';
    } else {
        return 'Evening';
    }
}