const mainContainerEle = document.querySelector("main");
const notesContainerEle = document.querySelector(".notes-container");
const addNotesBtnEle = document.querySelector(".addNotesBtn");
const deleteNotesBtnEle = document.querySelectorAll(".delete-control");
const notesCardEle = document.querySelectorAll(".notes-card");
const removeModalBtnEle = document.querySelector(".close-modelbtn");
const showModalContainerEle = document.querySelector(".modal-addnotes-bg");
const updateBtnEle = document.querySelector(".updateBtn");
const descriptionNotesEle = document.querySelector("#descriptionNotes");
const titleNoteEle = document.querySelector("#titleNotes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let isUpdated = false,
  updateId;
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

addNotesBtnEle.addEventListener("click", () => {
  isUpdated = false;
  showModalContainerEle.style.display = "block";
  updateBtnEle.textContent = "Add";
  document.querySelector(".modal-header h2").textContent = "Add a Note";
});
removeModalBtnEle.addEventListener("click", () => {
  showModalContainerEle.style.display = "none";
  descriptionNotesEle.value = "";
  titleNoteEle.value = "";
});
updateBtnEle.addEventListener("click", (e) => {
  e.preventDefault();
  let title = titleNoteEle.value;
  let desc = descriptionNotesEle.value;
  if (title || desc) {
    let date = new Date();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    let fullYear = `${month} ${day} ${year}`;
    console.log(fullYear);
    let note = {
      title: title,
      desc: desc,
      fullYear: fullYear,
    };
    if (!isUpdated) {
      notes.push(note);
    } else {
      isUpdated = false;
      notes[updateId] = note;
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    descriptionNotesEle.value = "";
    titleNoteEle.value = "";
    showModalContainerEle.style.display = "none";
    showNewCardNotes();
  }
});

function showNewCardNotes() {
  document.querySelectorAll(".notes-card").forEach((note) => note.remove());
  notes.forEach((note, index) => {
    let noteCard = `
        <div class='notes-card'>
              <h2>${note.title}</h2>
              <textarea readonly>${note.desc}</textarea>
              <div class="notes-controls">
                  <p>${note.fullYear}</p>
                  <div>
                    <span class="edit-control" onclick="editNotesHandler(${index},'${note.title}','${note.desc}')">
                       <i class="fa-solid fa-pencil"></i>
                    </span>
                    <span class="delete-control" onclick='deleteNotesHandler(${index})'>
                       <i class="fa-solid fa-trash"></i>
                    </span>
                  </div>
                
             </div>
        </div>
    `;
    notesContainerEle.insertAdjacentHTML("beforeend", noteCard);
  });
}

function deleteNotesHandler(ele) {
  notes.splice(ele, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNewCardNotes();
}
function editNotesHandler(index, title, desc) {
  isUpdated = true;
  updateId = index;
  showModalContainerEle.style.display = "block";
  titleNoteEle.value = title;
  descriptionNotesEle.value = desc;
  updateBtnEle.textContent = "Update ";
  document.querySelector(".modal-header h2").textContent = "Update A Note";
}
