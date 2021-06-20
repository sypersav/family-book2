var images = ["father.jfif",
    "big brother.jfif",
    "little brother.jfif",
    "mother.jfif"
];
var text = [
    "this is my father",
    "this is me",
    "this is my little brother",
    "this is my mother"
]
var i = 0;

function nextslide() {
    if (i == 4) {
        i = 0;
    }
    document.getElementById("imgo").src = images[i];

    document.getElementById("texto").innerHTML = text[i];

    i++;
}