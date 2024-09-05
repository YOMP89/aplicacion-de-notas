document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('add-note');
    const noteTitleInput = document.getElementById('note-title');
    const noteContentInput = document.getElementById('note-content');
    const notesContainer = document.getElementById('notes-container');

    addNoteButton.addEventListener('click', addNote);

    function addNote() {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();

        if (title === '' || content === '') {
            alert('Por favor, ingresa un título y contenido para la nota.');
            return;
        }

        const noteElement = createNoteElement(title, content);
        notesContainer.appendChild(noteElement);

        noteTitleInput.value = '';
        noteContentInput.value = '';
    }

    function createNoteElement(title, content) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-note');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            notesContainer.removeChild(noteDiv);
        });

        noteDiv.appendChild(titleElement);
        noteDiv.appendChild(contentElement);
        noteDiv.appendChild(deleteButton);

        return noteDiv;
    }
});