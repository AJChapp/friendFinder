
console.log('clientside js connected')

$('#submit').on('click', function (event) {
    event.preventDefault();
    var myData = $('#whole').serializeArray();
    console.log(myData);
    $.post('/api/results', myData, function () {

    })
    location.replace('/results');
})