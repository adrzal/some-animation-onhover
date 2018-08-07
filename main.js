const inwentors = [
    {
        name: "albert",
        year: 1890
    },
    {
        name: "mast",
        year: 1700
    },
    {
        name: "bos",
        year: 2300
    },
    {
        name: "maks",
        year: 1660
    },
    {
        name: "ross",
        year: 1820
    },
    {
        name: "ku",
        year: 1400
    }
];

function year(age) {

    if (age.year < 1750) return true;

}

var sume = inwentors.filter(year);

console.table(sume);


function first(firstName) {

    return firstName.name + "facka";

}

var names = inwentors.map(first);

console.log(names);

// ////////////////////////////////////////////////////////


var donkey = document.getElementsByClassName("thumbnail");

var writed = document.getElementsByTagName("p");

var aft = document.getElementsByClassName("aft");

var img = document.getElementsByClassName("img");

var arr = Array.from(donkey);



arr.forEach(function (el) {
    el.addEventListener("mouseover", show);
    el.addEventListener("mouseout", hide);
})

function show() {
    let number = arr.indexOf(this);

    writed[number].style.top = "10%";
    img[number].style.transform = "scale(1.5)";
    
    aft[number].style.bottom = "-10%";
}

function hide() {
    let number = arr.indexOf(this);

    writed[number].style.top = "-50%";
    img[number].style.transform = "scale(1)";
    
    aft[number].style.bottom = "-50%";
}








