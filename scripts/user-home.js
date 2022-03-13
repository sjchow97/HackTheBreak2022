let link = document.querySelectorAll(".link");

console.log("hello");

for(i=0; i < link.length; i++) {

    link[i].addEventListener("click", (e)=> {

        console.log("hello");
    
        let url = document.location.href;
        console.log(url);
    
        let uid = url.split("?").pop();
        console.log(uid);

        let category = e.currentTarget.innerText

        newUrl = url.replace("user-home.html", "user-page2.html");

        newUrl = newUrl + ":" + category;

        console.log(newUrl);

        document.location.href = newUrl;

    })

}

/*
link[0].addEventListener("click", ()=> {

    console.log("hello");

    let url = document.location.href;
    console.log(url);

    let uid = url.split("?").pop();
    console.log(uid);
})
*/