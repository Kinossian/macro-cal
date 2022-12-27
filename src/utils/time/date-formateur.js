export default function dateFormater(date) {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });
    return newDate;
}

