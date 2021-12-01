<?php
$serverinimi='localhost';
$kasutajanimi='andrei17';
$parool='123456';
$andmebaasinimi='andrei17';
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("UTF-8");
/*
CREATE TABLE loomad(id int primary key AUTO_INCREMENT,
nimi varchar(50),
kirjeldus text);
insert INTO loomad(nimi, kirjeldus)
VALUES ('Zebra','Polosatoe zivotnoe');

SELECT * FROM loomad*/


