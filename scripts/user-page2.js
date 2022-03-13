eventList = db.collection("volunteer");
eventList.get()
    .then(userDoc => {
        let template = document.getElementById("namebox");
        let container = document.getElementById("container");

        for (i = 0; i < Number(userDoc.docs.length); i++) {
            let volunteerData = userDoc.docs[i].data();

            let volunteerBar = template.content.cloneNode(true);

            volunteerBar.getElementById("volunteer-name").innerHTML = volunteerData.name;

            container.appendChild(volunteerBar);
        }

        let name = document.querySelectorAll("#volunteer-name");
        console.log(name[0].innerText);

        for(i=0; i < name.length; i++ ) {
            name[i].addEventListener("click", (e) => {
                let url = document.location.href;
                let newUrl = url.replace("user-page2.html", "user-page3.html" );
                newUrl = newUrl + ":" + e.currentTarget.innerText;
                console.log(newUrl);

                document.location.href = newUrl;

            })
        }
        //let name1 = namebox[0].getElementById("volunteer-name");
        //console.log(name1.innerText);

    })
