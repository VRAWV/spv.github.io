function auth(){
    var username=document.getElementById("text").value;
    var password=document.getElementById("password").value;
    if(username == "spv" && password == "2023")
    {
        window.location.assign("home.html");
        alert("Login Successfully!");
        return true;
    }
    else
    {
        alert("Invalid Information");
        return false;
    }

}


// const input = document.querySelectionAll('input[type="text"], unput[type="password"]');
// input.forEach((element) => {
//     element.addEventListener("mouseenter", () =>
//     {
//         element.classList.add("input-box-style");   
//     });
// })

// input.forEach((element) => {
//     element.addEventListener("mouseout", () =>
//     {
//         element.classList.remove("input-box-style");   
//     });
// })

