let items = [];
let generatedItem = "";
const appearanceBtn = document.getElementById("appearance-btn");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const itemsList = document.getElementById("items-list");
const itemsTitle = document.getElementById("items-title");
const result = document.getElementById("result");
const generateBtn = document.getElementById("generate-btn");

appearanceBtn.addEventListener("click", changeAppearance);
addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearItems);
generateBtn.addEventListener("click", generateRandomItem);
itemsTitle.textContent = `Items (${items.length})`;

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
    items.push(item);
    input.value = "";
    renderItems();
  }
}

// Rendering items
function renderItems() {
  itemsList.innerHTML = "";
  itemsTitle.textContent = `Items (${items.length})`;

  // create <li> for each item in items
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemsList.appendChild(li);
  });
}

// Clear all items from the list
function clearItems() {
  items = [];
  renderItems();
  result.textContent = `Result `;
}

// Generate random item from the list
function generateRandomItem() {
  if (items.length === 0) {
    alert("Please add some items to the list first.");
    return;
  }
  generatedItem = items[Math.floor(Math.random() * items.length)];
  result.textContent = `Result: ${generatedItem}`;
}
