let counter = document.getElementById("count")
let entries = document.getElementById("entries")
let count = 0;
let add = () => (count++, counter.innerText = count);
let subtract = () => (count--, counter.innerText = count);
let save = () => (counter.innerText = 0, entries.textContent += `${count}, `, count = 0);