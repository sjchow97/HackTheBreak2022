let link = document.querySelectorAll(".link");

console.log("hello");

link[0].addEventListener("click", ()=> {

    console.log("hello");

    let url = document.location.href;
    console.log(url);

    let uid = url.split("?").pop();
    console.log(uid);
})