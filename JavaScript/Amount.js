//amount html pages 
function getAmount(){
    var amounts=sessionStorage.getItem("amount");
    console.log("*",amounts);
    if (amounts=='a100') {
        document.getElementById("amount").value=100;
        document.getElementById("amount").setAttribute("readonly","true")
    } else if(amounts=='a500'){
        document.getElementById("amount").value=500;
        document.getElementById("amount").setAttribute("readonly","true")
    }else if(amounts=='a1000'){
        document.getElementById("amount").value=1000;
        document.getElementById("amount").setAttribute("readonly","true")
    }else if(amounts=='a2000'){
        document.getElementById("amount").value=2000;
        document.getElementById("amount").setAttribute("readonly","true")
    }else if(amounts=='a5000'){
        document.getElementById("amount").value=5000;
        document.getElementById("amount").setAttribute("readonly","true")
    }else if(amounts=='a10000'){
        document.getElementById("amount").value=10000;
        document.getElementById("amount").setAttribute("readonly","true")
    }else if(amounts=='0'){
        document.getElementById("amount").value=1;
    }   
}

function sub(){
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var address=document.getElementById("address").value
    var city=document.getElementById("city").value
    var state=document.getElementById("state").value
    var zip=document.getElementById("zip").value
    var country=document.getElementById("country").value
    var cardNumber=document.getElementById("cardNumber").value
    var expiry=document.getElementById("expiry").value
    var cvv=document.getElementById("cvv").value
    var amount=document.getElementById("amount").value

   // nameO=name1,email=email1,address=address1,city=city1,state=state1,zip=zip1,country=country1,cardNumber=cardNumber1,expiry=expiry1,cvv=cvv1;

    console.log(name,email,address,city,state,zip,country,cardNumber,expiry,amount,cvv);
    var nameBool=true,emailBool=true,addressBool=true,cityBool=true,stateBool=true,zipBool=true,countryBool=true,cardNumberBool=true,expiryBool=true,amountBool=true,cvvBool=true;
    if(amount<1){
        amountBool=false;
        document.getElementById("error").innerHTML="Invalid Amount";
    } else if(name.length==0){
        nameBool=false;
        document.getElementById("error").innerHTML="Invalid Name";
    } else if(email.length==0){
        emailBool=false;
        document.getElementById("error").innerHTML="Invalid Email";
    }else if(address.length==0){
        addressBool=false;
        document.getElementById("error").innerHTML="Invalid Address";
    }else if(city.length==0){
        cityBool=false;
        document.getElementById("error").innerHTML="Invalid City ";
    }else if(state.length==0){
        stateBool=false;
        document.getElementById("error").innerHTML="Invalid State ";
    }else if(zip==0){
        zipBool=false;
        document.getElementById("error").innerHTML="Invalid Zip ";
    }else if(country.length==0){
        countryBool=false;
        document.getElementById("error").innerHTML="Invalid Country";
    }else if(!(cardNumber>=111111111111 && cardNumber<=999999999999)){
        cardNumberBool=false;
        document.getElementById("error").innerHTML="Invalid card No";
    }else if(expiry==0){
        emailBool=false;
        document.getElementById("error").innerHTML="Invalid expiry date";
    }else if(!(cvv>=111 && cvv<=999)){
        cvvBool=false;
        document.getElementById("error").innerHTML="Invalid cvv No";
    }
    console.log(nameBool,emailBool,addressBool,cityBool,stateBool,zipBool,countryBool,cardNumberBool,expiryBool,amountBool,cvvBool);
    if (nameBool==true&&emailBool==true&&addressBool==true&&cityBool==true&&stateBool==true&&zipBool==true&&countryBool==true&&cardNumberBool==true&&expiryBool==true&&amountBool==true&&cvvBool==true) {
        window.location.href="Success.html";
    } else {
        setTimeout(out,5000);
    }   
}
function out(){
    document.getElementById("error").innerHTML="";
}
