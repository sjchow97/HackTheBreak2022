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
        //let name1 = namebox[0].getElementById("volunteer-name");
        //console.log(name1.innerText);

    })
