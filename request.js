const request = require("request");

const REQ_NUM = 1000000;


const date = new Date();
for(let i = 0; i< REQ_NUM;i++){
    request("http://192.168.99.105:30315", (err, res)=> {
        if(i === REQ_NUM - 1){
            console.log("Segundos: " + (new Date() - date)/1000);
        }
    })
}
