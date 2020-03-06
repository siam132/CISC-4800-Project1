let button = document.getElementsByTagName("button");
let posts = document.getElementsByClassName("py-4");
let cart = document.getElementById("item-count");
let item_count = 0;
let load_text = document.getElementById("loading-text");
let i = 0;

function Hover(id) {
  button[id].style.backgroundColor = "burlywood";
  button[id].innerText = "💸Add to cart💰";
}

function UnHover(id) {
  button[id].style.backgroundColor = "white";
  button[id].innerText = "Add to cart";
}

function Bought(id) {
  posts[id].style.display = "none";
  item_count = item_count + 1;
  cart.innerText = `${item_count}`;
  cart.style.borderColor = "red";
}

function Build() {
  if (item_count === 0) {
    load_text.innerText = `No items were selected 😦  `;
  } else {
    if (item_count === 1) {
      load_text.innerText = `Building order... 🔥 \n ${item_count} Item `;
    } else
      load_text.innerHTML = `Building order... 🔥 \n ${item_count} Items `;

    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, Math.floor(Math.random() * Math.floor(80)));
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
        if (width == 100) Done();
      }
    }
  }
}

function Done() {
  load_text.innerText = "Compatibility Check: Done ✔";
}
