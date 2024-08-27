document.addEventListener('DOMContentLoaded', function () {
    const noteArea = document.getElementById('noteArea');
    const saveButton = document.getElementById('saveButton');

    
    chrome.storage.sync.get('note', function (data) {
        if (data.note) {
            noteArea.value = data.note;
        }
    });

    
    saveButton.addEventListener('click', function () {
        const note = noteArea.value;
        chrome.storage.sync.set({ note: note }, function () {
            alert('Note saved!');
        });
    });
});
