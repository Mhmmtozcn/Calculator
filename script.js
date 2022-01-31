

const input = document.querySelector("#input");
const btns = document.querySelector(".container-body").children
const clean = document.getElementById("clean");
const equals = document.getElementById("esittir");

for (let i = 0; i < btns.length; i++) {
    if (i != 12 && i != 14) {
        const element = btns[i];
        element.addEventListener("click", function () {
            input.value += btns[i].value
        })
    }
}

equals.addEventListener("click", function(){
    input.value = eval(input.value)
})

clean.addEventListener("click", function () {
    input.value = " "
})



