


export let API_URL;

if(process.env.NODE_ENV === "prod"){
   
    API_URL =""
}else{

    API_URL ="http://localhost:8080"
}


 