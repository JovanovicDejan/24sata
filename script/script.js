var menu_list = document.getElementById("hidden_menu");
var menu = document.getElementById("menu");
var is_on = true;

function show_elements(){
    menu_list.style.flexDirection = "column";
    if(menu.style.display = "none" && is_on == true){
        menu.style.display = "flex"
        is_on = false
        console.log("HELLO")
    }else if(menu.style.display = "flex" && is_on == false){
        menu.style.display = "none"
        console.log("NOOO")
        is_on = true
    }else{
        menu.style.display = "flex"

    }
}