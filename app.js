document.addEventListener('DOMContentLoaded', loadNotes);  

const saveButton = document.getElementById('saveButton');  
const noteInput = document.getElementById('noteInput');  
const notesList = document.getElementById('notesList');  

saveButton.addEventListener('click', saveNote);  

function saveNote() {  
    const noteText = noteInput.value.trim();  
    
    if (noteText === '') {  
        alert('Please enter a note!');  
        return;  
    }  

     
    let notes = JSON.parse(localStorage.getItem('notes')) || [];  

     
    notes.push(noteText);  
    
     
    localStorage.setItem('notes', JSON.stringify(notes));  

    
    noteInput.value = '';  

     
    loadNotes();  
}  

function loadNotes() {  
  
    notesList.innerHTML = '';  

 
    let notes = JSON.parse(localStorage.getItem('notes')) || [];  

     
    notes.forEach((note, index) => {  
        const li = document.createElement('li');  
        li.innerText = note;  
        
     
        const deleteButton = document.createElement('button');  
        deleteButton.innerText = 'Delete';  
        deleteButton.addEventListener('click', () => {  
            deleteNote(index);  
        });  
        li.appendChild(deleteButton);  
        notesList.appendChild(li);  
    });  
}  

function deleteNote(index) {  
  
    let notes = JSON.parse(localStorage.getItem('notes')) || [];  
     
    notes.splice(index, 1);  
     
    localStorage.setItem('notes', JSON.stringify(notes));  
 
    loadNotes();  
}