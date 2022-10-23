interface ToDo {
    text: string,
    isDone: boolean
}

const btn = document.getElementById("btn")!;
const input = document.getElementById("input")! as HTMLInputElement;
const form = document.querySelector("form")!;
const ul = document.getElementById("list")!;

const readLocalStorage = (): ToDo[] => {
    const itemsText = localStorage.getItem("todos");
    if (itemsText === null) {
        return [];
    }
    return JSON.parse(itemsText);
};
const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(items));
};

const createToDo = (item: ToDo) => {
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

const items: ToDo[] = readLocalStorage();
items.forEach(createToDo);

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (input.value === "")
        return;

    const newItem: ToDo = {
        text: input.value,
        isDone: false
    }
    createToDo(newItem);
    items.push(newItem);

    saveLocalStorage();

    input.value = "";
};

form.addEventListener("submit", handleSubmit);
