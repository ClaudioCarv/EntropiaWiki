const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const botaoeikko = document.getElementById("botaoeikko")
const eikko = document.getElementById("eikko");
const imagemtrocartema = document.querySelector(".imagem-botao");
const darkstar = document.querySelector(".logo")
const body = document.querySelector("body");
const txta1 = document.getElementById("ta1")
const txta2 = document.getElementById("ta2")
const txta3 = document.getElementById("ta3")
const txta4 = document.getElementById("ta4")
const txta5 = document.getElementById("ta5")
const txta6 = document.getElementById("ta6")
const txta7 = document.getElementById("ta7")
const txta8 = document.getElementById("ta8")
const txta9 = document.getElementById("ta9")
const txta10 = document.getElementById("ta10")
const txta11 = document.getElementById("ta11")
const element1 = document.getElementById("abismado1")
const element2 = document.getElementById("abismado2")
const element3 = document.getElementById("abismado3")
const element4 = document.getElementById("abismado4")
const element5 = document.getElementById("abismado5")
const element6 = document.getElementById("abismado6")
const element7 = document.getElementById("abismado7")
const element8 = document.getElementById("abismado8")
const element9 = document.getElementById("abismado9")
const element10 = document.getElementById("abismado10")
const element11 = document.getElementById("abismado11")
const page = document.getElementById("page")
const elementos = document.getElementById("inicio")
const eiko = document.getElementById("eiko")
const soundabismo = document.getElementById("abismosound")
let contador = 0;


botaoeikko.addEventListener("click", function(){
    contador++;

    if(contador === 11){
        body.classList.add("modo-eikko");
        imagemtrocartema.setAttribute("src", "./src/imagens/eye.png");
        darkstar.setAttribute("src", "./src/imagens/stardark.png");
        eikko.style.display = 'block'
        botaoAlterarTema.disabled = true;
        txta1.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta1.classList.add("abismotxt");
        txta2.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta2.classList.add("abismotxt");
        txta3.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta3.classList.add("abismotxt");
        txta4.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta4.classList.add("abismotxt");
        txta5.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta5.classList.add("abismotxt");
        txta6.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta6.classList.add("abismotxt");
        txta7.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta7.classList.add("abismotxt");
        txta8.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta8.classList.add("abismotxt");
        txta9.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta9.classList.add("abismotxt");
        txta10.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta10.classList.add("abismotxt");
        txta11.textContent = "O ∀ᙠISWO Ǝ̗ INƎΛI⊥∀̗ΛƎ˥ ∀ᙠᴚ∀ƆƎ O ∀ᙠISWO ∀ᙠᴚ∀ƆƎ Ǝ˥Ǝ ԀᴚOƆ∩ᴚ∀ ԀOᴚ ΛOƆƎ̮";
        txta11.classList.add("abismotxt");
        element1.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element1.classList.add("abismotxt");
        element2.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element2.classList.add("abismotxt");
        element3.textContent = "AÄ̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element3.classList.add("abismotxt");
        element4.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element4.classList.add("abismotxt");
        element5.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element5.classList.add("abismotxt");
        element6.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element6.classList.add("abismotxt");
        element7.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element7.classList.add("abismotxt");
        element8.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element8.classList.add("abismotxt");
        element9.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element9.classList.add("abismotxt");
        element10.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element10.classList.add("abismotxt");
        element11.textContent = "Ä̵͈̗́͌͑̅̃̉̏͐͜͝P̶̥̭͖͍̙̮̜͚͕̣͊́͛̓̂́͆Ë̵̱͍͖̺̰̺̝̟͊̽̌̈́́̾͘ͅN̴͚̜̳̜͇̫͇̪͔͉̅̿̂̂̽̅̏́̕A̴͔͒̇̍̒S̵̛̺̗̜̪̾̓͒̅̑͛͘ ̷̡̹̯̱͍̚ͅO̵̪̹̮̺̗̼͂ ̴̧̢̦̮̘̝̰̱̣͆̂̋̓̽̇̎̂̌ͅA̷̧͉͍̻̱̲̲̲̮̞͒͋B̵̪̩͚̭̤̠̫͎̖̀́̾͜͝Į̵̥̝̪̉͊͘͜͝S̴̨̩͕̖̗̐̔̒M̷͈̮̖͚͓͖͖̦̘̉͒̿̄O̵̢̻̘̺̔͂͂̈́̃̓ ̷̨̡̮͕̦̇̐͝ͅȨ̵̛̛̪͔͚͈́̂̊̑̅̏̈̌̚ ̷͎̅̆̌̏͠Ṇ̶̨̞͖͜͝E̸̥̔C̷͇̟̗̜͋̀E̶̢̙̭̬̮̙͕̐Ş̶̢̨͎͉̤̫̫̹̻̋S̸̛̝̫̞͚̻̦̓͑͊̈́̏̂̕Á̴̟̯̎̂R̴͖̺̰͚̋̀͆͂̄̚̕Ḯ̵̥̤̥̋̊͂̃̌̌̓͝͝Ő̶͎͈̤̭̏̉͐̈̇͘ ̷̟̠̠̫̫͒̇̋̊̂͛̒̽̽P̸̫̩̋ͅA̸͎̯̱̜̯̼̥̥͆̃͒͛R̵̯͙̝͗̄̉̿͆̆̿͌͌̕A̴̧̧̮̟̤͚̘͑̊ ̸͕̺̯͌̄́̾̊͑͐Ḛ̵̢̡̗͍͍͇̤̽̃̒͋͝S̶̮͓̳̠͋͊̓̉ͅS̶͔͕̯̬͖̹̱͍̖̓̿̊ͅE̶̥̎̑̆̒͝ ̴̢̺̳͔̥̦͍̋M̶̥͖̲̟̝̥̒͘U̴̺̗̬̥͚͔̤̻̔̈́̊̐̐͗͑̒N̸͕̈̾̈́̇̇̈́D̴̥͓̂̓̉̀̾O̶̦̱̖͇̱̮͆͆́̓͂̍͘͜͠͝ͅ";
        element11.classList.add("abismotxt");
    }
});


botaoAlterarTema.addEventListener("click", () => {
    const modoescuroativo = body.classList.contains("modo-escuro");

    if (modoescuroativo) {
        body.classList.remove("modo-escuro")
        imagemtrocartema.setAttribute("src", "./src/imagens/sun.png");
    }else {
        body.classList.add("modo-escuro");
        imagemtrocartema.setAttribute("src", "./src/imagens/moon.png");

    }
})


eiko.addEventListener("click", function(){
    const eiku = "./src/imagens/eikkoimg.png";
    soundabismo.play();
    window.open(eiku);
})