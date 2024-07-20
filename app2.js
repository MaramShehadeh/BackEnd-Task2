
//*******************************************Lec-6 app****************************************** */



const request = require("request")

const forecast = require ("./forecast")

const geocode = require("./geocode")

const country = process.argv[2]


geocode(country, (error , data) => {

    if(error){
        console.log("error : " , error)
    }
    else{
        console.log("data : "  , data)
    }
   
  

    forecast( data.latitude , data.longtitude , (error , data) => {

        if(error){
            console.log("error : " , error)
        }
        else{
            console.log("data : "  , data)
        }
     } )
 })
