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

let notesData;
let notes = [];
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
    notesData = JSON.parse(localStorage.getItem("notes")) || [];
    descriptionNotesEle.value = "";
    titleNoteEle.value = "";
    showModalContainerEle.style.display = "none";
    showNewCardNotes();
  }
});

function showNewCardNotes() {
  document.querySelectorAll(".notes-card").forEach((note) => note.remove());
  notesData.forEach((note, index) => {
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
  console.log(ele);
  notesData.splice(ele, 1);
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
// function deleteHandler() {
//   for (let i = 0; i < deleteNotesBtnEle.length; i++) {
//     deleteNotesBtnEle[i].addEventListener("click", () => {
//       deleteNotesBtnEle[i].parentElement.remove();
//     });
//   }
// }
// addNotesBtnEle.addEventListener("click", () => {
//   showModalContainerEle.style.display = "block";
// });
// removeModalBtnEle.addEventListener("click", () => {
//   showModalContainerEle.style.display = "none";
// });
// updateBtnEle.addEventListener("click", (e) => {
//   e.preventDefault;
//   let title = titleNoteEle.value;
//   let desc = descriptionNotesEle.value;
//   showModalContainerEle.style.display = "none";
//   if (!desc || !title) return alert("Please fill out all fields!");
//   let notes = [];
//   let note = {
//     title: title,
//     desc: desc,
//   };
//   notes.push(note);

//   localStorage.setItem("notes", JSON.stringify(notes));
//   addNewNotesCardHandler();
//   titleNoteEle.value = "";
//   descriptionNotesEle.value = "";
// });
// function addNewNotesCardHandler() {
//   let newNotesCard = document.createElement("div");
//   newNotesCard.classList.add("notes-card");

//   notesData.forEach((note, index) => {
//     newNotesCard.innerHTML = `
//               <h2>${note.title}</h2>
//               <textarea readonly>${note.desc}</textarea>
//               <div class="notes-controls">

//                 <span class="edit-control" onclick='editHandler(${index},'${notes.title}','${desc.title}')
//                   ><i class="fa-solid fa-pencil"></i
//                 ></span>
//                 <span class="delete-control" onclick='deleteHandler(${index})'
//                   ><i class="fa-solid fa-trash"></i
//                 ></span>
//               </div>
//       `;
//   });

//   // notesContainerEle.appendChild(newNotesCard);
//   // let deleteBtns = notesContainerEle.querySelectorAll(
//   //   ".notes-card .notes-controls .delete-control"
//   // );
//   // let editBtns = notesContainerEle.querySelectorAll(
//   //   ".notes-card .notes-controls .edit-control"
//   // );
//   // deleteBtns.forEach((delBtn) => {
//   //   delBtn.addEventListener("click", () => {
//   //     delBtn.parentElement.parentElement.remove();
//   //   });
//   // });
//   // editBtns.forEach((editBtn) => {
//   //   editBtn.addEventListener("click", () => {
//   //     let main = editBtn.parentElement.parentElement;
//   //     let desc = main.querySelector("textarea").value;
//   //     let title = main.querySelector("h2").textContent;
//   //     console.log(desc, title);
//   //     editNotesHandler(desc, title);
//   //   });
//   // });
// }

// function editNotesHandler(desc, title) {
//   showModalContainerEle.style.display = "block";
//   descriptionNotesEle.value = desc;
//   titleNoteEle.value = title;
//   addNewNotesCardHandler(desc, title);
// }
