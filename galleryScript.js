let data = [];
let displayData = [];

const itemContainers = document.getElementById("item-container");

// Use to hold objects
const items = itemContainers.children;

document.addEventListener("DOMContentLoaded", function () {
  const itemContainers = document.getElementById("item-container");

  function createNewItem(itemName) {
    console.log(`Item name:${itemName}`);

    // create element div for all other elements
    const itemContainer = document.createElement("div");
    const itemContainerStyle = itemContainer.classList;
    itemContainerStyle.add("item");
    itemContainerStyle.add("flex-column");
    itemContainerStyle.add("align-items-center");
    itemContainerStyle.add("text-center");
    itemContainerStyle.add("m-2");
    itemContainerStyle.add("flex-wrap");

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
    imgFrame.setAttribute("src", "images/PIC_CONTsqr.png");

    // appends elements required inside the item
    itemContainer.appendChild(imgGrid);
    imgGrid.appendChild(imgItem);
    imgGrid.appendChild(imgFrame);

    const item = {
      element: itemContainer,
    };

    data.push(item);

    // appends item to item container
    itemContainers.appendChild(itemContainer);
  }

  createNewItem("2B - Nier Automata");
  createNewItem("Aura - Freiren Beyond Journey's End");
  createNewItem("Autumn Kitsune");
  createNewItem("Battle Bunny Miss Fortune - LoL");
  createNewItem("Black Lobelia - My Dress-Up Darling");
  createNewItem("Bomb Devil - Chainsaw Man");
  createNewItem("CC - Code Geass");
  createNewItem("Cleo de Nile - Monster High");
  createNewItem("Dolia - Honor of Kings");
  createNewItem("Fern - Freiren Beyond Journey's End");
  createNewItem("Fiery Spirit Diaochan - Honor of Kings");
  createNewItem("Freiren - Freiren Beyond Journey's End");
  createNewItem("Gwen - LoL");
  createNewItem("Howl Black & Bird - Howl's Moving Castle");
  createNewItem("Howl(Blonde) - Howl's Moving Castle");
  createNewItem("Jinx - Arcane");
  createNewItem("Kafka - HSR");
  createNewItem("Kafka(Dress ver.) - HSR");
  createNewItem("Lute - Hazbin Hotel");
  createNewItem("Mai Sakurajima - Bunny Girl Senpai");
  createNewItem("Maomao - Apothecary Diaries");
  createNewItem("Nanami Kento - Jujutsu Kaisen");
  createNewItem("Nazuna Nanakusa - Call of the Night");
  createNewItem("Raphtalia - Rising of the Shield Hero");
  createNewItem("Red Blood Cell - Cells at Work");
  createNewItem("Reina - Tekken 8");
  createNewItem("Reze - Chainsaw Man");
  createNewItem("Rizu Kyun - My Dress-Up Darling");
  createNewItem("Sage - Valorant");
  createNewItem("Seraphine - LoL");
  createNewItem("Spirit Blossom Ahri - Lol");
  createNewItem("Ubel - Freiren Beyond Journey's End");
  createNewItem("Xayah - LoL");
  createNewItem("Yuta Okkotsu - Jujutsu Kaisen");
  createNewItem("Zero Two - Darling in the Franxx");
  createNewItem("Zero Two(Maid) - Darling in the Franxx");
});
