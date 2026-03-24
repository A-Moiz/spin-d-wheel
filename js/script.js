let items = [];
let generatedItem = "";
let currentGeneratedIndex = -1;
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const appearanceBtn = document.getElementById("appearance-btn");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const itemsList = document.getElementById("items-list");
const itemsTitle = document.getElementById("items-title");
const generateBtn = document.getElementById("generate-btn");
const lettersBtn = document.getElementById("letters-btn");
const numbersBtn = document.getElementById("numbers-btn");

const modalOverlay = document.getElementById("modal-overlay");
const modalItemText = document.getElementById("modal-generated-item");
const modalRemoveBtn = document.getElementById("modal-remove-btn");
const modalAgainBtn = document.getElementById("modal-again-btn");
const modalCloseBtn = document.getElementById("modal-close-btn");

appearanceBtn.addEventListener("click", changeAppearance);
addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearItems);
generateBtn.addEventListener("click", generateRandomItem);
itemsTitle.textContent = `Items (${items.length})`;
lettersBtn.addEventListener("click", autofillLetters);
numbersBtn.addEventListener("click", autofillNumbers);

// Change website appearance
function changeAppearance() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    appearanceBtn.src = "./assets/moon-icon.png";
  } else {
    appearanceBtn.src = "./assets/sun-icon.png";
  }
}

// Add item to the list
function addItem(event) {
  event.preventDefault();
  const input = document.getElementById("text-input");
  const item = input.value.trim();

  if (items.includes(item)) {
    alert("This item already exists in the list.");
    return;
  } else {
    if (item === "") {
      alert("Please enter a value to add to the list.");
      return;
    } else {
      items.push(item);
      input.value = "";
      renderItems();
    }
  }
}

// Rendering items
function renderItems() {
  itemsList.innerHTML = "";
  itemsTitle.textContent = `Items (${items.length})`;

  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "list-item";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      deleteItem(index);
    });

    li.appendChild(deleteBtn);
    itemsList.appendChild(li);
  });
}

// Clear all items from the list
function clearItems() {
  items = [];
  renderItems();
  result.textContent = `Result `;
}

// Autofill with letters
function autofillLetters() {
  for (let i = 0; i < letters.length; i++) {
    if (items.includes(letters[i])) {
      alert("This item already exists in the list.");
      return;
    } else {
      items.push(letters[i]);
    }
  }
  renderItems();
}

// Autofill with numbers
function autofillNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    if (items.includes(numbers[i])) {
      alert("This item already exists in the list.");
      return;
    } else {
      items.push(numbers[i]);
    }
  }
  renderItems();
}

// Generate random item from list
function generateRandomItem() {
  if (items.length < 2) {
    alert("Please add at least 2 items.");
    return;
  }

  currentGeneratedIndex = Math.floor(Math.random() * items.length);
  generatedItem = items[currentGeneratedIndex];

  modalItemText.textContent = generatedItem;
  modalOverlay.classList.add("active");
}

// Button: Remove from list
modalRemoveBtn.addEventListener("click", () => {
  items.splice(currentGeneratedIndex, 1);
  renderItems();
  modalOverlay.classList.remove("active");
  result.textContent = "Result";
});

// Button: Generate again
modalAgainBtn.addEventListener("click", generateRandomItem);

// Button: Add more items
modalCloseBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

// Delete item from the list
function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}
