<h1>Kuupäeva funktsioonid</h1>
<ol>
    <li>time()</li>
    <li>date()</li>
    <li>mktime()</li>
    <li>strtotime()</li>
    <li>data_default_timezone_set()</li>
</ol>
<h1>Ülesanded</h1>
<section>
    <h2>Kuupäev ja aeg formaadis d/m/Y h:i</h2>
    <?php
    echo date("d/m/Y G:i");
    ?>
</section>
<section>
    <h2>Kasutaja vanus 16.11.2021</h2>
    <?php
        include("funktsioon.php");
        echo getVanus();
    ?>
</section>
<section>
    <h2>Järgmine kooli vaheaeg on 20.12.2021</h2>
    <?php
    echo getKoolivaheajani();
    ?>
    <h2> 2022 aasta suveni on </h2>
    <?php
    // tänane aasta
    $year=date('Y');
    //
    $last_day=strtotime('last day of December');
    //
    $date_today=strtotime('how');
    $diff_to_last_day=$last_day-$date_today;
    echo "<br>";
    echo $year." aasta lõpuni ".floor($diff_to_last_day/(60*60*24)). " paeva";
    ?>
</section>
<section>
    <h2>Hooaja pilt</h2>
    <img src="<?php hooaeg() ?>" alt="pilt" width="400px" height="400px">
</section>

