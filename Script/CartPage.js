

// function to append cart data

let getdata = JSON.parse(localStorage.getItem("cartData"));
let locationof = document.getElementById("append");


appendData();

function appendData(){
    let x = "";
    let tt = 0;
    for(let i=0; i<getdata.length; i++){
        tt += +getdata[i].price;
    }
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
                <p id="minus">-</p><p id="number">1</p><p class="plus">+</p>
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
        let grandT=document.getElementById("amount");
        let total=document.getElementById("rs");
        let totalPrice=document.getElementById("money");

        grandT.textContent=`Rs${tt}`;

        total.textContent=`Rs${tt}`;

        let removefromcart = document.querySelectorAll(".remove");
        removefromcart.forEach((el,index)=>{
            el.addEventListener("click",()=>{
                getdata.splice(index,1);
                localStorage.setItem("cartData", JSON.stringify(getdata));
                window.location.reload();
            })
        })
        let addof = document.querySelectorAll(".plus");
        
        addof.forEach((el)=>{
            el.addEventListener("click",add.bind(null,price));

        });
        let subof = document.querySelectorAll("#minus");
        subof.forEach((el)=>{

            el.addEventListener("click",subs.bind(null,price));
        })

        var count=1;
        let num=document.getElementById("number");

        function add(price){
            count++;
            num.textContent=count;
            
            totalPrice.textContent=`Rs${count*price}`;

            grandT.textContent=`Rs${count*price}`;

            total.textContent=`Rs${count*price}`;

        }
        function subs(price){
            if(count>=2){ 
            count--;
            num.textContent=count;

            totalPrice.textContent=`Rs${count*price}`;
        
            grandT.textContent=`Rs${count*price}`;

            total.textContent=`Rs${count*price}`;
        }
        }
    })
}


// function to change pin code

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


// function to place order

let btn = document.querySelector(".place");

btn.addEventListener("click", ()=>{
    let paymentdata = getdata;

    let paymentAmt = document.getElementById("amount").textContent;

    localStorage.setItem("paymentdata", JSON.stringify(paymentdata));
    localStorage.setItem("paymentAmount", JSON.stringify(paymentAmt));
    window.location.href = "SelectAddress.html";
})

