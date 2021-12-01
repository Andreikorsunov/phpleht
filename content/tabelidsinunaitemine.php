<?php
require('conf.php');
?>
<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Andmetabeli "Loomad" sinu näitamine</title>
</head>
<body>
<h1>
    Andmebtabel "Loomad" sinu näitamine
</h1>
<?php
global $yhendus;
// tabeli sisu näitamine
$kask=$yhendus->prepare("SELECT id, nimi, kirjeldus from loomad");
$kask->bind_result($id, $nimi, $kirjeldus);
$kask->execute();
echo "<table>";
echo "<tr>
<th>id</th>
<th>Loomanimi</th>
<th>Kirjeldus</th>
</tr>";
//fetch()
while($kask->fetch()){
    echo "<tr>";
    echo "<td>$id</td>";
    echo "<td>$nimi</td>";
    echo "<td>$kirjeldus</td>";
    echo "</tr>";
}
echo "</table>";
?>

</body>
</html>
