# Tanult anyagok

Tipp: kulcsszavakat `így` jelöltem ;)

## 0. Bevezető szösszenetek
0.1. Általános elnevezések:
  * developer=fejlesztő=kód-író
  * engineer=mérnök=(fejlesztő + tesztelő is egyben ..ő igen ritka, de értékes állatfaj)

0.2. szintek :
minden fajta kocka foglalkozásnál (tesztelő, fejlesztő stb.) (nagyjából az összes informatikai=IT-s cégnél valami ilyesmi a ranglétra) :
 * egyetemi hallgató / tanuló (ami te is leszel majd) (ő még nem fixen dolgozik a cégnél)
 * junior (kisbogyó -ezt csak én mondom am :D)
 * medior (közepes -ezt csak én mondom am :D)
 * senior (érett -ezt csak én mondom am :D)
 * lead (vezető (DE NEM FŐNÖK!, ugyanis olyan igazi "főnöki rang" IT-ban nem igazán létezik...szerencsére...)(azonban nyílván vannak feletted álló emberek, akiknek be kell számolni a teljesítményedről, de szószerint nincs főnök.. bár attól még nem szólunk be senkinek szó szerint :D, erre is meg vannak a frankó hatékony IT-s elintézési módok, de azokról később)
 * architect (tervező)
 * chief (atyaúristen -ezt csak én mondom am :D)

## 1.  Software development processes (`Szoftver fejlesztési módszertanok` [- Bővebben](https://en.wikipedia.org/wiki/Software_development_process))
Vagyis: hogy szervezzük a munkánk?

**Briefly**:
Mikor egy programot akar egy csapat fejleszteni, akkor hogy a sikerességet garantálják, a szervezéseket és folyamatokat egy módszertan alapján hajtják végre. (pl: mint tűz esetén a menekülési terv) (nem csak úgy összevissza kódogálnak, kell valami szervezettség, ütemezés hogy ne csődöljön be a projekt és hatékonyak legyenek a dolgozók)
Érdekesség, hogy nemcsak az informatikai cégeknél használják ezeket a módszertanokat, hanem pl: autógyártásban, ad-hoc vendéglátásban is. Manapság az informatikai cégek esetében a legelterjedtebb módszer a Scrum, de hasznos tudni több régebbi módszertan lényegét is:

### 1.1 `Vízesés modell` [- Bővebben](https://en.wikipedia.org/wiki/Waterfall_model) 
>már annyira nem használják, de jó tudni mi is ez

...majd később írok még ide...

### 1.2 `V-modell` [- Bővebben](https://en.wikipedia.org/wiki/V-Model_(software_development))
>már annyira nem használják, de jó tudni mi is ez

...majd később írok még ide...
### 1.3. Spirális
>nem elterjedt, nem fontos
### 1.4. Prototípus
>nem elterjedt, nem fontos
### 1.5. ... 
>van még egy pár, de nem elterjedtek, nem fontosak
### 1.6. Agilis módszertanok [- Bővebben](https://en.wikipedia.org/wiki/Software_development_process#Agile_development)
>ezek manapság a menők, több fajtájuk van:
  * `Scrum` [- Bővebben](https://en.wikipedia.org/wiki/Scrum_(software_development))
    * Résztvevők (szakmai ágak): 
      * **csirkék** (ők kb az öltönyös puccos emberek):
        * `business analyst` : customerrel (megrendelő Józsi bácsival) tárgyal, felméri a kívánságait
        * `product owner` : ismer MINDEN featuret az elkészült progiban és a business analysttől kapott infók alapján megfogalmazza a jövőbeli feladatokat a fejlesztőknek, tesztelőknek (ezek a feladatok itt még csak nagyon vázlatszerűek pl: legyen egy belépő oldal (kb még semmi konkrétumot nem ír le (a konkrét dolgokhoz ő nem is ért, nem kocka, ő csak az "ötletmegfogalmazó öltönyös")))
        * `scrum-master` : az irányító, főszervező (pl: meetingek szervezése, vezetése, ütemezése)
      * **disznók** (akik kódolnak / írnak / vagyis: "dolgoznak" xD) 
        * `front-end developer / ui-developer - röviden: frontend-es` : ő a weblapkészítő / egyéb szines szagos oldalak összerakója (nem csak weboldal,... gyakorlatilag amit látsz felületet amit nyomogatni tudsz, azt mind ő csinálja: 
          * ezért is a front-end kifejezés: a progi eleje
          * "ui" jelentése: user interface: felhasználó által piszkálható-felület, szintén erre a fent említett felületre utal. Ez a felület csak "érzékeli" amit a felhasználó művel vele + megjeleníti a válaszreakciókat (ő csak kirajzolja, de nem ő "dolgozza/számolja ki" a választ))
        * `back-end developer - röviden: dev(Tibi szerint a frontendest is devként hívják, szerintem nem :D )` (pl: Zsu): a felület nyomogatására adott válaszokat mi készítjük el: pl start gombra elindul a játék a program mélyén, x-re meg bezárul. A back-end vagyis "hátsó-fél" a felhasználó által közvetlen nem látható (ezért is a neve, hogy hátul van a frontend-hez képest). Azonban feladata igen fontos: ő számol, gondolkozik, adatbázisba/fileba irogat/olvas belőle, működteti/élővé teszi a progit. 
        * `auto-tesztelő/test-automation engineer/Quality Assurance - röviden QA/tesztelő` ( pl: Tibb + te majd) :
        ő aki teszt-kódot ír, hogy tesztelje a developerek (front-end és back-end!) által írt program-kódot,ezáltal garantálja hogy tényleg helyesen működik-e az. (a developer mindig elfogult a saját kódjával kapcsolatban és általában nem azon töri a fejét, hogy hogy ronthatja el azt. (Bár kötelessége a devnek is ellenőrizni hogy helyesen működik-e a programkódja, de általában csak azt nézi hogy a helyes választ képes-e visszaadni (ezt hívjuk happy path-nak, ez a  helyes működés "útvonala", de erről majd kicsit később Tibbel beszéltek)) A ti feladatotok hogy sarokba szorítsátok és kiderítsétek hogy fura szituációkban (use-case-k="esetek") is elfogadható dolgokat produkál-e (ha nem akkor megy vissza a developer orra alá, h apukám ez nemlesz így jó..)
        * `manual-tesztelő röviden kismajom..najó nem xD`: ő az aki megnyomogatja KÉZZEL a progit (nem kódot ír, általában nem is tud kódot írni) DE! nem lenézni őket, mert az ügyesek rengeteg cseles fogást alkalmaznak, amivel csak ők képesek hibákat előidézni (se qa, se dev nem feltétlen gondolna rá)) (de tény h 
        általában a nagyon kezdőket ide merik felvenni első körben, és aki túl buta az bizony ottragad, ha ki nem penderítik ...)
        * `doksiíró` : aki ilyen szép szines szagos izéket ír a progiról, mint ez a doksi is :D,
        * `designer` az alkalmazás kinézetét megtervező ember. Gyakorlatilag a front-endesek az ő tervei alapján készítik el a felület kódját.
        * `dev-ops` (sokszor a back-end developer végzi az ő munkáját) developer + operations szavakból összevont, viszonylag nem régi szakmai ág. Ő aki biztosítja a többieknek a munkához szükséges környezeteket : pl felhőt ők tartják karban, ők készítik el a cd-re kiírható programot. Ők kicsit méginkább láthatatlan munkát végeznek, de elképzelhető milyen fontos a feladatuk, ha pl a programunk a felhőben fut és a felhő elromlik... na akkor minden disznónak megáll az élet.. nem tud haladni. + Ők akik tudják fejből a terminal-os összes parancsot és ilyen mátrixos a képernyőjük (később még egykét izgalmas feladatukról majd lesz szó (hogyan készül el a cd-re kiírható program amit Józsi bácsi majd tud használni?), de ahhoz még pár dolgot tisztázunk előtte)
        * ...több nem jut eszembe,de leht h még van pár szakma...
    * **Folyamat** : általában 2 hétig tartó `sprint`, ami alatt dolgozunk a feladatokon. A sprint végén az elkészült feladatokat/taskokat "átadjuk", véglegesnek és helyesnek nyílvánítjuk, amire a következő sprinten a többi task tud majd épülni. (További téma majd később: mi történik, ha egy taskot nem tudok befejezni a sprint végéig..ejjejj)
    * A folyamatban előforduló **Eventek**:
        * `Stand-up` : disznók rövid napi jelentése (a sprint közben): mit csináltam, mit fogok ma csinálni, van -e valami blokkolóm / kérdésem
        0. `Kick-off meeting`: (csak a disznók Leadjei vesznek részt ezen a meetingen) (a sprint indításának időpontja előtt tartják meg) Itt, a product owner által megfogalmazott vázlatos feladatokból(`epic`): épkézláb/feldarabolt/kisebb megvalósítható al-feladatokat (`storykat`, vagy a még részletesebb `sub-taskokat`) faragnak: feljegyzik az adott feladathoz a követelményt, az esetleges buktatókat, sőt sokszor még elkészítési ötletekkel is kiegészítik. (De hol vannak ezek az epic-ek/story-k/sub-task-ok(=ticketek)? ezt egy programban tároljuk, később ezt is majd ismertetjük, egyelőre elég ha úgy képzeled el, hogy egy táblán sok cetli van, amire feladatok vannak írva)
        1. `Grooming` : (minden disznó részt vesz) (A sprint indításának időpontja előtt történik meg) A taskok "nehézségének" (komplexitás + monotonitás) megbecslése (fibonacci-számok: 1-2-3-5-8-13 stb. és /vagy t-shirt size-ok: s,m,l,xl -mértékkel)(majd ilyet is csinálunk egyet :) ).
        2. `Planning` :  A taskok szétosztása az emberek közt. Majd a sprint elindítása.(itt fontos megjegyezni, hogy a csapatban nincs főnök, nem ő adja a taskokat az emberkenek, hanem a csapat közösen gondolkozva szétosztja maguk között (pl valakit az egyik téma jobban érdekel stb...nyílván van olyan dolog ami nem logikus és akkor inkább másnak lesz az adott feladat megszavazva, de elég laza ez így)
        3. `Demo`: A sprint végén az elkészült taskok bemutatása a product ownernek / customernek (Józsibácsinak) is akár
        4. `Retro` : Visszatekintés a sprintre (hogy a következőt méghatékonyabban lehessen csinálni és a jószokásokat megtartani): Javítási ötletek összeszedése, egymás buksijának simizése:D. Tipikusan egy 3 oszlopbol álló táblázatba szedjük össze az elmúlt sprintben történt dolgok által kiváltott véleményeket: mi ment jól(what went well) | min kellene javítani (improveable)| hogyan javítsunk rajta tervek (action item). Ilyenkor optimistán próbálunk hozzáállni, nem a verekedés/egymásra mutogatás (pl egy task nem készült el) a célja ennek. Mert mindent meg lehet oldani okosan is.  És mindennek van oka, és a következő sprintben figyelve ezekre sokkal jobb eredményt fogunk tudni kihozni a csapatból :)
  * `Kanban`[ - Bővebben](https://en.wikipedia.org/wiki/Kanban_(development))

    * Hasonlít a scrumhoz a résztvevők esetében.
    * Folyamat: itt nincs 2 hetes sprint, itt folyamatosan jönnek az új taskok, amik egy "táblán" (Kanban boardnak hívják tényleg) kerülnek fel az "új taskok" oszlopba. Ezen a táblán (akár virtuáls, akár igazi) az új taskokat fontosság szerint rendezzük mindig. Akinek épp nincs már feladata, az megfogja az új taskok oszlop legfelső (legfontosabb) elemét (ami az ő foglalkozása:pl front-end feladat) és elkezdi megcsinálni. (a tábla többi fontosabb oszlopai: in progress, at QA, finished). Első ránézésre is feltűnhet, hogy kevesebb meeting van itt, azonban ez a módszer csak nagyon azonos tudású/képeségű ,jól összeszokott csapattal működik jól, a tapasztalatok alapján.

  * `Scrumban` 
    
    * (ez gyakorlatilag a Scrum és Kanban mixe : Kanban táblát használnak, de x hetes sprintek vannak és a végén visszatekintenek, összegzik a történteket)


## Változók, függvények készítésére szolgáló kulcsszavak
* let
* const
* var
* function

## Adattípusok

### Egyszerű
* boolean : true/false
* számok:
  * javascript típusok:
    * number: javascriptben ez az egyféle típus van csak. ebbe bármilyen számot írhatunk ( 5, -3, 1.14)
  * javas típusok: 
    * integer (egész számok): 0,2,-4
    * float (lebegőpontos/tizedes-vesszsős/törtszám): 0,23
    * double : (bazinagyszám, duplaannyi hosszú mint az int): 214343254325523456233 (annyira nem fontos)
    * unsigned : előjel néklüli pozitív szám (annyira nem fontos)
    * long : (ez is vmi hosszú, tán a double 2x-ese.. v ilyesmi) (minden típusnak meg van a minimum és maximum értéke amúgy, nem vehet fel azért bármilyen nagy számot)
* String: "szöveg" vagy  'de ez is az'
* character: 'a'   vagy   '@'
* ...?

### Összetett
* object : {}
* ...?

### Tárolók (Container-ek)
* array : []   (push, pop fv-ek, indexelés)
* map (kulcs-érték párral tároló szatyor)
* set (halmaz (egy elem csak egyszer lehet benne(a többi fajta tárolóba egy elemet többször is bele tudok tenni. Mindkettőnek meg van a speckó felhasználási környezete, majd nézünk rá példát)))

## Műveletek [Bővebben](https://www.programiz.com/java-programming/operators)
### Egyszerű Műveleti jelek
* x+y
* x-y
* x*3
* x/3
* x%3

### Egy résztvevős műveletek
* ++x (jelentése: x = x+1 és ezzel megy tovább a program azznnal abba a ciklusba)
* x++ (jelentése: x = x+1)
* --x
* x-- (jelentése: x = x-1)

### Értékadás
* x=3
* x+=3  ( jelentése: x = x+3)
* x-=3  ( jelentése: x = x-3)
* x*=3  ( jelentése: x = x*3)
* x/=3  ( jelentése: x = x/3)
* x%=3  ( jelentése: x = x%3)

 ### Relációs kifejezések (hasonlítjuk az értékeiket egymáshoz)(!!!igaz vagy hamis lesz az eredményük!!!)
 * x==3
 * x===3
 * x!=3
 * x>3
 * x<3
 * x>=3
 * x<=3

 ### Logikai kifejezések (!!!igaz vagy hamis lesz az értékük!!!)
 * x&&y
 * x||y
 * !x
 * !(x&&y) = (!x)||(!y) bull shit



 ## Elborult, józan emberek által soha nem használt kifejezések [Bővebben](https://www.programiz.com/java-programming/bitwise-operators)
 * x&y
 * x|y
 * ~x
 * x^y (ez nem hatványozás!)
 * x<<2
 * x>>2
 * x>>>2

 ### Undormányok :D (avagy minden egyéb kirkszkraksz)
 * (x<3)? y : z (conditional operator)
 * (x<3)?: z  (Elvis operátor:    ?: ez olyan mint Elvis haja két szemmel)
 * mikor használom a ()-t és mikor a {} és mikor a []-t?!?
   * () - függvény
   * {} - blokk belseje
   * [] - tömb indexelés

## Vezértlési szerkezetek  
 * if - else (feltételes elágazás)
 * switch - case (többszörös feltételes elágazás)
 * ismétlések:
   * for - ciklus (fix hosszú ismétlés/végrehajtás)
   * while - ciklus (elöl tesztelős ismétlés)
   * do-while - ciklus (hátul tesztelős ismétlés)

## Javascript és Java fogalmak 
 * impelentáció
 * deklaráció
 * definíció
 * fordítás
 * inicializálás
 * debuggolás
 * truthy/falsy értékek
 * console.log()
 * // és /*  */ kommentelés
 * erősen/gyengén típusosság fogalma
 * es=echma script -> es6, es7 stb javascript verziók
 * hoisting (var a file elején deklaráltnak számít undefined értékkel)
 * string-template
 * műveleti jelek (operator) típusok, a benne szereplő elemek darabszámától függően:
   * unary (egy változó) : pl : x++
   * binary (2 változó) : pl x+y
   * ternary (3 változó): csak egy van ilyen, mégpedig a : (x<3)? y: z

## Terminal/ command line / console parancsok
 * cd x (change directory) -enter to x  subfolder if exsists
 * cd .. (1 mappával feljebb/kijjebb jön)
 * mkdir x (make x directory)

## Verziókezelős fogalmak:
 * miért jó?
 * miket ismersz?
   * svn (régi)
   * mercurial (régi)
   * git
 * parancsok consoleban:
   * git checkout valamirepóweblinkje.com
   * git pull
   * git commit -m "sajt"
   * git push
   * git fetch
 * fogalmak:
    * branch
    * merge
    * conflict (resolve conflict)
    * rebase


