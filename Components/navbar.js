

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