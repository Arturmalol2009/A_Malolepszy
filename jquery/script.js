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
            $('#nameError').html('Imie jest wymagane i musi zaczynac sie od duzej litery');
        }

        const email = $('#email').val();
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            $('#emailError').text('Email jest wymagany i musi byc poprawny');
        }
    });

    $('#loadData').click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: "GET",
            dataType: "json",
            success: function (response) {
                $.get('https://jsonplaceholder.typicode.com/posts/1', function (data) {
                    $("#results").html("userId: " + data.userId + "<br>id: " + data.id + "<br>title: " + data.title + "<br>body: " + data.body);
                });
            },
        })
    })
});