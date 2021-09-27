const deg = 6;
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours() * 30; 
    let minute = day.getMinutes() * deg; 
    let second = day.getSeconds() * deg; 

    hr.style.transform = `rotateZ(${(hour) + (minute/12)}deg)`;
    mn.style.transform = `rotateZ(${(minute)}deg)`;
    sc.style.transform = `rotateZ(${(second)}deg)`;

});

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        month = now.getMonth(),
        dnum = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        period = "AM";

    if (hour == 0) {
        hour = 12
    }
    if (hour > 12) {
        hour -= 12;
        period = "PM";
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];

    var values = [days[dname], months[month], dnum, year, hour.pad(2), minute.pad(2), second.pad(2), period];

    for (let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}


