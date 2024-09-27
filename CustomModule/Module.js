// function Add(a,b){
//     return a+b;
// }

class Addition{
    Addition(dataA){
        if(dataA % 2 == 0){
            console.log("Number is Even");
        }
        else{
            console.log("Number is odd");
        }
    }
}
// module.exports = {Add};
module.exports = [Addition];