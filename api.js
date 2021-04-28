const contactForm = document.getElementById('form');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let company = document.getElementById('company').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    if(company !== "" && email !== "" && subject !== "" && message !== ""){
        fetch('https://hidden-escarpment-86839.herokuapp.com/api/users/register',{
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
           },	
           body: JSON.stringify({
                   company: company,
                   email: email,
                   subject: subject,
                   message: message
           }) //this section describe the body of the request converted into a JSON format. 
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            if(data === true){
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you for taking interest!, Your message has been sent to developers email ',
                    text: '"zosajuela@gmail.com"'
                });
                window.setTimeout(function(){location.reload()},2500)
            }else {	
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops!',
                    text: 'something went wrong'
                });
            }
          
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Opps!',
            text: 'kindly make sure all fields are filled up!'
        });
    }
   
    })

    // let formData = {
    //     company: company.value,
    //     email: email.value,
    //     name: name.value,
    //     message: message.value
    // }



  