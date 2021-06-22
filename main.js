Webcam.set({
    width: 400,
    height: 350,
    image_format: 'jpg',
    jpg_quality: 99999
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}