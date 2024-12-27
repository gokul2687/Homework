document.addEventListener('DOMContentLoaded',function()
{
    var form = document.getElementById('serviceform');

    form.addEventListener('submit',function(e)
    {
    e.preventDefault();
    cleaningService();
    booknow();


});
});


function cleaningService()
{
    var name = document.getElementById('name').value.trim();
    var number = document.getElementById('number').value.trim();
    var email = document.getElementById('email').value.trim();
    var location = document.getElementById('location').value.trim();
    var pincode = document.getElementById('pincode').value.trim();
    var address = document.getElementById('address').value.trim();
    var date = document.getElementById('date').value.trim();
    var time = document.getElementById('time').value.trim();
    var cleaning = document.getElementById('cleaningopt').value.trim();

    if(name === '' )
    {
        setError(document.getElementById('name'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('name'));
    }

    if(number === '' )
    {
       setError(document.getElementById('number'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('number'));
    }

    if(email === '' )
    {
        setError(document.getElementById('email'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('email'));
    }

    if(location === '' )
    {
        setError(document.getElementById('location'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('location'));
    }

    if(pincode === '' )
    {
        setError(document.getElementById('pincode'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('pincode'));
    }
    
    if(address === '' )
    {
        setError(document.getElementById('address'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('address'));
    }

    if(date === '' )
    {
        setError(document.getElementById('date'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('date'));
    }

    if(time === '' )
    {
        setError(document.getElementById('time'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('time'));
    }

    if(cleaning === '' )
    {
        setError(document.getElementById('cleaningopt'),'This field is required')
    }
    else
    {
        setSuccess(document.getElementById('cleaningopt'));
    }
}
function booknow()
{
    var name = document.getElementById('name').value.trim();
    var number = document.getElementById('number').value.trim();
    var email = document.getElementById('email').value.trim();
    var location = document.getElementById('location').value.trim();
    var pincode = document.getElementById('pincode').value.trim();
    var address = document.getElementById('address').value.trim();
    var date = document.getElementById('date').value.trim();
    var time = document.getElementById('time').value.trim();
    var cleaning = document.getElementById('cleaningopt').value.trim();

    if(name !== '' && number !=='' && email !=='' && location !== '' && pincode !== '' && address !== '' && date !=='' && time !=='' && cleaning !=='')
    {
        window.location.replace('confirmation.html');
    }
}
function setError(element, message) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.serviceerror');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.serviceerror');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
