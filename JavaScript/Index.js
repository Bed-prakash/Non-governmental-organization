var c=0;
function Img(){
    if (c==0) {
        document.getElementById("img1").setAttribute("src","https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.webp?b=1&s=170667a&w=0&k=20&c=9P0Mwd1h7-lLJEROWQS12zNc_HSAxCxK_k0euLl1_yE=");
    } else if(c==1){
        document.getElementById("img1").setAttribute("src","https://media.istockphoto.com/id/1435661969/photo/close-up-of-children-holding-a-planet-at-the-beach.webp?b=1&s=170667a&w=0&k=20&c=Sxw1A1n3Y9ZZiR-hQBtKSqBkjYN8J1Wgs4HLbp2yh2c=");
    }else if(c==2){
        document.getElementById("img1").setAttribute("src","https://media.istockphoto.com/id/1477731413/photo/volunteers-hands-stacking-in-a-circle.webp?b=1&s=170667a&w=0&k=20&c=mosfk-JD0m5Qh09d5XGlYa4weaRWn5ffHKfNuxWb9z4=");
    }else if(c==3){
        document.getElementById("img1").setAttribute("src","https://images.unsplash.com/photo-1594708767771-a7502209ff51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmdvfGVufDB8fDB8fHww");
    }else if(c==4){
        document.getElementById("img1").setAttribute("src","https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117884.jpg?size=626&ext=jpg&ga=GA1.1.283374479.1707385347&semt=ais");
    }else if(c==5){
        document.getElementById("img1").setAttribute("src","https://img.freepik.com/free-photo/medium-shot-smiley-kids-playing-together_23-2149479914.jpg?size=626&ext=jpg&ga=GA1.1.283374479.1707385347&semt=ais");
    }
    document.getElementById("img1").style.transition="0.5s";
    c=c+1;
    if (c==6) {
        c=0
    }
    setTimeout(Img,3000);
}

function openContect(a){
    if (a==1) {
        window.location.href="./HTML/Contact.html";
    } else {
        window.location.href="Contact.html";
    }
   
}

//all page to donation page
function donate(a){
    if (a==1) {
        window.location.href="./HTML/Donation.html";
    } else {
        window.location.href="Donation.html";
    }
}
//donation page
function amount(a){
    sessionStorage.setItem("amount",a);   
    window.location.href="Amount.html";
}





