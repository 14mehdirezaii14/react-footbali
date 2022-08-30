

export const getToday = ():string => {
  let today: Date | string| boolean = new Date();
  var dd: string = String(today.getDate()).padStart(2, "0");
  var mm: string = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy:number = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  return today;
};
