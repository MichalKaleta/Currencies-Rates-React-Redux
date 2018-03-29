
const today= new Date();
const dayOfMonth =today.getDate()
const unixFirstOfMonth = today.getTime() -86400000*(dayOfMonth-1) ;
const unixYesterday =  today.getTime() -86400000;

export const firstOfMonth =new Date(unixFirstOfMonth).toJSON().slice(0,10)
export  const yesterday =new Date(unixYesterday).toJSON().slice(0,10)