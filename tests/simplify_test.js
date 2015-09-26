var keys = require("../keys");
var Simplify = require("simplify-commerce"),
client = Simplify.getClient({
    publicKey: keys.public,
    privateKey: keys.private
});
console.log(keys);
client.payment.create({
    amount : "100",
    description : "payment description",
    card : {
       expMonth : "11",
       expYear : "19",
       cvc : "123",
       number : "5555555555554444"
    },
    currency : "USD"
}, function(errData, data){
    if(errData){
        console.log(errData);      
        // console.error("Error Message: " + errData.data.error.message);
        // handle the error
        return;
    }
    console.log("Payment Status: " + data.paymentStatus);
});

// client.payment.create({
//     amount : "1000",
//     token : "f21da65e-f0ab-45cb-b8e6-40b493c3671f",
//     description : "payment description",
//     currency : "USD"
// }, function(errData, data){
//     if(errData){
//         console.error("Error Message: " + errData.data.error.message);
//         // handle the error
//         return;
//     }
//     console.log("Payment Status: " + data.paymentStatus);
// });