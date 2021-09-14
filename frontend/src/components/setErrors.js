export const setErrors = (name,email,route,date,Time,from,to,seatno)=>{
    let errors ={};
    errors.name=name?"":"Name is Required"
    errors.email=email?"":"Email is Required..Please enter valid Email"
    errors.route=route?"":"Bus Rute is Required "
    errors.date=date?"":"date is Required"
    errors.Time=Time?"":"Time is Required"
    errors.from=from?"":"From is Required"
    errors.to=to?"":"To.. is Required"
    errors.seatno=seatno?"":"Seat no is Required"
    return errors;

}