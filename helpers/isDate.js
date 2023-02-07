//custom validator de express validator
//hemos instalado moment
const moment = require('moment');

const isDate = (value,{req,location,path}) =>{
    // console.log(value);
    // console.log(req);
    // console.log(location);
    // console.log(path);
    if(!value){
        return false;
    }

    const fecha = moment(value);
    if(fecha.isValid()){
        return true;
    }else{
        return false;
    }
}   

module.exports = {
    isDate
}