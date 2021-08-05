
let nameInput = document.querySelector('#note-input');
let button = document.querySelector('.btn');
let noteSection = document.querySelector('#note-section');

button.addEventListener('click', addNoteItem);

let divNumber = 0;

function addNoteItem() {
    let div = document.createElement('div');
    divNumber = divNumber + 1
    div.setAttribute('id', divNumber)
    div.className = "layer";
    noteSection.appendChild(div);

    let p = document.createElement('p');
    p.id = "words";
    p.style.margin = "auto"
    p.innerText = nameInput.value;
    nameInput.value = "";
    div.appendChild(p);

    let subButton = document.createElement('button');
    let textButton = document.createTextNode("Click Here");
    subButton.className = "sub btn btn-primary";
    subButton.id = "otherbtn";
    // sudButton.setAttribute('data-toogle', modal);
    subButton.setAttribute('data-mobal-target', '#modal'); 
    subButton.appendChild(textButton);
    div.appendChild(subButton);

    subButton.addEventListener('click', function() {

        div.remove();

        // let modal = document.createElement('div')
        // modalNumber = modalNumber + 1; 
        // modal.className = "modal";
        // modal.id = "simple-modal";
        // modal.setAttribute('id', modalNumber);
        // div.appendChild(modal);
       

        // let modalContent = document.createElement('div');
        // modalContent.className = "modal-content";
        // modal.appendChild(modalContent);

        // let modalHeader = document.createElement('div');
        // modalHeader.className = "modal-header";
        // modalContent.appendChild(modalHeader);

        // let headerText = document.createElement('h5')
        // let headerTextLetter = document.createTextNode('Note');
        // headerText.appendChild(headerTextLetter);
        // modalHeader.appendChild(headerText);

        // let modalBtn = document.createElement('button')
        // modalBtn.className = " btn-close";
        // modalBtn.id = "close";
        // modalHeader.appendChild(modalBtn);

        // let modalBody = document.createElement('div');
        // modalBody.className = "modal-body";
        // modalContent.appendChild(modalBody);

        // // modal.appendChild(p); 

        // let newP = document.createElement('p');
        // let pText = document.createTextNode('Hello there')
        // newP.appendChild(pText);
        // modalBody.appendChild(newP);

        

        // $('#otherbtn').click(function () {
        //     $('#simple-modal').modal();
        // })

        // $('#close').click(function () {
        //     $('#simple-modal').modal('hide')
        // })
        
    })

    // subButton.addEventListener('click', addModal);

    // let modalNumber = 0;

    // function addModal() {
        // let modalNumber = 0;

        // let modal = document.createElement('div')
        // modalNumber = modalNumber + 1; 
        // modal.className = "modal";
        // // modal.id = "simple-modal";
        // modal.setAttribute('id', modalNumber);
        // div.appendChild(modal);
       

        // let modalContent = document.createElement('div');
        // modalContent.className = "modal-content";
        // modal.appendChild(modalContent);

        // let modalHeader = document.createElement('div');
        // modalHeader.className = "modal-header";
        // modalContent.appendChild(modalHeader);

        // let headerText = document.createElement('h5')
        // let headerTextLetter = document.createTextNode('Note');
        // headerText.appendChild(headerTextLetter);
        // modalHeader.appendChild(headerText);

        // let modalBtn = document.createElement('button')
        // modalBtn.className = " btn-close";
        // modalBtn.id = "close";
        // modalHeader.appendChild(modalBtn);

        // let modalBody = document.createElement('div');
        // modalBody.className = "modal-body";
        // modalContent.appendChild(modalBody);

        // modal.appendChild(p); 

        // let newP = document.createElement('p');
        // let pText = document.createTextNode('Hello there')
        // newP.appendChild(pText);
        // modalBody.appendChild(newP);

        

        // $('#otherbtn').click(function () {
        //     $('#1').modal();
        // })

        // $('#close').click(function () {
        //     $('#simple-modal').modal('hide')
        // })

    // }




    //     subButton.addEventListener('click', removeNoteItem);

    //     function removeNoteItem() {
    // var myModal = document.getElementById('myModal')
    // var myInput = document.getElementById('buttonModal')
    // myModal.style.display = "block"

    // myInput.addEventListener('click', function () {
    //     myModal.modal()
    // })

    // let modal = document.getElementById('simple-modal');
    // let modalCloseBtn = document.getElementById('closeBtn');
    // modal.style.display = 'block'; 

    // let modalContent = document.getElementById('content');
    // modalContent.appendChild(p);


    // modalCloseBtn.addEventListener('click', closeModal);

    // function closeModal() {
    //     modal.style.display ="none"; 
    // }




    // div.remove();
    // let divModal = document.createElement('div');
    // divModal.className = "modal fade";

    // let divModalDialog = document.createElement('div');
    // divModalDialog.className = 'modal-dialog';

    // let divModalContent = document.createElement('div');
    // divModalContent.className = "modal-content"; 

    // let divModalBody = document.createElement('div');
    // divModalBody.className = "modal-body"; 

    // let divModalFooter = document.createElement('div'); 
    // divModalFooter.className = "modal-footer";

    // let footerBtn = document.createElement('button');
    // let footerBtnText = document.createTextNode('X');
    // footerBtn.appendChild(footerBtnText);
    // divModalFooter.appendChild(footerBtn);

    // div.appendChild(divModal);
    // divModal.appendChild(divModalDialog);
    // divModalDialog.appendChild(divModalContent);
    // divModalContent.appendChild(divModalBody);
    // divModalContent.appendChild(divModalFooter);
    // p.appendChild(divModal); 

    // divModal.style.display = "show";

    // let modal =document.getElementById('card');
    // modal.releasePointerCapture()
    //     }
    // let modalbody = document.getElementById('body');
    // let newP = document.createElement('h4');
    // modalbody.appendChild(newP)
    // newP.innerText = nameInput.value;
    // nameInput.value ="";


    // $('#otherbtn').click(function() {
    //     $('#simple-modal').modal(); 
    // })

    // $('#close').click(function() {
    //     $('#simple-modal').modal('hide')
    // })

}

// var myModal = document.getElementById('myModal');
// var myInput = document.getElementById('buttonModal')

// myInput.addEventListener('click', function () {
//   myModal.modal()
// })

// $(document).ready(function() {
//     $("#MyModal").modal();
//   });
// $('#buttonModal').click(function() {
//     $('#MyModal').modal(); 
// })

// $('#body').append(p);

// $('#btnclose').click(function() {
//     $('#MyModal').modal('hide')
// })


// document.querySelector('#note-input'); 
// document.querySelector('.btn'); 
// document.querySelector('#note-section'); 

// document.querySelector(".btn").addEventListener("click", (e) => { 
//     $('#note-input').console.log();
//  });

// $('#buttonModal').click(function() {
//     $('#MyModal').modal(); 
// })

// $('#body').append(p);

// $('#btnclose').click(function() {
//     $('#MyModal').modal('hide')
// })
// let modalbody = document.getElementById('body');
// let newP = document.createElement('h4');
// modalbody.appendChild(newP)
// newP.innerText = nameInput.value;
// nameInput.value ="";
