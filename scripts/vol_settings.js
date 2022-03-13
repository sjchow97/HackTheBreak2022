var slider = new Slider("location");
slider.on("slide", function(sliderValue) {
    document.getElementById("sliderVal").textContent = sliderValue;
});

console.log(slider);

function editUserInfo() {

}