
let switchToggle = document.getElementById("flexSwitchCheckDefault");

switchToggle.addEventListener("click", (e)=> {

    console.log(switchToggle.checked);
})

function changeAvailabilityState(){
    var availabilityState = switchToggle.checked;
    
    if (availabilityState != null){
        document.collection("volunteer").doc(user.uid).set({
            availability: availabilityState
        })
    }

}

changeAvailabilityState();