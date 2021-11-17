<h1>Valuuta kalkulaator var 1</h1>
<form name="var1" onClick="validateForm()" method="post">
    <label for="kogus">Sisesta kogus: </label>
    <input type="number" name="kogus" id="kogus"> euro
    <br>
    <fieldset>
        <legend>Vali valuuta: </legend>

        <input type="radio" name="valuta1" id="dollar" value="dollar" onchange="radioChange(event)">
        <label for="dollar">Dollar</label>
        <br>

        <input type="radio" name="valuta1" id="rub" value="rub" onchange="radioChange(event)">
        <label for="rub">Rouble</label>
        <br>

        <input type="radio" name="valuta1" id="kroon" value="kroon" onchange="radioChange(event)">
        <label for="kroon">Rootsi kroon</label>
        <br>

        <input type="radio" name="valuta1" id="frank" value="frank" onchange="radioChange(event)">
        <label for="frank">Šveitsi frank</label>
        <br>
    </fieldset>

    <div id="vastus">Siin tuleb vastus....</div>
</form>
<h1>Valuuta kalkulaator var 2</h1>
<form name="var2">
    <label for="kogus2">Sisesta kogus: </label>
    <input type="number" name="kogus2" id="kogus2"> EURO
    <br>
    <select name="valuta2" onchange="selectOptionChange(event)">
        <option value=""></option>
        <option value="dollar">Dollar</option>
        <option value="kroon">Rootsi kroon</option>
        <option value="frank">Šveitsi frank</option>
        <option value="rub">Rouble</option>
    </select>
    <div id="vastus2">Siis tuleb vastus...</div>
</form>
<img src="img/tyhi.png" alt="pilt" id="pilt">
<h1>Valuuta kalkulaator var 3</h1>
<form name="var3">
    <label for="kogus3">Sisesta kogus: </label>
    <input type="number" name="kogus3" id="kogus3"> EURO
    <br>
    <label for="valutanimi">Sisesta valuuta:(dollar, euro, kroon, frank) </label>
    <input type="text" name="valutanimi" id="valutanimi" placeholder="Valuuta nimetus">
    <input type="button" onclick="inputCurrencyText()" value="ON">
    <div id="vastus3">Siis tuleb vastus...</div>
</form>
<h1>Valuuta kalkulaator var minu</h1>
<form name="var4">
    <label for="kogus4">Sisesta kogus: </label>
    <input type="number" name="kogus4" id="kogus4"> ruutverste
    <br>
    <select name="metri" onchange="selectOptionChange2(event)">
        <option value=""></option>
        <option value="gekt">Hektar</option>
        <option value="km2">Kilomeetrid ruudus</option>
        <option value="m2">Ruutmeetrit</option>
        <option value="sm2">Sentimeetrid ruudus</option>
        <option value="mm2">Millimeetrid ruudus</option>
    </select>
    <div id="vastus4">Vastus...</div>
</form>

<a href="https://validator.w3.org/check?uri=referer"><img width="88" height="31" alt="W3C HTML5 certified"
                                                          src="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png">
</a>
<a href="https://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
         src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
         alt="Valid CSS!" />
</a>
<a href="https://github.com/Andreikorsunov/calculatorjetbrains">Calculator GitHUB</a>