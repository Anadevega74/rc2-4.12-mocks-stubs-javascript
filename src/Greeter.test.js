export class Clock {
    isMorning() {
        const now = newDate();
        return now.getHours() < 12;
}

getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString:
}
}