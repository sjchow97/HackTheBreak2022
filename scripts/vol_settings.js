

let cbComputers = document.getElementById("ComputerCheckBox");
let cbGroceries = document.getElementById("GroceriesCheckBox");
let cbAppliances = document.getElementById("AppliancesCheckBox");
let cbAutomotive = document.getElementById("AutomotiveCheckBox");
let cbGettingSomewhere = document.getElementById("GettingSomewhereCheckBox");
let cbOther = document.getElementById("OtherCheckBox");
let cbEnglish = document.getElementById("EnglishCheckBox");
let cbMandarin = document.getElementById("MandarinCheckBox");
let cbKorean = document.getElementById("KoreanCheckBox");
let cbTagalog = document.getElementById("TagalogCheckBox");
let cbPunjabi = document.getElementById("PunjabiCheckBox");
let uid = document.location.href.split("?").pop();

console.log("this is the uid: " + uid);

function editUserInfo() {
	console.log(cbComputers.checked);

	db.collection("volunteer").doc(uid).update({
		computers: cbComputers.checked,
		groceries: cbGroceries.checked,
		appliances: cbAppliances.checked,
		automotive: cbAutomotive.checked,
		gettingSomewhere: cbGettingSomewhere.checked,
		other: cbOther.checked,
		speaksEnglish: cbEnglish.checked,
		speaksMandarin: cbMandarin.checked,
		speaksKorean: cbKorean.checked,
		speaksTagalog: cbTagalog.checked,
		speaksPunjabi: cbPunjabi.checked,

	})
	alert("Your settings have been updated.");
}

/*
var slider = new Slider("location");
slider.on("slide", function(sliderValue) {
    document.getElementById("sliderVal").textContent = sliderValue;
});
<<<<<<< HEAD
*/
=======

console.log(slider);

function editUserInfo() {

}
>>>>>>> 108694091fd04696e227f029916973de814d3138
