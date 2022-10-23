"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const form = document.querySelector("form");
const ul = document.getElementById("list");
const readLocalStorage = () => {
    const itemsText = localStorage.getItem("todos");
    if (itemsText === null) {
        return [];
    }
    return JSON.parse(itemsText);
};
const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(items));
};
const createToDo = (item) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.isDone;
    checkbox.addEventListener("change", () => {
        item.isDone = checkbox.checked;
        saveLocalStorage();
    });
    listItem.append(checkbox);
    listItem.append(item.text);
    ul.append(listItem);
};
const items = readLocalStorage();
items.forEach(createToDo);
const handleSubmit = (e) => {
    e.preventDefault();
    if (input.value === "")
        return;
    const newItem = {
        text: input.value,
        isDone: false
    };
    createToDo(newItem);
    items.push(newItem);
    saveLocalStorage();
    input.value = "";
};
form.addEventListener("submit", handleSubmit);
