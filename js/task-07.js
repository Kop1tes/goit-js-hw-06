const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

// text.style.fontSize = input.value+"px";
inputRef.addEventListener('input', event => {
    textRef.style.fontSize = inputRef.value + "px";
});