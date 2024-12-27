//sign up page validation
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateInputs();
        submit();
    });

    function validateInputs() {
        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var email = document.getElementById('email').value.trim();
        var newpassword = document.getElementById('newpassword').value.trim();
        var confirmpassword = document.getElementById('confirmpassword').value.trim();

        if (name === '') {
            setError(document.getElementById('name'), 'Username is required');
        } else {
            setSuccess(document.getElementById('name'));
        }

        if (phone === '') {
            setError(document.getElementById('phone'), 'Phone no is required');
        } else if (phone.length < 10) {
            setError(document.getElementById('phone'), 'Please enter correct phone number');
        } else {
            setSuccess(document.getElementById('phone'));
        }

        if (email === '') {
            setError(document.getElementById('email'), 'Email is required');
        } else if (!validateEmail(email)) {
            setError(document.getElementById('email'), 'Please enter correct email format');
        } else {
            setSuccess(document.getElementById('email'));
        }

        if (newpassword === '') {
            setError(document.getElementById('newpassword'), 'Password is required');
        } else if (newpassword.length < 6) {
            setError(document.getElementById('newpassword'), 'Password must be at least 6 characters');
        } else {
            setSuccess(document.getElementById('newpassword'));
        }

        if (confirmpassword === '') {
            setError(document.getElementById('confirmpassword'), 'Confirm password is required');
        } else if (confirmpassword !== newpassword) {
            setError(document.getElementById('confirmpassword'), 'Passwords do not match');
        } else {
            setSuccess(document.getElementById('confirmpassword'));
        }
    }

    function setError(element, message) {
        var inputGroup = element.parentElement;
        var errorElement = inputGroup.querySelector('.errormsg');

        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
        var inputGroup = element.parentElement;
        var errorElement = inputGroup.querySelector('.errormsg');

        errorElement.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }

    function validateEmail(email) {
        return String(email)
            .toLowerCase()
            .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    }
});

function submit()
{
        var cname = document.getElementById('name').value.trim();
        var cphone = document.getElementById('phone').value.trim();
        var cemail = document.getElementById('email').value.trim();
        var cnewpassword = document.getElementById('newpassword').value.trim();
        var cconfirmpassword = document.getElementById('confirmpassword').value.trim();

        if(cname !== '' && cphone !== '' && cemail !== '' && cnewpassword !== '' && cconfirmpassword !== '' )
        {
            window.location.replace('login.html');
        }

}
//login form validation
document.addEventListener('DOMContentLoaded', function(){

    var loginform = document.getElementById('loginform')

    loginform.addEventListener('submit',function(event){
        event.preventDefault();
        loginValidate();
        loginsubmit();
    })

});

function loginValidate()
{
    var phoneno = document.getElementById('phoneno').value.trim();
    var emailid = document.getElementById('emailid').value.trim();
    var loginpassword = document.getElementById('loginpassword').value.trim();

    if(phoneno ==='')
    {
        setErrors(document.getElementById('phoneno'),'phone number is required');
    }
    else
    {
        setSuccesss(document.getElementById('phoneno'));
    }


    if(emailid ==='')
    {
        setErrors(document.getElementById('emailid'),'email id is required');
    }
    else
    {
        setSuccesss(document.getElementById('emailid'));
    }

    if(loginpassword === '')
    {
        setErrors(document.getElementById('loginpassword'),'password is required');
    }
    else
    {
        setSuccesss(document.getElementById('loginpassword'));
    }
    
}

function loginsubmit()
{
    var phoneno = document.getElementById('phoneno').value.trim();
    var emailid = document.getElementById('emailid').value.trim();
    var loginpassword = document.getElementById('loginpassword').value.trim();

    if(phoneno !== '' && emailid !== '' && loginpassword !=='')
    {
        window.location.replace('index.html');
    }
}

function setErrors(element, message) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.loginerror');

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccesss(element) {
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.loginerror');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
// // working employee count
document.addEventListener('DOMContentLoaded', () => {
    function startCounter() {
        const counterElement = document.getElementById('counting1');
        if (!counterElement) {
            console.error('Element with ID "countings1" not found');
            return;
        }

        let count = 0;
        const targetCount = 200; // Target count value
        const interval = 20; // Interval in milliseconds

        const counter = setInterval(() => {
            count++;
            counterElement.textContent = count;
            if (count >= targetCount) {
                clearInterval(counter);
            }
        }, interval);
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is intersecting, starting counter');
                startCounter();
                observer.unobserve(entry.target); // Stop observing once the counter starts
            }
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });

    // Start observing the target section
    const target = document.getElementById('one');
    if (target) {
        observer.observe(target);
    } else {
        console.error('Element with ID "one" not found');
    }
});

// clients count

document.addEventListener('DOMContentLoaded', () => {
    function startCounter() {
        const counterElement = document.getElementById('counting2');
        if (!counterElement) {
            console.error('Element with ID "countings1" not found');
            return;
        }

        let count = 0;
        const targetCount = 150; // Target count value
        const interval = 20; // Interval in milliseconds

        const counter = setInterval(() => {
            count++;
            counterElement.textContent = count;
            if (count >= targetCount) {
                clearInterval(counter);
            }
        }, interval);
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is intersecting, starting counter');
                startCounter();
                observer.unobserve(entry.target); // Stop observing once the counter starts
            }
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });

    // Start observing the target section
    const target = document.getElementById('two');
    if (target) {
        observer.observe(target);
    } else {
        console.error('Element with ID "one" not found');
    }
});

// experience count
document.addEventListener('DOMContentLoaded', () => {
    function startCounter() {
        const counterElement = document.getElementById('counting3');
        if (!counterElement) {
            console.error('Element with ID "countings1" not found');
            return;
        }

        let count = 0;
        const targetCount = 20; // Target count value
        const interval = 100; // Interval in milliseconds

        const counter = setInterval(() => {
            count++;
            counterElement.textContent = count;
            if (count >= targetCount) {
                clearInterval(counter);
            }
        }, interval);
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is intersecting, starting counter');
                startCounter();
                observer.unobserve(entry.target); // Stop observing once the counter starts
            }
        });
    }, {
        threshold: 0.5 // Adjust this threshold as needed
    });

    // Start observing the target section
    const target = document.getElementById('three');
    if (target) {
        observer.observe(target);
    } else {
        console.error('Element with ID "one" not found');
    }
});

