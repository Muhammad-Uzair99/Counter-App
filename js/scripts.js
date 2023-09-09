const counter = document.getElementById("count")
const entries = document.getElementById("entries")
const entriesArr = [];

let count = 0;
const add = () => (count++, counter.innerText = count);
const subtract = () => (count--, counter.innerText = count);
const save = () => (counter.innerText = 0, entriesArr.push(count), entries.textContent = `Previous Entries: ${entriesArr.join(", ")}`, count = 0);

const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const saveBtn = document.querySelector("#save-btn");

plusBtn.addEventListener("click", () => add());
minusBtn.addEventListener("click", () => subtract());
saveBtn.addEventListener("click", () => save());
