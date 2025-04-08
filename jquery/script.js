const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

$(document).ready(function () {
    $('#toggleBtn').click(function () {
        $('#myList').toggle();
    });


    $('#myForm').submit(function (e) {
        e.preventDefault();

        $('#nameError').html('');
        $('#emailError').html('');

        const name = $('#name').val();
        if (!/^[A-ZŁŻ]{1}[a-ząćęłńóśźż]{1,}$/.test(name)) {
            $('#nameError').html('Imie jest wpisane niepoprawnie');
        }

        const email = $('#email').val();
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            $('#emailError').text('Email jest wpisany niepoprawnie');
        }
    });

    $('#loadData').click(function () {
        $.ajax({
            url: apiUrl,
            method: "GET",
            dataType: "json",
            success: function (response) {
                $.get(apiUrl, function (data) {
                    $("#results").html("userId: " + data.userId + "<br>id: " + data.id + "<br>title: " + data.title + "<br>body: " + data.body);
                });
            },
        })
    })
});