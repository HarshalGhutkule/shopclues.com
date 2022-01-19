

// dorpdown options mouseover function

function mouseoverNavigation(ele){
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "block";
    document.querySelector(`#${ele}>a`).style.backgroundColor = "white";
    document.querySelector(`#${ele}>a`).style.color = "#24a3b5";
}


// dorpdown options mouseout function

function mouseoutNavigation(ele){
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "none";
    document.querySelector(`#${ele}>a`).style.backgroundColor = "#24a3b5";
    document.querySelector(`#${ele}>a`).style.color = "white";
}

// function to openSigninPage
let openSigninPage = ()=> {
    document.getElementById("back").style.display = "block";
}

// function for signOut

let signOut = () => {
        document.getElementById("login_sucess").textContent = "Sign In";
        document.getElementById("login_sucess").style.fontSize = "16px";
        document.getElementById("login_sucess1").textContent = "Login/Register";
        document.getElementById("signout").style.display = "none";
}

// function to showcart
let showcart = () => {
    document.querySelector(".hover_content1").style.display = "block";
}

// function to hidecart
let hidecart = () => {
    document.querySelector(".hover_content1").style.display = "none";
}

// functions for sign-in and regiser page

// function to show login,register div

let div1 = document.querySelector(".signinShow");
let div2 = document.querySelector(".signup");
let h2_1 = document.querySelector("#select_op>h2:nth-child(1)");
let h2_2 = document.querySelector("#select_op>h2:nth-child(2)");

let showLogin = () => {
    div2.style.display = "none";
    h2_2.style.color = "black";
    h2_2.style.borderBottom = "none";

    div1.style.display = "block";
    h2_1.style.color = "#55b8c6";
    h2_1.style.borderBottom = "2px solid #55b8c6";

}

let showRegister = () => {
    div1.style.display = "none";
    h2_1.style.color = "black";
    h2_1.style.borderBottom = "none";

    div2.style.display = "block";
    h2_2.style.color = "#55b8c6";
    h2_2.style.borderBottom = "2px solid #55b8c6";

}


// function for storing userdetail on masai server(register page)

let storedetail = document.getElementById("storedetail");

storedetail.addEventListener("click", postData);

async function postData(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let username = document.getElementById("username1").value;
    let password = document.getElementById("password1").value;

    if(email == "" || number == "" || username == "" || password == ""){
        alert("Please fill all info");
    }
    else{
        let userdetail = {
            email,
            number,
            username,
            password
        }

        userdetail = JSON.stringify(userdetail);

        let url = "https://masai-api-mocker.herokuapp.com/auth/register";

        try{
            let responce = await fetch(url, {
                method: "POST",
                body: userdetail,
                headers: {
                    "Content-Type" : "application/json"
                }
            })

            let res = await responce.json();
            console.log(res);
            if(res.error === true){
                alert(res.message);
            }
            else{
                alert(res.message);
            }
        }
        catch(err){
            console.log(err);
        }
    }
    
}

// function for checking userdetail on masai server (login page)

let checkdetail = document.getElementById("checkdetail");

checkdetail.addEventListener("click", checkData);

async function checkData(event){
    event.preventDefault();

    let userData = {
        username : document.getElementById("username2").value,
        password : document.getElementById("password2").value, 
    };

    userData = JSON.stringify(userData);

    try{
        let url = "https://masai-api-mocker.herokuapp.com/auth/login";
        let responce = await fetch(url,{
            method:"POST",
            body:userData,
            headers: {
                "Content-Type" : "application/json"
            }
        })

        let res = await responce.json();
        alert("Login successfully");
        let user = document.getElementById("username2").value;
        getUser(user,res.token);
        document.getElementById("back").style.display = "none";
    }
    catch(err){
        console.log(err);
    }
}

let getUser = async(user,token) => {
    let url = `https://masai-api-mocker.herokuapp.com/user/${user}`;

    try{
        let responce = await fetch(url, {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })

        let data = await responce.json();
        document.getElementById("login_sucess").textContent = data.username;
        document.getElementById("login_sucess").style.fontSize = "12px";
        document.getElementById("login_sucess1").textContent = `Welcome ${data.username}`;
        document.getElementById("signout").style.display = "block";
    }
    catch(err){
        console.log(err);
    }
}

// function to close log and register tab

let close = document.getElementById("closetab");

close.addEventListener("click", ()=>{
    document.getElementById("back").style.display = "none";
})

// function to append cart data to navbar

// a();

// function a(){
//     let arr = [];
//     let cart = {
//         image:"https://images.shopclues.com/images1/thumbnails/84619/320/320/136963262-84619914-1575020674.jpg",
//         name: "Sunshopping Tan Men Leatherite Pin-Hole Buckle Belt",
//         price: 159,
//         qty: 2,
//     };

//     arr.push(cart);    
//     localStorage.setItem("cartData", JSON.stringify(arr));
// }


let appendCartdata = () => {

    
    let location = document.querySelector(".listItem");
    let quantity = document.querySelector(".nItems");
    let showonNav = document.getElementById("qty");
    
    let data = JSON.parse(localStorage.getItem("cartData"));

    let x = "";

    data.forEach(({name,image,price,qty},index)=>{
        x += `<div>
                <img src="${image}" alt="">
            </div>
            <div id="rs">
                <p>${name}</p>
                <p>Rs.${price}</p>
                <p>Qty:${qty}</p>
            </div>`

        location.innerHTML = x;
        quantity.innerHTML = `<p>Your Shopping Cart (${index+1} Items)</p>`;
        showonNav.style.display = "block";
        showonNav.textContent = index+1;
    })
    
 
    
}
appendCartdata();
