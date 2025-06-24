function useDate() {
    let dateFromBrazilianHour = new Date();

    document.getElementById("hours").textContent = addLeftZero(dateFromBrazilianHour.getHours().toString());
    document.getElementById("minutes").textContent = addLeftZero(dateFromBrazilianHour.getMinutes().toString());
    document.getElementById("seconds").textContent = addLeftZero(dateFromBrazilianHour.getSeconds().toString());

    setTimeout('useDate()', 1000);
}

function addLeftZero(hour) {
    if (hour.length == 1) return "0" + hour;
    else return hour;
}