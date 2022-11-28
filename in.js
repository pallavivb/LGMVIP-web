alert("PLEASE FILL THE BOX OF YOUR CHOICE .DONT LEAVE BLANK");
let InsertButton = document.getElementById('Insert');
let TDC = document.getElementById('TDC');
let inputField = document.getElementById('inputField');
InsertButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paradecoration');
    paragraph.innerText = inputField.value;
    TDC.appendChild(paragraph);
    inputField.value = " ";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        TDC.removeChild(paragraph);

    })
})