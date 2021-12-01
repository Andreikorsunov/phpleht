<?php
session_start();
if(!isset($_SESSION["tuvastamine"])){
    header("Location: loginab.php");
    exit();
}
if(isset($_POST["logout"])){
    session_destroy();
    //aadressi reas avatakse login.php fail
    header("Location: loginab.php");
    exit();
}
