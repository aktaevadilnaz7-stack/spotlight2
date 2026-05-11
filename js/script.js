$(document).ready(function() {

    
    $('#openLogin').click(function() {
        $('#loginModal').fadeIn(400).css('display', 'flex');
    });

    $('.close-modal').click(function() {
        $('#loginModal').fadeOut(400);
        
        $('#passMatchError').hide();
        $('#loginPassConfirm').css('border', '1px solid #333');
    });

    $('#signInBtn').click(function() {
        const u = $('#loginUser').val().trim();
        const p = $('#loginPass').val().trim();
        const pc = $('#loginPassConfirm').val().trim();
        
        $('#passMatchError').hide();
        $('#loginPassConfirm').css('border', '1px solid #333');

        
        if(u === "" || p === "" || pc === "") {
            alert("All fields are required!");
            return;
        }

        
        if(p !== pc) {
            $('#passMatchError').fadeIn();
            $('#loginPassConfirm').css('border', '1px solid #ff4d8d');
        } else {
            $(this).text("Success!");
            setTimeout(() => { 
                $('#loginModal').fadeOut(); 
                $(this).text("Sign In"); 
                
                $('#loginUser, #loginPass, #loginPassConfirm').val("");
            }, 1000);
        }
    });

    
    $('.filter-btn').click(function() {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const f = $(this).attr('data-filter');
        
        $('.gallery-item').fadeOut(300).promise().done(function() {
            if(f === 'all') {
                $('.gallery-item').fadeIn(400);
            } else {
                $('.gallery-item.' + f).fadeIn(400);
            }
        });
    });

    
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        let valid = true;
        $('.error-text').hide();

        
        if($('#name').val().trim() === "") { 
            $('#nameError').show(); 
            valid = false; 
        }
        
        
        const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!$('#email').val().match(emailRegex)) { 
            $('#emailError').show(); 
            valid = false; 
        }

        
        if($('#message').val().trim().length < 10) { 
            $('#messageError').show(); 
            valid = false; 
        }

        if(valid) {
            $(this).fadeOut(400, function() {
                $('#successBox').fadeIn();
            });
        }
    });
});