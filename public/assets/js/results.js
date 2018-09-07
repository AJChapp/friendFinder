var answers = {}
$.get('/api/results', function (res) {
    var newFriend = res[0][Math.floor(Math.random() * 4)]
    answers = res[1];
    $('#target').append(newFriend)

    for (i = 0; i < 10; i++) {
        var x = `q${i + 1}`
        console.log(x)
        var spanner = $(`<span class = answers>`).html(`${i + 1}: ${res[1][`${x}`]} <br>`)
        $('#dataTarget').append(spanner)
    }

});