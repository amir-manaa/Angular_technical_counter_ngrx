//
export function isAgeOver18(date: Date): boolean {
    const currentDate = new Date();
    const years = Math.floor((currentDate.getFullYear() - date.getFullYear()));
    return years > 18;
}