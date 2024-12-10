const form = document.getElementById("filters");
const itemContainers = document.getElementById("item-container");

const promoImg = document.getElementById("frame").parentElement.children[1];
const promoImgFileName = "MIWACLE-PROMO.png"; // ENTER FILENAME FOR PROMO IMG
promoImg.setAttribute("src", "images/" + promoImgFileName);

const orderButton = document.getElementById("order");
const orderURL = "https://www.youtube.com"; // ENTER ORDER URL
orderButton.setAttribute("href", orderURL);

// Use to hold objects
const items = itemContainers.children;

form.filter.addEventListener("change", () => {
  changeVisibility();
});

form.Female.addEventListener("change", () => {
  changeVisibility();
});

form.Male.addEventListener("change", () => {
  changeVisibility();
});

function changeVisibility() {
  for (var item of items) {
    item.style.display = "none";
    if (item.getAttribute("tags").includes("Male") && form.Male.checked) {
      item.style.display = "flex";
    }
    if (item.getAttribute("tags").includes("Female") && form.Female.checked) {
      item.style.display = "flex";
    }
    if (item.getAttribute("tags").includes("Anime") && form.filter.options[form.filter.value]) {
      item.style.display = "flex";
    }
    
  }
}


function changeVisibility(tag) {
  for (var item of items) {
    changeVisibility();
    if (item.getAttribute("tags").includes("Anime") && form.filter.value == "anime") {
      item.style.display = "flex";
    }
    if (item.getAttribute("tags").includes("Games") && form.filter.value == "games") {
      item.style.display = "flex";
    }
    if (item.getAttribute("tags").includes("Misc") && form.filter.value == "misc") {
      item.style.display = "flex";
    }
  }
}

function createNewItem(itemName, price, tags) {
  console.log(`Item name:${itemName}, Price:${price}, Tags:${tags}`);

  // create element div for all other elements
  const itemContainer = document.createElement("div");
  const itemContainerStyle = itemContainer.classList;
  itemContainerStyle.add("item");
  itemContainerStyle.add("flex-column");
  itemContainerStyle.add("text-center");
  itemContainerStyle.add("m-2");
  itemContainer.setAttribute("tags", tags);

  // create element div for holding both img
  const imgGrid = document.createElement("div");
  const imgGridStyle = imgGrid.classList;
  imgGridStyle.add("image-grid");

  // create element img for item image
  const imgItem = document.createElement("img");
  const imgItemStyle = imgItem.classList;
  imgItemStyle.add("product");
  imgItem.setAttribute("src", "images/item-image/" + itemName + ".jpg");

  // create element img for frame
  const imgFrame = document.createElement("img");
  const imgFrameClass = imgFrame.classList;
  imgFrameClass.add("frame");
  imgFrame.setAttribute("src", "images/MIWACLE-ITEM-CONTAINER.png");

  // create element span with price
  const priceSpan = document.createElement("span");
  const priceSpanClass = priceSpan.classList;
  priceSpanClass.add("text-color-yellow");
  priceSpan.innerText = "₱" + price;

  // appends elements required inside the item
  itemContainer.appendChild(imgGrid);
  imgGrid.appendChild(imgItem);
  imgGrid.appendChild(imgFrame);
  itemContainer.innerHTML += itemName + "<br />";
  itemContainer.appendChild(priceSpan);

  // appends item to item container
  itemContainers.appendChild(itemContainer);
}

/*
  CREATES ITEMS WITH THE FORMAT OF:
    - itemName = str
    - price = number
    - tags = strings separated with comma (ex. you want tags for male female cat dog then you write "Male, Female, Cat, Dog") well male and female lang yung coded :clown:
  TAKE NOTE:
    - itemName is the name of the image filename (ex. itemName = plushie; => plushie.png)
    - Ex. createNewItem("Miku Plushie", 200, "Female, Male");
*/

createNewItem("2B - Nier Automata", 645000.9, "Female");
createNewItem("Aura - Freiren Beyond Journey's End", 645000.9, "Female");
createNewItem("Autumn Fox", 645000.9, "Female");
createNewItem("Battle Bunny Miss Fortune - LoL", 645000.9, "Female");
createNewItem("Black Lobelia - My Dress-Up Darling", 645000.9, "Female");
createNewItem("Bomb Devil - Chainsaw Man", 645000.9, "Female");
createNewItem("CC - Code Geass", 645000.9, "Female");
createNewItem("Cleo de Nile - Monster High", 645000.9, "Female");
createNewItem("Diaochan - Honor of Kings", 645000.9, "Female");
createNewItem("Dolia - Honor of Kings", 645000.9, "Female");
createNewItem("Fern - Freiren Beyond Journey's End", 645000.9, "Female");
createNewItem("Freiren - Freiren Beyond Journey's End", 645000.9, "Female, Anime");
createNewItem("Gwen - LoL", 645000.9, "Female");
createNewItem("Howl - Howl's Moving Castle", 645000.9, "Male");
createNewItem("Howl(Blonde) - Howl's Moving Castle", 645000.9, "Male, Anime");
createNewItem("Jinx - Arcane(LoL)", 645000.9, "Female");
createNewItem("Kafka - HSR", 1000.4, "Female");
createNewItem("Kafka(Dress ver.) - HSR", 645000.9, "Female");
createNewItem("Lute - Hazbin Hotel", 645000.9, "Female");
createNewItem("Mai Sakurajima - Bunny Girl Senpai", 645000.9, "Female");
createNewItem("Maomao - Apothecary Diaries", 645000.9, "Female");
createNewItem("Nanami Kento - Jujutsu Kaisen", 645000.9, "Male");
createNewItem("Nazuna Nanakusa - Call of the Night", 645000.9, "Female");
createNewItem("Raphtalia - Rising of the Shield Hero", 645000.9, "Female");
createNewItem("Red Blood Cell - Cells at Work", 645000.9, "Female");
createNewItem("Reina - Tekken 8", 645000.9, "Female");
createNewItem("Reze - Chainsaw Man", 645000.9, "Female");
createNewItem("Rizu Kyun - My Dress-Up Darling", 645000.9, "Female");
createNewItem("Sage - Valorant", 645000.9, "Female");
createNewItem("Seraphine - LoL", 645000.9, "Female");
createNewItem("Spirit Blossom Ahri - Lol", 645000.9, "Female");
createNewItem("Ubel - Freiren Beyond Journey's End", 645000.9, "Female");
createNewItem("Xayah - LoL", 645000.9, "Female");
createNewItem("Yuta Okkotsu - Jujutsu Kaisen", 645000.9, "Male");
createNewItem("Zero Two - Darling in the Franxx", 23.3, "Female");
createNewItem("Zero Two(Maid) - Darling in the Franxx", 99.75, "Female");

form.filter.value = "all";

