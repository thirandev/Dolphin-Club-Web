// Loading Button to open Comment Modal, Button to close Comment Modal, Comment Modal Background(Container).
const modalBtn = document.querySelector('.comments-modal-btn');
const modalBg = document.querySelector('.comments-modal-bg');
const modalClose = document.querySelector('.comments-modal-close');

// Opening the Comment Modal.
modalBtn.addEventListener('click', function () {
    resettingCommentsBox();
    modalBg.classList.add('comments-bg-active');
});

// Closing the Comment Modal.
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('comments-bg-active');
    resettingCommentsBox();
});

// Loading the submit button and all the Input fields in the comment modal
const submitBtn = document.getElementById("submitBtn");
const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');
const name = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('comment');

submitBtn.addEventListener('click', function () {
    if ((/[^\s]/).test(name.value)) {  // Checks if the name field is Empty.
        if((/^[A-Za-z\s]+$/).test(name.value)){  // Checks if the name only contains letter in the English alphabet.
            if ((/[^\s]/).test(email.value)) {  // Checks if the email field is Empty.
                if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value)) {  // Checks if the email is valid.
                    if ((/[^\s]/).test(comment.value)) {  // Checks if the comment field is Empty.
                        if (star5.checked) {  // 5 star rated.
                            alert("Dear " + name.value + ", Thank you very much for your feedback. \nYou have given our website 5 stars and your comment was " + comment.value);
                            modalBg.classList.remove('bg-active');
                        } else if (star4.checked) {  // 4 star rated.
                            alert("Dear " + name.value + ", Thank you very much for your feedback. \nYou have given our website 4 stars and your comment was " + comment.value);
                            modalBg.classList.remove('bg-active');
                        } else if (star3.checked) {  // 3 star rated.
                            alert("Dear " + name.value + ", Thank you very much for your feedback. \nYou have given our website 3 stars and your comment was " + comment.value);
                            modalBg.classList.remove('bg-active');
                        } else if (star2.checked) {  // 2 star rated.
                            alert("Dear " + name.value + ", Thank you very much for your feedback. \nYou have given our website 2 stars and your comment was " + comment.value);
                            modalBg.classList.remove('bg-active');
                        } else if (star1.checked) {  // 1 star rated.
                            alert("Dear " + name.value + ", Thank you very much for your feedback. \nYou have given our website 1 stars and your comment was " + comment.value);
                            modalBg.classList.remove('bg-active');
                        } else {  // If user has not rated.
                            alert("ERROR - Rating is Mandatory.", );
                        }
                    } else {
                        alert("ERROR - Comments can not be Empty.");
                    }
                } else {
                    alert("ERROR - Email is invalid.");
                }
            } else {
                alert("ERROR - Email can not be Empty.");
            }
        }
        else {
            alert("ERROR - Name is invalid.");
        }
    } else {
        alert("ERROR - Name can not be Empty.");
    }
    resettingCommentsBox();
});


/**
 * This Method resets every Input Field in the Comment Modal.
 */
function resettingCommentsBox() {
    // Resetting star ratings
    star1.checked = false;
    star2.checked = false;
    star3.checked = false;
    star4.checked = false;
    star5.checked = false;

    // Resetting input fields.
    name.value = "";
    email.value = "";
    comment.value = "";
}


