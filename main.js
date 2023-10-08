const buttons = document.querySelectorAll('.btn-note');
const divs = document.querySelectorAll('.note');
console.log(divs.length)
console.log(buttons.length)

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
    for (let j = 0; j < divs.length; j++) {
        divs[j].classList.remove('best');
    }
    divs[i].classList.add('best');
    });
}

const TextAreas = document.querySelectorAll('textarea');
const SaveButton = document.querySelector('.btn-save');
SaveButton.addEventListener('click', function() {
    console.log("saved")
    TextAreas.forEach(function(TextArea, Index) {
        localStorage.setItem(`SavedText${Index+1}`, TextArea.value);
    });
});
TextAreas.forEach(function(TextArea, Index) {
    if (localStorage.getItem(`SavedText${Index+1}`)) {
        TextArea.value = localStorage.getItem(`SavedText${Index+1}`);
    }
});






// const saveButton = document.querySelector('.btn-save');
// saveButton.addEventListener('click', function() {
//     alert("saved")
//     localStorage.setItem('SavedText', divs.value);
// });

// if (localStorage.getItem('SavedText')) {
//     divs.value = localStorage.getItem('SavedText');
// }



// let hasNewClass= false;`

// for (const div of tombol) {
//     tombol.addEventListener("click", function() {
//         note.classList.remove("index");

//         if (!hasNewClass) {
//             note.classList.add("index");
//             console.log("arghhhh")
//             hasNewClass = true;
//         }
//     })
// }

