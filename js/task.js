export class Task {
    id = 0;
    name = "";
    status = false;
    created = null;

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.created = new Date();
    }

    toggleStatus() {
        // console.log('can\'t toggle yet');
        // this toggles the status to the opposite state
        this.status = !this.status;
        // console.log("Task status is now: " + this.status);
    }

    getInfo() {
        return this.name + ': ' + this.toPrettyDate();
    }

    toPrettyDate() {
        return this.toShortDate(this.created) + " " + this.toShortTime(this.created);
    }

    toShortDate(shortDate) {
        let month = shortDate.getMonth() + 1;
        let day = shortDate.getDate();
        let year = shortDate.getFullYear();

        shortDate = month + '/' + day + '/' + year;
        return shortDate;
    }

    // date is a dateObject
    // date parameter allows to read task variable out side of scope
    // date links and replaces to task.created
    toShortTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = "am";

        if (hours > 12) {
            hours -= 12;
            ampm = "pm";
        }

        if (minutes < 10 ) {
            minutes = "0" + minutes;
        }

        if (seconds < 10 ) {
            seconds = "0" + seconds;
        }

        let time = hours + ':' + minutes + ':'+ seconds + ' ' + ampm;
        return time;
    }
}
