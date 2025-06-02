let Isthere=true;
function Inline(){
     return new Promise((resolve,reject)=>{
        
            if(Isthere){
               resolve("buy");
            }
            else{
                reject("reject");
            }
       

     });
}
async function Halwa(){
    try{
        let result=await Inline();
        console.log(result);
    }
    catch(error){
console.log(error);
    }
    setTimeout(()=>{
        console.log("jeeva");
    },2000);

}
Halwa();