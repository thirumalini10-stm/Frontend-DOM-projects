const feedbackBtn = document.querySelector(".submit-btn");
const formFB = document.forms.feedback;



formFB.addEventListener('submit',(event)=>{
    event.preventDefault();
     console.log([...new FormData(formFB)]);
    setTimeout(()=>{
        alert("form submitted successfully");
    },1000);

 

});




