const btn = document.getElementById("btn")!;
const input = document.getElementById("input")! as HTMLInputElement;
const form = document.querySelector("form")!;
const ul = document.getElementById("list")!;

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (input.value === "")
        return; 
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newLi.append(newCheckbox);
    newLi.append(newTodoText);
    ul.append(newLi);
    input.value = "";
};

form.addEventListener("submit", handleSubmit);
