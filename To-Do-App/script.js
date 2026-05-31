const buttonClick=document.getElementById("enterbtn");
const inputField=document.getElementById("field");
const response=document.querySelector(".task-container");
const emptyImage = document.getElementById("emptyimage");


let editingTask = null;
// creating a task in list
const HandlerTask = ()=>{
const alertPopup=document.querySelector(".alert");
let task = inputField.value.trim();

    if (task === "") {

        // Set message
        alertPopup.textContent = "Failed to add Task to the List: Task is Empty";

        // Add close button
        let closeBtn = document.createElement("button");
        closeBtn.className = "alert-button";
        closeBtn.innerHTML = '<i class="fa-solid fa-x"></i>';

        alertPopup.appendChild(closeBtn);

        // Show alert
        alertPopup.style.display = "flex";

        // Remove alert when clicked
        closeBtn.addEventListener("click", () => {
            alertPopup.style.display = "none";
        });

        return;
    }

     if (editingTask) {
    // update existing task
    editingTask.textContent = task;
    editingTask = null; // reset edit mode
    inputField.value = "";
    return;
  }

  if (emptyImage) {
  emptyImage.classList.add("hidden"); 
}

    let listElement=document.createElement("li");
    listElement.className="task-list";

    //change
    let textSpan = document.createElement("span");
    textSpan.textContent=task;

    //let textNode=document.createTextNode(inputField.value);
      

    let deleteButton = document.createElement("button");
    deleteButton.className = "button-list"; 

     let editButton = document.createElement("button");
        editButton.className = "button-list"; 

    let editicon = document.createElement("i");
    editicon.className = "fa-regular fa-pen-to-square"; 

    // Create Font Awesome icon
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-x"; 

    

    editButton.appendChild(editicon);
    deleteButton.appendChild(icon);

    let buttonWrapper = document.createElement("div");
    buttonWrapper.className="button"
    buttonWrapper.append(editButton,deleteButton)
    listElement.append(textSpan,buttonWrapper);

    response.append(listElement);
    inputField.value= ''


      //remove item
    icon.addEventListener('click',()=>{
         listElement.remove();
     if (response.querySelectorAll("li").length === 0) {
       emptyImage.classList.remove("hidden"); 
}
    })
    
   //modify item 
  editicon.addEventListener('click',()=>{
       inputField.value= textSpan.textContent;
       editingTask=textSpan;
    })

   

};

if (buttonClick) {
    buttonClick.addEventListener('click',HandlerTask);

inputField.addEventListener('keyup',(event)=>{
    if(event.key==="Enter"){
        HandlerTask();
    }
});

}



