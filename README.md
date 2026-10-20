# Jarvis hemskärm v2 – planeringstavla för kylskåpet

En enda fil (`index.html`) för en gammal iPad Air 2 (iOS 15, Safari 15).
Byggd för liggande läge (1024×768) men fungerar även stående (768×1024).
Allt är på svenska och kan ändras direkt på plattan.

## Det här finns

| Vy | Innehåll |
|---|---|
| **Hem** | Stor klocka, datum, vecka och Jarvis hälsning. Vädret just nu med timmar och 5 dagar framåt. **Nästa** (nästa händelse med nedräkning). Påminnelser: timers, sophämtning, födelsedagar, nedräkning till högtid. Idag, Ikväll äter vi och Inköp i korthet. |
| **Idag** | Att göra (bocka av), dagens schema, hämtning, veckans sysslor och lappar till varandra. |
| **Vecka** | Måndag till söndag med händelser och veckans middagar. Bläddra framåt och bakåt. Viktiga datum (födelsedagar, årsdagar) med ålder. |
| **Mat** | Veckomeny med middag per veckodag. **Till inköp** lägger ingredienserna i inköpslistan (en dag eller hela veckan, utan dubbletter). |
| **Inköp** | Sorterat per avdelning: Frukt & grönt, Mejeri, Kött & fisk, Skafferi, Hushåll, Övrigt. Avdelningen gissas från vanliga svenska ord. Flera varor går att lägga till samtidigt med komma. Favoriter läggs till med ett tryck. |
| **Sysslor** | Per person. ↻-sysslor byter person varje måndag och allt nollställs varje vecka. Sophämtning och återvinning varje, varannan eller var fjärde vecka. |
| **Timer** | Flera namngivna timers med stor nedräkning, paus och +1 min. När tiden är ute: blinkande helskärm och pip. |
| **Inställningar** | Namn, väderort (sök), tema, semesterläge, rörelse, glaseffekt, skärmsläckare, nattdämpning, ljud, nedräkning, säkerhetskopia. |

Händelser kan upprepas varje vecka, varannan vecka, varje månad eller varje år.
Varje sak kan märkas Patrik, Sambo eller Båda. Namnen ändras i Inställningar.

Skärmsläckaren startar efter valt antal minuter utan beröring (standard 5 min).
Den visar en stor klocka, vädret och nästa händelse, och flyttar sig långsamt
så att inget bränns in i skärmen. Tryck för att väcka.

Kontrast: ljus text på mörka ytor, mörk text bara på ljusa ytor (knappar, lappar,
inmatningsfält, dialogrutor). Alla teman och vyer har kontrollerats automatiskt.
Svagaste text ligger på kontrast 7:1 (WCAG AAA).

## Teman (byts automatiskt efter datum)

| Tema | När |
|---|---|
| Nyår (fyrverkerier) | 27 dec – 2 jan |
| Jul & advent (ljusslinga, snö) | första advent – 26 dec |
| Vinter (snö) | 3 jan – 15 mars |
| Alla hjärtans dag | 10–14 feb |
| Påsk | palmsöndagen – annandag påsk (räknas ut) |
| Valborg (brasglöd) | 27 apr – 1 maj |
| Midsommar (blommor, vimplar) | veckan före midsommarafton – midsommarsöndag (räknas ut) |
| Sommar (solnedgång) | 1 juli – 15 aug |
| Höst (löv) | 1 sep – 30 nov |
| Halloween | 25 okt – 1 nov |
| Standard (petrol) | resten av året |

**Semesterläge** (hav, vimplar) går före allt annat. Det slås på i Inställningar.
Rörelsen i bakgrunden kan stängas av om plattan känns seg.

## 1. Få upp sidan på iPaden

Sidan måste hämtas från en webbadress en gång.

**A. Från datorn hemma (enklast att testa)**
1. Kopiera mappen `hemskarm` till datorn.
2. Kör `python3 -m http.server 8017` i mappen.
3. Öppna `http://DATORNS-IP:8017/` i Safari på iPaden.

Nackdel: laddar plattan om sidan medan datorn är avstängd kommer den inte upp.

**B. Gratis webbhotell med https (rekommenderas)**, t.ex. GitHub Pages eller Netlify.
Då aktiveras offline-cachen (`sw.js`) och sidan startar även utan internet.
Listorna ligger aldrig på servern, bara på plattan.

## 2. Lägg till på hemskärmen

Safari → dela-knappen → **Lägg till på hemskärmen**. Starta alltid via ikonen "Jarvis"
(helskärm). **Viktigt:** appen på hemskärmen och Safari-fliken sparar data var för sig.
Lägg till på hemskärmen först och fyll sedan i.

## 3. Låt skärmen vara på

Safari kan inte hålla skärmen vaken på egen hand:
- **Inställningar → Skärm och ljusstyrka → Automatisk låsning → Aldrig**, och ha laddaren i.
- Valfritt: **Hjälpmedel → Guidad åtkomst** (starta med tre tryck på hemknappen) så
  att ingen råkar stänga appen.
- Hemskärmen dämpar sig själv kl. 23–06 (kan stängas av).

## 4. Väder

Välj ort i Inställningar → Väder → sök → tryck på rätt träff. Data kommer från
Open-Meteo (gratis, ingen nyckel) och uppdateras var 30:e minut. Senaste prognosen
sparas. Utan nät visas den med märkningen *offline · klockslag*.

## 5. Timerljud

iPad tillåter ljud först när någon har rört skärmen. Rör skärmen en gång efter start,
eller tryck **Testa ljud** i Inställningar. Ljudet följer plattans volym och tystlägesknapp.
Den blinkande helskärmen visas alltid, även utan ljud.

## 6. Säkerhetskopia

Allt sparas bara på iPaden. Inställningar → **Exportera fil**. Om nedladdning inte
fungerar i helskärmsläge: **Visa som text** → kopiera → klistra in i Anteckningar.
Återställ med **Importera fil** eller **Importera text**.
Data från v1 flyttas över automatiskt första gången v2 öppnas.

## 7. Dagligt meddelande från Jarvis (förberett)

Sidan letar varje timme efter `dagens.json` bredvid `index.html`. Se `dagens.exempel.json`.
`meddelande` visas under hälsningen, `handelser` läggs in i kalendern och `inkop`
i inköpslistan. Om Jarvis får skriva filen varje morgon där sidan ligger (t.ex. ett
GitHub Pages-förråd), dyker dagens rad upp av sig själv.

## 8. Begränsningar

- Data finns bara på den här iPaden. Ingen synk med telefonerna.
- Raderar man webbplatsdata, eller tar bort ikonen, försvinner listorna. Ha en säkerhetskopia.
- Timers fortsätter räkna även om sidan laddas om, men iPaden kan inte pipa när skärmen är låst.
- Sysslornas rotation växlar strikt varannan vecka. Den räknar inte vem som faktiskt gjorde vad.
- Kategorigissningen är en ordlista. Okända varor hamnar i Övrigt och kan flyttas för hand.

## Filer

| Fil | Vad |
|---|---|
| `index.html` | Hela appen (v2). |
| `v1-index.html` | Förra versionen, som reserv. |
| `manifest.webmanifest`, `icon-*.png` | Namn och ikon på hemskärmen. |
| `sw.js` | Offline-cache (bara via https). |
| `dagens.exempel.json` | Format för dagligt meddelande. |
| `src/` | Källdelar som `index.html` sätts ihop av (`cat src/* > index.html`). Behövs inte på plattan. |
| `test/` | Testsidor och skript (funktionstest, kontrastgranskning, skärmdumpar). Behövs inte på plattan. |
| `screens/` | Skärmdumpar. |

## Testläge (på en dator, inte på plattan)

`index.html?datum=2026-12-10&tid=08:00` låtsas att det är ett annat datum. Andra parametrar:
`?tema=midsommar`, `?vy=inkop`, `?saver=1` och `?wx=fixture` (låtsasväder utan nät).
Ett låtsat datum kan räknas som en ny dag och rensa avbockade uppgifter, så använd det inte på riktig data.
