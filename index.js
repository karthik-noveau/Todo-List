const addButtonClicked = () => {
    const box = document.querySelector("#windowBoxContainer").classList;
    box.add("popupWindowContainerBoxBlock")
    box.remove("popupWindowContainerBox")
    valueParent1Text = ''
    valueParent2Text = ''
    valueParent3Text = ''
    valueParent4Text = ''
    document.querySelector(".name1").value = ""
    document.querySelector(".task1").value = ""
    document.querySelector(".date1").value = ""
    document.querySelector(".status1").value = ""
}

const buttonClosed = () => {
    const box = document.querySelector("#windowBoxContainer").classList;
    box.add("popupWindowContainerBox")
    box.remove("popupWindowContainerBoxBlock")
}
const buttonClosedOne = () => {
    const box = document.querySelector("#windowBoxContainerOne").classList;
    box.add("popupWindowContainerBoxOne")
    box.remove("popupWindowContainerBoxOneBlock")
    valueParent1Text = ''
    valueParent2Text = ''
    valueParent3Text = ''
    valueParent4Text = ''
    document.querySelector(".name1").value = ""
    document.querySelector(".task1").value = ""
    document.querySelector(".date1").value = ""
    document.querySelector(".status1").value = ""
}

const add = (event) => {

    event.preventDefault();
    let name = document.querySelector(".name").value;
    let task = document.querySelector(".task").value;
    let date = document.querySelector(".date").value;
    let status = document.querySelector(".status").value;
    status = status.toUpperCase();

    let trNode = document.createElement("tr")

    let tdNode1 = document.createElement("td")
    tdNode1Text = document.createTextNode(name)
    tdNode1.appendChild(tdNode1Text)
    trNode.appendChild(tdNode1)

    let tdNode2 = document.createElement("td")
    tdNode2Text = document.createTextNode(task)
    tdNode2.appendChild(tdNode2Text)
    trNode.appendChild(tdNode2)

    let tdNode3 = document.createElement("td")
    tdNode3Text = document.createTextNode(date)
    tdNode3.appendChild(tdNode3Text)
    trNode.appendChild(tdNode3)

    let tdNode4 = document.createElement("td")
    let tdNode4Div = document.createElement("div")
    if (status == "completed".toUpperCase()) {
        tdNode4Div.classList = "completed"
        tdNode4Div.setAttribute("selected", "selectd")
    }
    if (status == "not started".toUpperCase()) {
        tdNode4Div.classList = "notCompleted"
        tdNode4Div.setAttribute("selected", "selectd")
         
    }
    if (status == "in-progress".toUpperCase()) {
        tdNode4Div.classList = "inProgress"
        tdNode4Div.setAttribute("selected", "selectd")
        
    }

    let tdNode4DivValue = document.createTextNode(status)
    tdNode4Div.appendChild(tdNode4DivValue)
    tdNode4.appendChild(tdNode4Div)
    trNode.appendChild(tdNode4)

    let tdNode5 = document.createElement("td")

    let tdNode5Span1 = document.createElement("span")
    tdNode5Span1.classList = "material-symbols-outlined";
    tdNode5Span1.id = "editIcon";
    tdNode5Span1.setAttribute("onClick", "update(event)")
    let tdNode5Span1Text = document.createTextNode("border_color")
    tdNode5Span1.appendChild(tdNode5Span1Text)

    let tdNode5Span2 = document.createElement("span")
    tdNode5Span2.classList = "material-symbols-outlined";
    tdNode5Span2.id = "delIcon";
    tdNode5Span2.setAttribute("onClick", "deleted(event)")
    let tdNode5Span2Text = document.createTextNode("delete")
    tdNode5Span2.appendChild(tdNode5Span2Text)


    tdNode5.appendChild(tdNode5Span1)
    tdNode5.appendChild(tdNode5Span2)
    trNode.appendChild(tdNode5)

    document.querySelector(".tableContainer").appendChild(trNode)
    buttonClosed()
    document.querySelector(".name").value = ""
    document.querySelector(".task").value = ""
    document.querySelector(".date").value = ""
    document.querySelector(".status").value = ""
}




var valueParent1Text = ''
var valueParent2Text = ''
var valueParent3Text = ''
var valueParent4Text = ''
const update = (event) => {

    const valueParent1 = event.currentTarget.parentNode.parentNode
    valueParent1Text = valueParent1.children[0]
    const valueParent2 = event.currentTarget.parentNode.parentNode
    valueParent2Text = valueParent2.children[1]
    const valueParent3 = event.currentTarget.parentNode.parentNode
    valueParent3Text = valueParent3.children[2]
    const valueParent4 = event.currentTarget.parentNode.parentNode
    valueParent4Text = valueParent4.children[3]


    document.querySelector(".name1").value = valueParent1Text.innerHTML
    document.querySelector(".task1").value = valueParent2Text.innerHTML
    document.querySelector(".date1").value = valueParent3Text.innerHTML


    console.log(valueParent4Text.children[0])
    const box = document.querySelector("#windowBoxContainerOne").classList;
    box.add("popupWindowContainerBoxOneBlock")
    box.remove("popupWindowContainerBoxOne")

}

const updateData = (event) => {
    event.preventDefault()
    let name1 = document.querySelector(".name1").value;
    let task1 = document.querySelector(".task1").value;
    let date1 = document.querySelector(".date1").value;
    let status1 = document.querySelector(".status1").value;
    status1 = status1.toUpperCase();


    valueParent1Text.innerHTML = name1
    valueParent2Text.innerHTML = task1
    valueParent3Text.innerHTML = date1
    if (status1 == "NOT STARTED") {
        valueParent4Text.children[0].removeAttribute("class")
        valueParent4Text.children[0].classList.add("notCompleted")
        valueParent4Text.children[0].innerHTML = status1
    }
    if (status1 == "COMPLETED") {
        valueParent4Text.children[0].removeAttribute("class")
        valueParent4Text.children[0].classList.add("completed")
        valueParent4Text.children[0].innerHTML = status1
    }
    if (status1 == "IN-PROGRESS") {
        valueParent4Text.children[0].removeAttribute("class")
        valueParent4Text.children[0].classList.add("inProgress")
        valueParent4Text.children[0].innerHTML = status1
    }



    buttonClosedOne()
}

const deleted = (event) => {
    alert("Are sure to delete")
    event.currentTarget.parentNode.parentNode.remove()

}
