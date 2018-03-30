
const h24Unix =86400000;
const todayUnix =Date.now();

var dayOfMonthNow = new Date(todayUnix).getDate();

const yesterdayUnix = todayUnix - h24Unix;
const firstOfMonthUnix = todayUnix - (h24Unix * (dayOfMonthNow -1));

export var yesterday =new Date(yesterdayUnix).toJSON().slice(0,10);

export const firstOfMonth =new Date(firstOfMonthUnix).toJSON().slice(0,10);


