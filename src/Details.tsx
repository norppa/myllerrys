import s from './Details.module.css'

const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.5845570800725!2d26.842052655598735!3d60.8639228876968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4691ad15f1b8e761%3A0x1adb3409e9f6c595!2sAitom%C3%A4en%20Nuorisoseura%20r.y.!5e0!3m2!1sfi!2sfi!4v1714114006373!5m2!1sfi!2sfi'



export default function Details() {
  return (
    <div className={s.details}>

      <div id='Info' className='anchor' />
      <h1>Tietoa leiristä</h1>
      <p className={s.firstParagraph}>
        Aitomäen Myllerrys vastaa paritanssin nälkäisten kutsuun ja tarjoaa kaikelle kansalle mahdollisuuden opiskella kansanomaisia paritansseja kolmen päivän ajan, kolmen opettajan tunneilla, kahdella eri tasolla ja kaksien vauhdikkaitten iltabileiden innostaessa väsyneet jalat kokeilemaan vielä kerran kaikkea opittua.
      </p>


      <div id='Opetus' className='anchor' />
      <h2>Opetus</h2>


      <img src='/opetus.png' className={s.leftImage} alt='Opetus' />
      <p>
        Leirin opetuksessa syvennytään paritanssin eri puoliin.
      </p>

      <p>
        Perustasolla toivotaan perustaidot kansanomaisten paritanssien askelista tai vahva paritanssikokemus muista lajeista. Tanssitunneilla paneudutaan mm. viemisen ja seuraamisen dynamiikkaan, eri tanssilajien lajityypilliseen hytkeeseen, tanssin ja musiikin yhteyteen sekä vapaaseen improvisaatioon.
      </p>

      <p>
        Jatkotasolla syvennetään parikontaktin käsittelyä sekä musiikin kanssa fraseerausta, etsitään tanssilajeille tyypillistä liikekieltä ja luodaan yhteyksiä muihin paritanssilajeihin. Jatkotasolla toivomme useamman vuoden kansantanssikokemusta ja vahvaa aiempaa harrastuneisuutta tai opintoja kansanparitansseista.
      </p>

      <div id='Jamit' className='anchor' />
      <h2>Jamit</h2>

      <img src='/jamit.png' className={s.leftImage} alt='Jamit' />

      <p>
        Iltajameissa päästään ottamaan kurssien opit käyttöön ja pistämään jalalla koreasti svengaavan musiikin tahtiin. Jamimeininkiä on sekä perjantaina että lauantaina alkaen klo 18 ja päättyen kun tanssijat ja soittajat kupsahtavat nukkumaan. Puitteet tarjoaa Niemen navetta, jossa päästään autenttiseen folkkitunnelmaan. Illan aikana on tarjolla iltaruoka, jotta jaksetaan riehua myöhään yöhön asti. Navetassa ei ole alkoholitarjoilua, joten varustauduthan siltä osin henkilökohtaisin eväin mikäli sellaisia kaipaat.
      </p>
      <p>
        Lauantaiohjelman aloittaa Aitoniemen Orkesteri, joka nostaa tunnelman kattoon raisulla pelimannimeiningillä. Tanssilattilla on avoin sekahaku koko illan ja kaikki ovat tervetulleita niin viemään kuin seuraamaan. Virallisen bändin väsähdettyä jatketaan vapaamuotoisilla jameilla, joten jos mielesi tekee istahtaa soittajan tuolille, tuo mukaan oma soittimesi ja liity pelimanneihin.
      </p>

      <div id='Majoitus' className='anchor' />
      <h2>Majoitus</h2>


      <img src='/majoitus.png' className={s.leftImage} alt='Jamit' />



      <p>
        Myllerrykseen voi osallistua monin eritavoin majoittumalla. Parhaan leirifiiliksen saat majoittumalla Myllerryksen majoitusvaihtoehdoissa, mutta omatoiminen majoittuminen hotellissa tai kotona (mikäli asut lähistöllä) onnistuu myös. Kaikkiin Myllerryksen paketteihin sisältyy opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Leiri tapahtuu <a href='https://www.seurantalot.fi/talot/1820-aitom%C3%A4en-nuorisoseura-ry-1009'>Aitomäen nuorisoseuran talolla</a> sekä viereisen Niemen navetan ylisillä.
      </p>

      <div className={s.mapContainer}>
        <a id='maplink' href={mapSrc}>Nuorisoseuran talon sijainti kartalla</a>
        <iframe
          id='map'
          src={mapSrc}
          style={{ border: '0px' }}
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'>
        </iframe>
      </div>


      <h2>Majoituspaketit</h2>

      <div className={s.packages}>


        <h3>Majoituspaketti “Peruspaketti” 150€</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus omatoimisesti hotellissa https://shorturl.at/HziJD , majoittuen kotonasi, tai omassa teltassa navetan pihapiirissä.
        </p>

        <h3>Majoituspaketti “Teltta” 165€</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus puolijoukkueteltassa seuraintalon pihalla. Omat nukkumisvarusteet (patja, makuupussi yms) mukaan. Huom. tämä majoitusvaihtoehto on sekamajoitus.
        </p>

        <h3>Majoituspaketti “Kotimajoitus” 165€</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus tapahtuu pyöräily tai ajomatkan päässä asuvan aitomäkeläisen kotona pääosin lattiamajoituksessa (lakanat / makuupussi mukaan). Majoituksia järjestetään niin paljon kuin majoittajia riittää, ilmoittautumisjärjestyksessä. Mikäli majoittajia ei löydy riittävästi, leiriläistä pyydetään vaihtamaan vaihtoehtonsa johonkin muuhun pakettiin.
        </p>

        <h3>Majoituspaketti “Seuraintalo” 175€</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus tapahtuu seuraintalolla, patjamajoituksessa. Tarvitset mukaan oman tyynyn, peiton, makuupussin tai muita tarvitsemiasi nukkumisvarusteita. Myllerrys tarjoaa patjat. Majoitus on pääosin sekamajoitusta, mutta kaksi sukupuolitettua tilaa (mies / nainen / muunsukupuolinen) on mahdollista järjestää. Esitäthän toiveen ilmoittautumisen lisätiedoissa. Mikäli tarvetta on enemmälle kuin kahdelle sukupuolitetulle tilalle, tuottaja on yhteydessä tilaa toivoneisiin leiriläisiin ja etsimme yhdessä toimivan ratkaisun.
        </p>

      </div>

      <h2>Kaveripaketit</h2>
      <div className={s.packages}>
        <h3>Kaveripaketti “Myötämäki” +50€ (tai vaihtoehtoisesti 20€ / 30€ / 50€)</h3>
        <p>
          Jos osallistut leirille, niin tämä paketti ostetaan Majoituspaketin lisäksi! Myllerrys haluaa mahdollistaa harrastamisen myös vähempivaraisille vapaan kansanomaisen paritanssin tanssijoille. Voit maksaa 50€ enemmän ja tämä raha jaetaan tasan alentamaan “Vastamäki” kaveripaketin ostajien kurssimaksua. Mikäli et halua nimeäsi kerrottavan Myllerryksessä, kerrothan siitä meille. (muussa tapauksessa kerromme tämän paketin ostaneiden nimet Myllerryksen päätöshetkessä)
        </p>

        <h3>Kaveripaketti “Vastamäki” -?? € etiäpäin sanoi mummo lumessa</h3>
        <p>
          Jos olet hankalassa taloudellisessa tilanteessa, mutta haluaisit ilmoittautua Myllerrykseen, niin valitse tämä paketti Majoituspaketin lisäksi. Pakettia ei voi valita pelkästään. Huomaathan, että alennusmäärä riippuu “Myötämäki” -paketin ostaneiden ja muiden tämän paketin toivoneiden määrästä! Emme julkaise tai kerro nimeäsi missään. Tieto mahdollisesta alennuksesta tulee noin kuukautta ennen.
        </p>

      </div>

      <div id='Ruokailut' className='anchor' />
      <h2>Ruokailut</h2>
      <img src='/ruokailut.png' className={s.leftImage} alt='Ruokailut' />
      <p>
        Leirin hintaan kuuluvat kaikki leirin aikana tapahtuvat ateriat. Ruokailu tapahtuu Aitomäen nuorisotalolla. Mikäli sinulla on ruoka-ainerajoitteita, ilmoitathan niistä ilmoittautuessasi, jotta pystymme tarjoamaan kaikille tukevat ateriat.
      </p>
      <p>
        Leiriin kuuluu seitsemän ruokailua:
        <br />&nbsp;&#x2022; Perjantai: iltaruoka
        <br />&nbsp;&#x2022; Lauantai: aamiainen, lounas, kahvi, päivällinen, iltaruoka
        <br />&nbsp;&#x2022; Sunnuntai: aamiainen
      </p>

      <div id='Ilmoittautuminen' className='anchor' />
      <h2>Ilmoittautuminen</h2>
      <img src='/ilmo.png' className={s.leftImage} alt='Ilmoittautuminen' />

      <p>
        Kurssin hinta määräytyy valitsemasi majoituspaketin ja mahdollisen valitsemasi myötä/vastamäki paketin mukaan . Kurssin hintaan sisältyy:
        <br />&nbsp;&#x2022; Yhdeksän tuntia opetusta
        <br />&nbsp;&#x2022; Valitsemasi majoituspaketti
        <br />&nbsp;&#x2022; Kahdet iltabileet
        <br />&nbsp;&#x2022; Ruokailut
      </p>

      <p>
        Ilmoittautuminen tehdään Katajan ilmoittautumislomakkeella. Ilmoittautumaan mahtuu 60 ensimmäistä ja paikat täyttyvät vauhdilla, joten ole nopea! Mikäli paikat tulevat täyteen, voit ilmoittautua varasijalle.
      </p>

      <a className='link'>Ilmoittaudu Myllerrykseen</a>

      <br />
      <br />
      <img src='/navettakuva.png' className={s.middleImage} alt='Viimeinen pari navetassa' />

    </div>
  )
}