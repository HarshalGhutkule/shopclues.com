
function mouseoverNavigation(ele){
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "block";
}

function mouseoutNavigation(ele){
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "none";
}