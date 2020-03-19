const addField = document.getElementById('addingTodoFeild');
const ulTag = document.getElementById('listOfItems');
let noOfItemsLeft = document.getElementById('items');
let allItems = document.getElementById('all');
let footer = document.getElementById('footer');
let displayActiveList = document.getElementById('active');
let displayCompletedList = document.getElementById('completed');
let clearCompletedList = document.getElementById('clearCompleted');
footer.style.display = "none";
clearCompletedList.style.display = "none";
let restOfItems = 0;
let completedList = 0;
addField.onchange = (event) => {
    if (event.target.value.trim().length === 0) {
        alert("Type something");
    }
    else {
        footer.style.display = "flex";
        restOfItems += 1;
        let createliTag = document.createElement("li");
        let createCheckBox = document.createElement("input");
        let createUserInputText = document.createElement("input");
        let createSpanForDeleteMark = document.createElement("span");
        createCheckBox.type = "checkbox";
        createCheckBox.className = 'check-box';
        createUserInputText.className = "user-input-tag";
        createUserInputText.type = "input";
        createUserInputText.value = event.target.value.trim();
        createSpanForDeleteMark.style.color = "red";
        createSpanForDeleteMark.innerHTML = "X";

        createliTag.appendChild(createCheckBox);
        createliTag.appendChild(createUserInputText);
        createliTag.appendChild(createSpanForDeleteMark);
        ulTag.appendChild(createliTag);
        addField.value = "";
        noOfItemsLeft.textContent = `${restOfItems} itemsLeft`;
        deleteList(createSpanForDeleteMark, createliTag, createCheckBox);
        selectCheckBox(createCheckBox, createUserInputText);
        editTheText(createUserInputText);
    }
};

function deleteList(createSpanForDeleteMark, createliTag, createCheckBox) {
    createSpanForDeleteMark.onclick = () => {
        createliTag.remove();
        if (!createCheckBox.checked) {
            restOfItems -= 1;
        }
        if (createCheckBox.checked) {
            completedList -= 1;
        }
        if (completedList === 0) {
            clearCompletedList.style.display = "none";
        }
        if (restOfItems === 0 && completedList === 0) {
            footer.style.display = "none";
        }
        noOfItemsLeft.textContent = `${restOfItems} itemsLeft`;
    };
}

function selectCheckBox(createCheckBox, createUserInputText) {
    createCheckBox.onclick = () => {
        if (createCheckBox.checked) {
            createUserInputText.style.textDecoration = "line-through";
            createUserInputText.style.color = "#d9d9d9";
            createUserInputText.style.border = "#2b833c";
            restOfItems -= 1;
            completedList += 1;
            noOfItemsLeft.textContent = `${restOfItems} itemsLeft`;
        }
        else {
            completedList -= 1;
            createUserInputText.style.textDecoration = "none";
            createUserInputText.style.color = "#4d4d4d";
            restOfItems += 1;
            noOfItemsLeft.textContent = `${restOfItems} itemsLeft`;
        }
        createUserInputText.style.fontSize = "24px";
        if (completedList === 0)
            clearCompletedList.style.display = "none";
        else
            clearCompletedList.style.display = "flex";

    };
}

function editTheText(createUserInputText) {
    createUserInputText.onfocus = () => {
        createUserInputText.style.border = "1px solid #e1e1e1";
        createUserInputText.style.borderRadius = "2px solid #e1e1e1";
    };
    createUserInputText.onblur = () => {
        createUserInputText.style.border = "none";
        createUserInputText.style.borderRadius = "none";
    };
}

allItems.onclick = () => {
    let listOfLiTags = ulTag.children;
    let listOfLiTagsArray = [...listOfLiTags];
    listOfLiTagsArray.forEach((item) => {
        item.style.display = "flex";
    });
    allItems.style.border = "1px solid rgba(175,47,47,0.2)";
    displayCompletedList.style.border = "none";
    displayActiveList.style.border = "none";
};

displayActiveList.onclick = () => {
    let listOfLiTags = ulTag.children;
    let listOfLiTagsArray = [...listOfLiTags];
    listOfLiTagsArray.forEach((item) => {
        if (item.children[0].checked === true)
            item.style.display = "none";
        else
            item.style.display = "flex";
    });
    allItems.style.border = "none";
    displayCompletedList.style.border = "none";
    displayActiveList.style.border = "1px solid rgba(175,47,47,0.2)";
};

displayCompletedList.onclick = () => {
    let listOfLiTags = ulTag.children;
    let listOfLiTagsArray = [...listOfLiTags];
    listOfLiTagsArray.forEach((item) => {
        if (item.children[0].checked === true) {
            item.style.display = "flex";
        }
        else
            item.style.display = "none";
    });
    allItems.style.border = "none";
    displayActiveList.style.border = "none";
    displayCompletedList.style.border = "1px solid rgba(175,47,47,0.2)";
};
clearCompletedList.onclick = () => {
    let listOfLiTags = ulTag.children;
    let listOfLiTagsArray = [...listOfLiTags];
    listOfLiTagsArray.forEach((item) => {
        if (item.children[0].checked === true) {
            item.remove();
            completedList = 0;
        }
    });
    clearCompletedList.style.display = "none";
    if (restOfItems === 0) {
        footer.style.display = "none";
    }
    //clearCompletedList.style.borderBottom = "1px solid black";
};
