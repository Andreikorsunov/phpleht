<?php
//
$data=[
    "nimi"=> "Andrei Koršunov",
    "aadress"=>"Litkarino 36, Tallinn",
    "pilt"=>"ford.jpg",
    "koduleht"=>"https://korsunov20.thkit.ee/"
];
?>
<h1>Ülesanne 401/var 1</h1>
<p> <b>
        <?=$data["nimi"]?>
    </b> </p>

<p> <i>
        <?=$data["aadress"]?>
    </i> </p>
<img src="<?=$data["pilt"]?>" alt="ford" height="500px" width="500px">
<p><a href="<?=$data["koduleht"]?>" target="_blank">Koršunov koduleht</a></p>
<h1>Ülesanne 401/var 2 - array() </h1>
<?php
// massiv array funktsiooniga
$array=array("Andrei Koršunov","Litkarino 36, Tallinn","ford.jpg","korsunov20.thkit.ee");
echo "<b>Nimi:".$array[0]."</b><br>";
echo "<i>Aadress:".$array[1]."</i><br>";
echo "<img src='$array[2]' alt='ford' height='500px' width='500px'>";
echo "<br><a href='https://$array[3]'>Koduleht</a>";
?>
<a href="../phptest.php">tagasi.....Ülesannete leht</a>
