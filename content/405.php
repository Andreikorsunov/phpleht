<h1>Ülesanne 405 - Korrustustabel 2 tsükliga</h1>
<?php
    echo "<table>";
    for($i=1; $i<=10; $i++){
        echo "<tr>";
        for($j=1; $j=10; $j++){

            $val=$i*$j;

            echo "<td>".$val."</td>";
        }
        echo "</tr>";
    }

    echo "</table>";

?>
<a href="../phptest.php">tagasi.....Ülesannete leht</a>
