const getNotes = () => {
    let notes  = [];

    if(localStorage.getItem('notes')) {
        try {
            notes = JSON.parse(localStorage.getItem('notes'));
        } catch(e) {
            localStorage.removeItem('notes');
        }
    }

    return notes;
}

const addNotes = (notes) => {
    // Set to Local storage
    try{
        let parsed = JSON.stringify(notes);
        localStorage.setItem('notes', parsed);
        return true;
    } catch(e){
        return false;
    }
}

export {getNotes, addNotes}