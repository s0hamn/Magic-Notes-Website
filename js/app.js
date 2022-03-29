console.log('welcome to notes app')
showNotes()
    //if user adds a note add it to local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e) {
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }

    note = { title: addTitle.value, content: addTxt.value };
    notesObj.push(note);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    // console.log(JSON.parse(notes))
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);
    showNotes();
});

// function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }

    let html = "";

    notesObj.forEach(function(element, index) {

        html += `
        
            <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element['title']}</h5>
                    <p class="card-text">${element['content']}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `
    })

    let notesElem = document.getElementById('notes');

    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    } else {
        notesElem.innerHTML = `Nothing to show! Use "Add a Note" section to add notes`
    }
}


// function to delete node
function deleteNote(index) {
    // console.log('I am deleting', index);
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));

    showNotes();

}

let search = document.getElementById('searchTxt');

search.addEventListener('input', function() {
    let inputVal = search.value.toLowerCase();
    // console.log(inputVal);
    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;

        if (cardTxt.includes(inputVal)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        // console.log(cardTxt);
    })

})

let name = 'soham';
console.log