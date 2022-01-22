
let getdata = JSON.parse(localStorage.getItem("cartData"));
let locationof = document.getElementById("append");

console.log(getdata);

appendData();

function appendData(){
    let x = "";
    getdata.forEach(({title,price,image})=>{

        document.querySelector(".heading").innerHTML = `My Cart ( ${getdata.length} Item )`;

        x += `<div class="box1">
        <div class="img">
            <img
            class="small-img"
            src="${image}"
            alt="mobile phone"/>
        </div>
        <div class="text">
            <span class="box1-1">
                <p class="product">${title}</p>
                <p  onclick="subs()" id="minus">-</p><p id="number">1</p><p  onclick="add()" class="plus">+</p>
                <p class="price">Price :</p>
                <p class="rate">Rs${price}</p>
                <p  id="money">Rs${price}</p>
            </span>
            <span class="box1-2">
                <p class="cod">COD not applicable</p>
                <p class="remove">Remove</p>
                <p class="fee">Shipping Fee :</p>
                <p class="free">FREE</p>
                <p class="tax">Inclusive of all the applicable taxes</p>
            </span>
        </div>
    </div>`

        locationof.innerHTML = x;
    })
}

var count=1;
let num=document.getElementById("number");

function add(){
    count++;
    num.textContent=count;
    let totalPrice=document.getElementById("money");
    totalPrice.textContent=`Rs${count*7490}`;
    let grandT=document.getElementById("amount");
    grandT.textContent=`Rs${count*7490}`;

    let total=document.getElementById("rs");
    total.textContent=`Rs${count*7490}`;
}
function subs(){
    if(count>=2){ 
    count--;
    num.textContent=count;
    let totalPrice=document.getElementById("money");
    totalPrice.textContent=`Rs${count*7490}`;
    let grandT=document.getElementById("amount");
    grandT.textContent=`Rs${count*7490}`;

    let total=document.getElementById("rs");
    total.textContent=`Rs${count*7490}`;
}
}
function pincodeChange(){
    let inPin=document.getElementById("pc").value;
    let picode=document.getElementById("pincode");
    picode.innerHTML="";
    let div=document.createElement("div");
    div.style.display="flex";
    let img=document.createElement("img");
    img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bliPHslbHZ4QJutmOC9EoCfLcSqnSYc5BX88AU1BsHJfcr-7hFWqbh3CewWNbE9kcH0&usqp=CAU";
    img.style.height="50px"
    let div2=document.createElement("div");
    let del=document.createElement("p");
    del.textContent="Delivery pincode";
    let pin=document.createElement("p");
    pin.textContent=inPin;
    div2.append(del,pin);
    div.append(img,div2);
    picode.append(div);
}

