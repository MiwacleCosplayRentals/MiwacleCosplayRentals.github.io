// Stores Data
let data = []; // None Filtered Data
let displayData = []; // Filtered Data According to Select

// For Modals
const modalItemName = document.getElementById("modalItemName");
const modalItemPrice = document.getElementById("modalItemPrice");
const modalItemDesc = document.getElementById("modalItemDesc");
const modalImage = document.getElementById("modalImage");

// Form for filtering
const form = document.getElementById("filters");
const filter = form.filter;
const maleCheckbox = form.Male;
const femaleCheckbox = form.Female;

// Item Containers
const itemContainers = document.getElementById("item-container");

// For Promo Images (Soon to be Carousel)
const promoImg =
  document.getElementById("promoFrame").parentElement.children[1];
const promoImgFileName = "MIWACLE-PROMO.png"; // ENTER FILENAME FOR PROMO IMG
promoImg.setAttribute("src", "images/" + promoImgFileName);

// For Order Button
const orderButton = document.getElementById("order");
const orderURL = "https://web.facebook.com/profile.php?id=61555627856739  "; // ENTER ORDER URL
orderButton.setAttribute("href", orderURL);

// Use to hold objects
const items = itemContainers.children;

form.filter.addEventListener("change", setFilters);

form.Female.addEventListener("change", setFilters);

form.Male.addEventListener("change", setFilters);

function optionFilter() {
  displayData = data.filter(function (data) {
    console.log("Filtering: " + filter.value);
    if (filter.value == "All") return data;
    if (data.tags.includes("Anime") && filter.value == "Anime") return data;
    if (data.tags.includes("Games") && filter.value == "Games") return data;
    if (data.tags.includes("Misc") && filter.value == "Misc") return data;
  });
}

function checkboxFiltering() {
  for (const item of data) {
    item.element.style.display = "none";

    if (
      maleCheckbox.checked &&
      displayData.includes(item) &&
      item.tags.includes("Male")
    )
      item.element.style.display = "block";
    if (
      femaleCheckbox.checked &&
      displayData.includes(item) &&
      item.tags.includes("Female")
    )
      item.element.style.display = "block";
  }
}

function setFilters() {
  optionFilter();
  checkboxFiltering();
}

function createNewItem(itemName, price, tags, desc) {
  console.log(`Item name:${itemName}, Price:${price}, Tags:${tags}`);

  // create element div for all other elements
  const itemContainer = document.createElement("div");
  const itemContainerStyle = itemContainer.classList;
  itemContainerStyle.add("item");
  itemContainerStyle.add("flex-column");
  itemContainerStyle.add("align-items-center");
  itemContainerStyle.add("text-center");
  itemContainerStyle.add("m-2");
  itemContainerStyle.add("flex-wrap");
  itemContainer.setAttribute("tags", tags);
  itemContainer.setAttribute("data-bs-toggle", "modal");
  itemContainer.setAttribute("data-bs-target", "#itemModal");

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

  // Create Object with Item Data
  const item = {
    name: itemName,
    price: price,
    tags: tags,
    element: itemContainer,
  };

  // EventListener to Change Name, Price, Description, and Image in Modal
  itemContainer.addEventListener("click", () => {
    modalImage.setAttribute("src", "images/item-image/" + itemName + ".jpg");
    modalItemName.innerText = itemName;
    modalItemPrice.innerText = price;
    modalItemDesc.innerText = desc;
  });

  // Push/stores object to Data
  data.push(item);

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

createNewItem(
  "2B - Nier Automata",
  300,
  "Female, Games",
  "300 cos, wig + 200 virtuous treaty sword + 200 boots/heels");
createNewItem("Aura - Freiren Beyond Journey's End", 500, "Female, Anime", "500 cos, wig + 200 balance prop + 200 boots");
createNewItem("Autumn Kitsune", 500, "Female, Misc", "500 chinese hanfu only + 200 other cos parts & wig + 100 umbrella & fan");
createNewItem("Battle Bunny Miss Fortune - LoL", 800, "Female, Games", "800 cos, styled wig + 400 guns + 300 boots ");
createNewItem("Black Lobelia - My Dress-Up Darling", 400, "Female, Anime", "400 cos, wig, accessories + 200 boots");
createNewItem("Bomb Devil - Chainsaw Man", 500, "Female, Anime", "500 bomb devil head, apron, cos + 200 boots + 200 reze default");
createNewItem("CC - Code Geass", 500, "Female, Anime", "500 cos, wig + 200 boots");
createNewItem("Cleo de Nile - Monster High", 500, "Female", "500 cos, wig + 200 sandal heels");
createNewItem("Dolia - Honor of Kings", 500, "Female, Games", "500 cos, styled wig + 150 bag + 100 mermaid ears + 150 sandals");
createNewItem("Fern - Freiren Beyond Journey's End", 400, "Female, Anime", "400 cos, wig + 200 staff prop + 200 boots");
createNewItem("Fiery Spirit Diaochan - Honor of Kings", 800, "Female, Games", "800 cos, wig + 200 heels + 200 veil fans");
createNewItem(
  "Freiren - Freiren Beyond Journey's End",
  350,
  "Female, Anime", "350 cos, wig + 200 staff prop + 200 boots"
);
createNewItem("Gwen - LoL", 600, "Female, Games", "600 cos, miku wig (shorter)\n800 cos, gwen wig (longer) + 100 gwen heels (DIY heels) + 250 white maryjane shoes + 400 scissors ");
createNewItem("Howl Black & Bird - Howl's Moving Castle", 400, "Male, Anime", "400 cos, wig, accessories + 400 wings ");
createNewItem("Howl(Blonde) - Howl's Moving Castle", 400, "Male, Anime", "400 cos, wig, accessories");
createNewItem("Jinx - Arcane", 500, "Female, Games", "500 cos, unstyled wig (neoprene top)\n700 cos, unstyled wig (leather top) + 300 upgrade to styled wig + 200 boots + 200 zapper & flamechompers + 100 goggles + 500 fishbones");
createNewItem("Kafka - HSR", 400, "Female, Games", "400 cos, wig + 200 boots + 400 gun props");
createNewItem("Kafka(Dress ver.) - HSR", 600, "Female, Games", "600 cos, wig + 200 heels");
createNewItem("Lute - Hazbin Hotel", 300, "Female, Misc", "300 cos, wig, halo + 200 wings + 100 sword + 200 helmet + 200 boots");
createNewItem("Mai Sakurajima - Bunny Girl Senpai", 200, "Female", "300 cos, mai wig + 200 heels\n250 bunny suit + 200 and above if with different character wig ");
createNewItem("Maomao - Apothecary Diaries", 600, "Female, Anime", "600 cos, wig + 200 footwear");
createNewItem("Nanami Kento - Jujutsu Kaisen", 400, "Male, Anime", "400 cos, wig, accessories + 100 knife prop");
createNewItem("Nazuna Nanakusa - Call of the Night", 300, "Female, Anime", "300 cos, wig, accessories + 200 boots");
createNewItem(
  "Raphtalia - Rising of the Shield Hero",
  400,
  "Female, Anime", "400 cos, wig, accessories + 200 boots + 200 sword"
);
createNewItem("Red Blood Cell - Cells at Work", 200, "Female, Anime", "200 cos, wig, accessories ");
createNewItem("Reina - Tekken 8", 400, "Female, Games", "400 cos, styled wig + 200 boots");
createNewItem("Reze - Chainsaw Man", 300, "Female, Anime", "300 cos, wig,  +  200 boots/heels");
createNewItem("Rizu Kyun - My Dress-Up Darling", 400, "Female, Anime", "400 cos, wig, accessories + 200 boots/heels");
createNewItem("Sage - Valorant", 400, "Female, Games", "400 cos, wig + 200 boots");
createNewItem("Seraphine - LoL", 900, "Female, Games", "900 cos, styled wig + 100 wings + 200 mic + 200 boots/heels");
createNewItem("Spirit Blossom Ahri - Lol", 450, "Female, Games", "450 cos, unstyled wig, ears+ 50 upgraded ears, + 500 ninetails, + 200 single tail + 100 geta + 200 orb");
createNewItem("Ubel - Freiren Beyond Journey's End", 400, "Female, Anime", "400 cos, wig + 200 staff prop + 200 boots");
createNewItem("Xayah - LoL", 900, "Female, Games", "900 cos, styled wig");
createNewItem("Yuta Okkotsu - Jujutsu Kaisen", 500, "Male, Anime", "500 cos, wig, accessories + 200 sword");
createNewItem("Zero Two - Darling in the Franxx", 400, "Female, Anime", "400 cos, wig, accessories + 200 coat/hat/gloves + 200 boots");
createNewItem("Zero Two(Maid) - Darling in the Franxx", 300, "Female, Anime", "300 cos, wig, accessories + 200 heels + 50 petticoat");
