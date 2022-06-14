document.addEventListener("DOMContentLoaded", function (event) {
    // redirect to 7777 port
    // ping golang counter
    getRequest("http://www.aracki.me:7777/count", function (request) {
        var response = request.currentTarget.response || request.target.responseText;

        counter = document.getElementById("counter_text");
        if (counter != null) {
            document.getElementById("counter_text")
                .innerHTML = "[" + response + " unique visitors]";
        }
    })
});

function getRequest(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = success;
    xhr.send();
    return xhr;
}

$('#back_to_home1').on('click', function () {
    window.location.href = 'index.html';
});

$('#back_to_home2').on('click', function () {
    window.location.href = 'index.html';
});

$('#yt_text').on('click', function () {
    window.location.href = "yt.html";
})
// ***************