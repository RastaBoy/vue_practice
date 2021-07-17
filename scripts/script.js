// Client form

function showClientForm(elem) {
    console.log(elem.parentNode.getElementsByClassName("menu_item_title"));
    elem.parentNode.getElementsByClassName("menu_item_title")[0].classList.toggle("active");
    elem.parentNode.getElementsByClassName("menu_item_content")[0].classList.toggle("active");
}


function showModalWindow() {
    let modal = document.getElementById("modal");

    if(modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "";
    }
}