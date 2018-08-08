const requireZero = (number,index=2)=>("00" + number).slice(-index);

function getDate(){
  let dt = new Date();
  return dt.getFullYear() + "/" + requireZero(dt.getMonth()+1) + "/" + requireZero(dt.getDate());
}
function getTime(){
  let dt = new Date();
  return getDate()+" "+requireZero(dt.getHours())+":"+requireZero(dt.getMinutes())+":"+requireZero(dt.getSeconds());
}