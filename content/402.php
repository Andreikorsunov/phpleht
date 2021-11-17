<a href="../phptest.php">tagasi.....Ülesannete leht</a>
<h1>Ülesanne 402</h1>
<h2>1. 20 Checkbox tsikliiga</h2>
<?php
    $i=1;
    while($i<=20){
        echo "<input type='checkbox' id='$i' name='box[]' value='$i'>";
        echo "<label for='$i'>box ".$i."</label><br>";
        $i++;
    }
?>
<h2>2. 20 Tekstikasti tsikliiga</h2>
<?php
$f=1;
while($f<=20){
    echo "<input type='text' id='l$f' name='cell[]'>";
    echo "<label for='l$f'>cell ".$f."</label><br>";
    $f++;
}
?>
<h2>3. 20 Radiobutton tsikliiga</h2>
<?php
$r=1;
while($r<=20){
    echo "<input type='radio' id='u$r' name='radio[]' value='u$r'>";
    echo "<label for='u$r'>radio ".$r."</label><br>";
    $r++;
}
?>

