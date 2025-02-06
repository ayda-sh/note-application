const formEl = document.querySelector("form")
const noteContainerEl = document.querySelector(".note-container")



formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    const noteBoxEl = document.createElement("div")
    const textAreaEl = document.createElement("textarea")
    const removeEdit = document.createElement("div")
    const buttonEdit = document.createElement("button")
    const buttonRemove = document.createElement("button")


    
    noteBoxEl.classList.add("note-box")
    textAreaEl.classList.add("textarea")
    removeEdit.classList.add("remove-edit")
    noteContainerEl.appendChild(noteBoxEl)
    noteBoxEl.append(textAreaEl, removeEdit)
    removeEdit.append(buttonEdit, buttonRemove)

    buttonEdit.innerHTML = ' <img src="./images/Vector.png">'
    buttonRemove.innerHTML = ' <img src="./images/Vector (1).png">'

    buttonRemove.addEventListener("click", () => {
        noteContainerEl.removeChild(noteBoxEl);
    });



   
})


