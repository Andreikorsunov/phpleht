<h1> ... mõistatus</h1>
<?php
echo "<h1>Tere hommikust!</h1>";
$tekst="Täna on esimene PHP tund";
echo $tekst;
echo "<br>";
echo "<h2>Matemaatika tehed. Mõistatus</h2>";
echo "<h3>Arva ära kaks arvu!</h3>";
$arv1=30;
$arv2=10;
//Kahe arvude liitmine +
echo "Kui lidamine kokku, vastus on ".($arv1+$arv2);
echo "<br>";
//jagamine
echo "Kui esimene arv jagame teise arvuga, siis vastus on ".($arv1/$arv2);
// esimene arv ruudus
echo "Esimene arv ruudus on ".pow($arv1, 2);
echo "<br>";
// lahutamine
echo "Kui teisest arvust lahutakse esimene, siis vastus on ".($arv1-$arv2);
// korrustis
echo "Kahe arvude korrutis = ".($arv1*$arv2);
echo "<br>";
echo '<a href="vastus.php">Õiged vastused</a>';

echo "<br>";
echo "<h2>Arva ära EESTI LINNANIMI</h2>";
echo "<br>";
$nimi="Valga";
// esimene pikkus
echo '<br>Linnanimi pikkus : '.strlen($nimi);

// esimene täht
echo "<br>Linnanimi 1.täht - ".substr($nimi, 0, 1);
// kõik tähed väiketähed
echo "<br>Kõik tähed väiketähed - ".strtolower($nimi);
//kõik tähed on suurtähed
echo "<br>Kõik tähed suurtähed - ".strtoupper($nimi);
//Eemaldab stringi algusest ja lõpust tühikud
echo "<br>Kõik tähed tagurpidi - ".trim($nimi);
?>