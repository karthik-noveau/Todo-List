let taskText = document.querySelector("#task")
let currValue = '';
let key;
let value;
let setTaskData = {}
let count = 0;

window.onload = function () {

    let retriveData = localStorage.getItem("getTaskData");
    let retriveDataObject = JSON.parse(retriveData)
    console.log(retriveDataObject)

    for (let item in retriveDataObject) {

        let TableNode = document.querySelector("#table")

        let trNode1 = document.createElement("tr")
        let tdNode1 = document.createElement("td")
        trNode1.appendChild(tdNode1)
        let tdNodeText1 = document.createTextNode(retriveDataObject[item])
        tdNode1.appendChild(tdNodeText1)
        TableNode.appendChild(trNode1)

        let tdNode2 = document.createElement("td")
        trNode1.appendChild(tdNode2)
        let tdNode2Div = document.createElement("div")
        tdNode2.appendChild(tdNode2Div)

        let tdNode2Span1 = document.createElement("span")
        tdNode2Div.appendChild(tdNode2Span1)
        tdNode2Span1.classList = "material-symbols-outlined"
        tdNode2Span1.id = "tick"
        tdNode2Span1.setAttribute("onClick", "complete(event)")
        let tdNode2SpanText1 = document.createTextNode("check_circle")
        tdNode2Span1.appendChild(tdNode2SpanText1)

        let tdNode2Span2 = document.createElement("span")
        tdNode2Div.appendChild(tdNode2Span2)
        tdNode2Span2.classList = "material-symbols-outlined"
        tdNode2Span2.id = "edit"
        tdNode2Span2.setAttribute("onClick", "edit(event)")
        let tdNode2SpanText2 = document.createTextNode("edit_square")
        tdNode2Span2.appendChild(tdNode2SpanText2)

        let tdNode2Span3 = document.createElement("span")
        tdNode2Div.appendChild(tdNode2Span3)
        tdNode2Span3.classList = "material-symbols-outlined"
        tdNode2Span3.id = "cancel"
        tdNode2Span3.setAttribute("onClick", "deleteData(event)")
        let tdNode2SpanText3 = document.createTextNode("cancel")
        tdNode2Span3.appendChild(tdNode2SpanText3)

        trNode1.appendChild(tdNode2)
    }
}

const add = (e) => {
    if (document.querySelector("#addButton").innerHTML == "Update") {
        currValue.innerHTML = document.querySelector("#task").value
        document.querySelector("#addButton").innerHTML = "Add Item"
        taskText.value = ""
    }
    else {
        let TableNode = document.querySelector("#table")

        let trNode1 = document.createElement("tr")
        let tdNode1 = document.createElement("td")
        trNode1.appendChild(tdNode1)
        let tdNodeText1 = document.createTextNode(taskText.value)
        tdNode1.appendChild(tdNodeText1)
        TableNode.appendChild(trNode1)

        let tdNode2 = document.createElement("td")
        trNode1.appendChild(tdNode2)
        let tdNode2Div = document.createElement("div")
        tdNode2.appendChild(tdNode2Div)

        let tdNode2Span1 = document.createElement("span")
        tdNode2Div.appendChild(tdNode2Span1)
        tdNode2Span1.classList = "material-symbols-outlined"
        tdNode2Span1.id = "tick"
        tdNode2Span1.setAttribute("onClick", "complete(event)")
        let tdNode2SpanText1 = document.createTextNode("check_circle")
        tdNode2Span1.appendChild(tdNode2SpanText1)

        let tdNode2Span2 = document.createElement("span")
        tdNode2Div.appendChild(tdNode2Span2)
        tdNode2Span2.classList = "material-symbols-outlined"
        tdNode2Span2.id = "edit"
        tdNode2Span2.setAttribute("onClick", "edit(event)")
        let tdNode2SpanText2 = document.createTextNode("edit_square")
        tdNode2Span2.appendChild(tdNode2SpanText2)

        let tdNode2Span3 = document.createElement("span")
        tdNode2Div.appendChild(tdNode2Span3)
        tdNode2Span3.classList = "material-symbols-outlined"
        tdNode2Span3.id = "cancel"
        tdNode2Span3.setAttribute("onClick", "deleteData(event)")
        let tdNode2SpanText3 = document.createTextNode("cancel")
        tdNode2Span3.appendChild(tdNode2SpanText3)

        trNode1.appendChild(tdNode2)

        count++

        setTaskData[key = `task${count}`]=taskText.value
  
        localStorage.setItem('getTaskData', JSON.stringify(setTaskData))
        console.log(setTaskData)
        taskText.value = ""
    }

}

const complete = (event) => {
    let curValueComp = event.currentTarget.parentNode.parentNode.parentNode.children[0]
    let curValueCompText = event.currentTarget.parentNode.parentNode.parentNode.children[0].innerHTML
    let delNode = document.createElement("del")
    delNode.classList = "delBox"
    curValueComp.innerHTML = ''
    curValueComp.appendChild(delNode)
    let delNodeText = document.createTextNode(curValueCompText)
    delNode.appendChild(delNodeText)
}

const deleteData = (event) => {
    event.currentTarget.parentNode.parentNode.parentNode.remove()
}

const clearData = () => {
    let table = document.querySelector("table")
    var child = table.lastElementChild;
    while (child) {
        table.removeChild(child);
        child = table.lastElementChild;
    }

    localStorage.clear()

}

const edit = (event) => {
    console.log()
    currValue = event.currentTarget.parentNode.parentNode.parentNode.children[0]
    document.querySelector("#addButton").innerHTML = "Update"
    document.querySelector("#task").value = currValue.innerHTML
}
