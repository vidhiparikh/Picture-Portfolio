(function () {
    $('#btn-contact-submit').click(function (event) {
        if (event) {
            event.preventDefault()


            var visitor = {
                name: $('#contact-form-name').val(),
                email: $('#contact-form-email').val(),
                message: $('#contact-form-message').val()
            }
            console.log('Contact Form Submitted:' + JSON.stringify(visitor))
            $.ajax({
                url: '/api/subscriber',
                type: 'POST',
                data: visitor,
                success: function (response) {
                    console.log('SUBSCRIBER CREATED:' + JSON.stringify(response))
                },
                error: function (response) { }
            })
        }
    })

})()