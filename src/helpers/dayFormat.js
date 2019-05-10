export function getDay(date,id){
    var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var new_date = date.getDay()+ id;
    if(new_date>6){
        new_date = new_date - 7;
    }
    return days[new_date];
}
export function getDayName(date){
    var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

export function getFormattedDate(date){
    var months = ['Jan', 'Feb', 'March', 'April','May','June'];
    let day = date.getDate();
    return months[date.getMonth()] + ' ' + day;
}