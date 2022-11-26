import dayjs from "dayjs";

export const renderDateTimeStatus = (visitDateTime) => {
    const diff = dayjs(visitDateTime).diff(new Date(),"day")
    if (diff > 0) return `${diff} days later`;
    if (diff === 0) return `Today you have this appointments`;
    if (diff < 0) return `Expired`;
}