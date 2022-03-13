// function displayStory(collection){
//     let storyTemplate = document.getElementById("taskStoryTemplate");

//     db.collection(collection).get()
//         .then(snap => {
            
//             snap.forEach(doc => {
//                 var user = doc.data().user;
//                 var help_date = doc.data().help_date; //need service date in our database
//                 var story = doc.data().story; 

//                 let newStory = taskStory.content.cloneNode(true);
//                 var id = doc.data().id; //need ids from the users

//                 newStory.querySelector('.senior_name').innerHTML = user ;
//                 newStory.querySelector('.date').innerHTML = help_date; //need service date in our database, called help_date for now
//                 newStory.querySelector('.accordion-body').innerHTML = story; //need the stories in the database

//                 document.getElementById(collection + "-goes-here").appendChild(newStory);
                

//                 //want to just show the latest 3 stories
//             })
//         })
// }
// displayStory(user);

let goSettingsButton = document.getElementById("go-to-settings");

goSettingsButton.addEventListener("click", () => {
    let url = document.location.href;
    console.log(url);

    let uid = url.split("?").pop();
    console.log(uid);

    newUrl = url.replace("volunteer-home.html?" + uid, "volunteer-settings.html?" + uid);
    console.log(newUrl);

    document.location.href = newUrl;

})