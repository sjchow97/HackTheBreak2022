
let availSwitch = document.getElementById("availability-switch");
let UID = document.location.href.split("?").pop();

availSwitch.addEventListener("click", ()=> {

    db.collection("volunteer").doc(UID).update({
		availability: availSwitch.checked,

	})

    if(availSwitch.checked) {
        alert("your availability has been switched on.");
    } else {
        alert("your availability has been switched off.");
    }


})

/*
function changeAvailabilityState(){
    var availabilityState = switchToggle.checked;
    
    if (availabilityState != null){
        document.collection("volunteer").doc(user.uid).set({
            availability: availabilityState
        })
    }

}

changeAvailabilityState();
*/