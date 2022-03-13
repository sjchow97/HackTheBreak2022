function insertName() {
        firebase.auth().onAuthStateChanged(volunteer => {
            // Check if user is signed in:
            if (volunteer) {                                                                 
                // Do something for the current logged-in user here: 
                console.log(volunteer.uid);
                //go to the correct user document by referencing to the user uid
                currentUser = db.collection("volunteer").doc(user.uid);
                console.log(user.uid);
                //get the document for current user.
                currentUser.get()
			          .then(volunteerDoc => {
                   var user_Name = volunteerDoc.data().name;
                   console.log(user_Name);
                   document.getElementById("name-goes-here").innerText = user_Name;   
                })
            } else {
                // No user is signed in.
            }
        });
    }
insertName();

