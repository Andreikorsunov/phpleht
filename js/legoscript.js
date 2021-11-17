function joonista(){
    var p = document.getElementById("plate").getContext("2d");
    p.fillStyle = "rgb(0, 0, 139)";
    p.fillRect(120, 80, 60, 15); // x, y, width, height
    p.fillStyle = "white";
    p.fillRect(120, 75, 60, 5); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ñ‚ÐµÐ»Ð¾
    p.fillStyle = "rgb(255, 228, 196)";
    p.fillRect(120, 40, 60, 45); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð½Ð¾Ð³Ð° 1
    p.fillStyle = "rgb(255, 228, 196)";
    p.fillRect(120, 90, 20, 45); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð½Ð¾Ð³Ð° 2
    p.fillStyle = "rgb(255, 228, 196)";
    p.fillRect(160, 90, 20, 45); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ñ€ÑƒÐºÐ° 1
    p.fillStyle = "rgb(255,228,196)";
    p.fillRect(100, 40, 20, 40); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ñ€ÑƒÐºÐ° 2
    p.fillStyle = "rgb(255,228,196)";
    p.fillRect(180, 40, 20, 40); // x, y, width, height
    // ÐšÑ€ÑƒÐ³ - Ð³Ð¾Ð»Ð¾Ð²Ð°
    p.beginPath();
    p.arc(150, 25, 15, 0, 2 * Math.PI, true); // x, y, radius,
    p.fillStyle = "rgb(255, 228, 196)";
    p.fill();
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð±Ñ€Ð¾Ð²ÑŒ 1
    p.fillStyle = "black";
    p.fillRect(151, 20, 10, 2); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð±Ñ€Ð¾Ð²ÑŒ 2
    p.fillStyle = "black";
    p.fillRect(137, 20, 10, 2); // x, y, width, height
    // ÐšÑ€ÑƒÐ³ - Ð³Ð»Ð°Ð·1
    p.beginPath();
    p.arc(155, 25, 2, 0, 2 * Math.PI, true); // x, y, radius,
    p.fillStyle = "black";
    p.fill();
    // ÐšÑ€ÑƒÐ³ - Ð³Ð»Ð°Ð·2
    p.beginPath();
    p.arc(145, 25, 2, 0, 2 * Math.PI, true); // x, y, radius,
    p.fillStyle = "black";
    p.fill();
}
function shorts(){
    var p = document.getElementById("plate").getContext("2d");
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - ÑˆÐ¾Ñ€Ñ‚Ñ‹
    p.fillStyle = "rgb(0, 0, 139)";
    p.fillRect(120, 80, 60, 15); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð½Ð° ÑˆÐ¾Ñ€Ñ‚Ð°Ñ…
    p.fillStyle = "white";
    p.fillRect(120, 75, 60, 5); // x, y, width, height
}
function brows(){
    var p = document.getElementById("plate").getContext("2d");
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð±Ñ€Ð¾Ð²ÑŒ 1
    p.fillStyle = "black";
    p.fillRect(151, 20, 10, 2); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð±Ñ€Ð¾Ð²ÑŒ 2
    p.fillStyle = "black";
    p.fillRect(137, 20, 10, 2); // x, y, width, height
}
function telo(){
    var p = document.getElementById("plate").getContext("2d");
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ñ‚ÐµÐ»Ð¾
    p.fillStyle = "rgb(255, 228, 196)";
    p.fillRect(120, 40, 60, 45); // x, y, width, height
}
function legs(){
    var p = document.getElementById("plate").getContext("2d");
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð½Ð¾Ð³Ð° 1
    p.fillStyle = "rgb(255, 228, 196)";
    p.fillRect(120, 90, 20, 45); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ð½Ð¾Ð³Ð° 2
    p.fillStyle = "rgb(255, 228, 196)";
    p.fillRect(160, 90, 20, 45); // x, y, width, height
}
function hands(){
    var p = document.getElementById("plate").getContext("2d");
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ñ€ÑƒÐºÐ° 1
    p.fillStyle = "rgb(255,228,196)";
    p.fillRect(100, 40, 20, 40); // x, y, width, height
    // ÐŸÑ€ÑÐ¼Ð¾ÑƒÐ³Ð¾Ð»ÑŒÐ½Ð¸Ðº - Ñ€ÑƒÐºÐ° 2
    p.fillStyle = "rgb(255,228,196)";
    p.fillRect(180, 40, 20, 40); // x, y, width, height
}
function golova(){
    var p = document.getElementById("plate").getContext("2d");

    // ÐšÑ€ÑƒÐ³ - Ð³Ð¾Ð»Ð¾Ð²Ð°
    p.beginPath();
    p.arc(150, 25, 15, 0, 2 * Math.PI, true); // x, y, radius,
    p.fillStyle = "rgb(255, 228, 196)";
    p.fill();
}
function eyes(){
    var p = document.getElementById("plate").getContext("2d");

    // ÐšÑ€ÑƒÐ³ - Ð³Ð»Ð°Ð·1
    p.beginPath();
    p.arc(155, 25, 2, 0, 2 * Math.PI, true); // x, y, radius,
    p.fillStyle = "black";
    p.fill();
    // ÐšÑ€ÑƒÐ³ - Ð³Ð»Ð°Ð·2
    p.beginPath();
    p.arc(145, 25, 2, 0, 2 * Math.PI, true); // x, y, radius,
    p.fillStyle = "black";
    p.fill();
}
function kustuta(){
    var p = document.getElementById("plate").getContext("2d");

    p.clearRect(0, 0, 1000, 1000);
}