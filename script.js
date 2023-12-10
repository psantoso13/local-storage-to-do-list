let myList = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ul-el")

let ListFromLocalStorage = JSON.parse( localStorage.getItem("myList") )

if (ListFromLocalStorage) {
    myList = ListFromLocalStorage
    renderList()
}

inputBtn.addEventListener("click", function() {
    // Trim the input value to remove leading and trailing whitespace
    const inputValue = inputEl.value.trim();

    // Check if the trimmed input value is not empty before adding it to the list
    if (inputValue !== "") {
        myList.push(inputValue);
        inputEl.value = "";
        localStorage.setItem("myList", JSON.stringify(myList));
        renderList();
    } else {navigator.vibrate(200)}
});

clearBtn.addEventListener("click", function() {
    
    navigator.vibrate(300)
    
    const konfirmasi = confirm('Hapus List?')

    if(konfirmasi === true){
        // Clear the myList array and update local storage
    myList = [];
    localStorage.removeItem("myList");

    // Render an empty list
    renderList();
    }  else {}
    
});


function renderList() {
    let listItems = "";
    for (let i = 0; i < myList.length; i++) {
        // Add a delete button with a data attribute to identify the item index
        listItems += `<li class="contentLi" ><span class="spanLi" onclick="toggleStrikethrough(${i})"> ${myList[i]} </span><image src="images/recycle.png" class="recyclePic" onclick="deleteList(${i})"></li>`;
    }
    ulEl.innerHTML = listItems;
}

// Function to toggle strikethrough style of a list by index
function toggleStrikethrough(index) {
    const listItem = ulEl.childNodes[index];
    const currentStyle = listItem.style.textDecoration || "none";

    // Toggle between strikethrough and none styles
    listItem.style.textDecoration = currentStyle === "line-through" ? "none" : "line-through";
}


// Function to delete a list by index
function deleteList(index) {
    myList.splice(index, 1); // Remove the item from the array
    localStorage.setItem("myList", JSON.stringify(myList)); // Update localStorage
    renderList(); // Re-render the list
}

// function read() {
//     const messageRead = `Klik pada Listed Text untuk memberi "Strikethrough" (coret).
// Klik pada gambar Recycle Bin untuk menghapus dari List`;
// alert(messageRead);
// }

// function ask() {
//     const messageAsk = `katakita Production @2023.
// Kontak kami di +6285859595945.`;
// alert(messageAsk);
// }