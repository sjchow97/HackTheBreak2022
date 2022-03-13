function read_bio() {

    db.collection("volunteer").doc("8vxyU8iC22RPeTIP8VaNah7DZkS2")
        .onSnapshot(function(biography) {
            document.getElementById("volunteer-bio").innerHTML = biography.data().bio;
        })
}

read_bio();