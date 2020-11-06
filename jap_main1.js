
function aktorka() {
    // nic nie dostała wiec se sama zrobi
    let ubrania = "ubrania z szafy";
    
    if (czy_dobre == false) {
        naprawione_ubrania = krawcowa(ubrania);
    }
    console.log(`ubieram sie w ${naprawione_ubrania}`);

}
function krawcowa(ubrania_od_a) {
    ubrania_od_a = `naprawione ${ubrania_od_a}`;
    //console.log(ubrania_od_a);
    return ubrania_od_a;
}
let czy_dobre = false;
aktorka()


skladnik = 'kapusta'

function Karol_zrob_pierogi(skladnik)
{
    obiad = skladnik + " " + "z cebulka";
    skladnik = "pingwin zezar kapuste"
    asd = obiad
 console.log(`Zrób ${obiad}.`)
 
}
Karol_zrob_pierogi('pierogi')
console.log(asd)

const ciasto1 = {
    instrukcja: '3-stopniwoa',
    składniki: {
        mąka: '1 kilogram',
        jajka: '4 sztuki',
        woda: '200 ml',
    }

   
}

const ciasto2 = {
    instrukcja: '3-stopniwoa',
    składniki: {
        mąka: '1 kilogram',
        jajka: ciasto1.składniki.jajka,
        woda: '200 ml',
    }
}

console.log(ciasto1)
console.log(ciasto2)
