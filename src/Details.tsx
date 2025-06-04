import s from './Details.module.css'

const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.5845570800725!2d26.842052655598735!3d60.8639228876968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4691ad15f1b8e761%3A0x1adb3409e9f6c595!2sAitom%C3%A4en%20Nuorisoseura%20r.y.!5e0!3m2!1sfi!2sfi!4v1714114006373!5m2!1sfi!2sfi'



export default function Details() {
  return (
    <div className={s.details}>

      <div id='Info' className='anchor' />
      <h1>Tietoa leiristä</h1>
      <p className={s.firstParagraph}>
        Leiri järjestetään Kouvolan Aitomäessä, <a className='external-link' href='https://www.aitomaenns.net/'>Aitomäen nuorisoseurantalolla</a> sekä muutaman sadan metrin päässä olevan Niemen navetan ylisillä. Majoitus ja ruokailut tapahtuvat seurantalolla sekä navetan pihapiirissä, ja iltabileitä tanssitaan navetalla kunnes aamu sarastaa.
      </p>


      <div id='Opetus' className='anchor' />
      <h2>Opetus</h2>


      <img src='/opetus.png' className={s.leftImage} alt='Opetus' />
      <p>
        Leirin opetuksessa syvennytään paritanssin eri puoliin intensiivisesti, ja kurssilta saat taatusti pureskeltavaa niin paljon kuin haluat ottaa vastaan. Opetus tapahtuu kahdella tasolla ja tarjoaa laajan näkökulman kansanomaisen paritanssin eri puoliin. Kummallakin tasolla vaihdetaan paria ja roolia, mikä kehittää tarvittavia taitoja sosiaalisista paritanssitilanteista nauttimiseen. Opetuksen tavoitteena on antaa uusia lähestymistapoja ja materiaalia vapaaseen tanssiin ja laajentaa omalla paikkakunnalla tapahtuvaa tanssin oppimista.
      </p>

      <p>
        Leirillä ilmoittaudutaan joko perustason tai jatkotason opetukseen. Huomaathan, että meillä ei valitettavasti ole vielä resursseja tarjota alkeistason opetusta. Valitsemaansa tasoa voi vaihtaa kurssin aikana, mutta luethan tasokuvaukset huolellisesti. Opetusta on viikonlopun aikana 9 tuntia.
      </p>

      <p>
        <b>Perustasolla</b> toivotaan perustaidot kansanomaisten paritanssien askelista tai vahva paritanssikokemus muista lajeista. Tanssitunneilla paneudutaan mm. viemisen ja seuraamisen dynamiikkaan, eri tanssilajien lajityypilliseen hytkeeseen, tanssin ja musiikin yhteyteen sekä vapaaseen improvisaatioon. Tunneilla käytetään ainakin polskan, sottiisin, valssin, polkan ja masurkan askelikkoja. Näiden tanssilajien perusteet toivotaan olevan hallussa perustasolle ilmoittauduttaessa. Lisäksi opettajat saattavat käyttää myös muita askelikkoja, mutta näitä ei oleteta osattavan etukäteen.
      </p>

      <p>
        <b>Jatkotasolla</b> toivomme useamman vuoden kansantanssikokemusta ja vahvaa aiempaa harrastuneisuutta tai opintoja kansanparitansseista. Opetuksessa syvennetään parikontaktin käsittelyä sekä musiikin kanssa fraseerausta, etsitään tanssilajeille tyypillistä liikekieltä ja luodaan yhteyksiä muihin paritanssilajeihin. Jatkotasolle ilmoittautuessa tulee olla polskan, sottiisin, valssin, polkan, hambon ja masurkan askelikot luontevasti hallussa sekä kokemusta viennistä ja seuraamisesta. Opettaja saattaa käyttää myös muita tanssilajeja ja askelikkoja haastaen oppilaita uusiin asioihin.
      </p>

      <div id='Jamit' className='anchor' />
      <h2>Jamit</h2>

      <img src='/jamit.png' className={s.leftImage} alt='Jamit' />

      <p>
        Myllerrys tarjoaa vapaata tanssijamittelua kahtena iltana!
      </p>
      <p>
        Perjantaina soittolistat tarjoavat loppumattoman mahdollisuuden tanssia tuttujen ja uusien ihmisten kanssa, kokeilla päivän aikana opittuja taitoja ja nauttia Aitomäen tunnelmasta. Perjantaibileessä tutustut oman treenitasosi lisäksi toisen treenitason ihmisiin ja uskallat lähteä tanssimaan vieraan ihmisen kanssa. Mikäli soitat jotain instrumenttia, on lava vapaa myös soittojamittelulle. Bileet alkavat yhteisellä tanssituksella ja jatkuvat tämän jälkeen niin pitkään kuin tanssijoita tanssituttaa.
      </p>

      <p>
        Lauantaina meininkiä tahdittaa viime vuodestakin tuttu <a href='https://konepajanpuisto.gitlab.io/orkesteri/' className='external-link'>Konepajanpuisto-orkesteri</a> sekä myöhemmin illasta soittojamittelijat lähialueilta ja muualta. Illan aikana kaikki saavat hakea kaikkia, mistä roolista tahansa. Tansseja voi tanssia saman ihmisen kanssa yhden tai enemmän. Ja paljon tanssivia uskaltaa pyytää tanssimaan. Kokeile päivän aikana oppimiasi asioita, nauti meiningistä ja tanssi niin paljon kuin jaloista lähtee! Bileet alkavat illalla oppituntien jälkeen ja jatkuvat pikkutunneille tai vielä pidempään.
      </p>
      <p>
        Myllerryksessä toteutetaan <a href='https://kansantanssijamit.fi/katajan_turvallisemman_tilan_periaatteet.pdf' className='external-link'>turvallisemman tilan periaatteita.</a> ja jameissa on käytössä <a href='https://kansantanssijamit.fi/katajan_tanssietiketti.pdf' className='external-link'>Katajan tanssietiketti</a>.
      </p>



      <div id='MajoitusJaRuokailut' className='anchor' />
      <h2>Majoitus ja ruokailut</h2>

      <img src='/majoitus.png' className={s.leftImage} alt='Jamit' />

      <p>
        Myllerrykseen voi osallistua monin eri tavoin majoittumalla. Parhaan leirifiiliksen saat majoittumalla Myllerryksen majoitusvaihtoehdoissa, mutta omatoiminen majoittuminen hotellissa tai kotona (mikäli asut lähistöllä) onnistuu myös.
      </p>
      <p>
        Kaikkiin Myllerryksen paketteihin sisältyy yhdeksän tuntia opetusta, kahdet iltabileet, ruokailut ja peseytymismahdollisuus.
      </p>
      <p>
        Leiripaikan osoite on Aitomäentie 1007. Leirille on helppo saapua omalla autolla. Junalla pääsee Kouvolaan yhdeksän kilometrin päähän. Suunnitelmissa on jälleen yhteinen bussikuljetus juna-asemalta Aitomäkeen leirille ja takaisin. Tästä osallistujille lisää infoa lähempänä leiriä.
      </p>

      <p>
        Leirin ruokailu tapahtuu Aitomäen nuorisoseurantalolla. Kaikki ruoka on kasvisruokaa. Ilmoitathan joka tapauksessa ruokavaliosi ja ruoka-aineallergiasi ilmoittautumislomakkeella, jotta pystymme tarjoamaan kaikille tukevat ja turvalliset ateriat.
      </p>

      <p>
        Leiriin kuuluu seitsemän ruokailua:
        <br />&nbsp;&#x2022; Perjantai: iltaruoka
        <br />&nbsp;&#x2022; Lauantai: aamiainen, lounas, kahvi, päivällinen, iltaruoka
        <br />&nbsp;&#x2022; Sunnuntai: aamiainen
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

        <h3>Majoituspaketti ”Peruspaketti” 150€</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus omatoimisesti <a href='https://shorturl.at/HziJD' className='external-link'>hotellissa</a>, majoittuen kotonasi, tai omassa teltassa navetan pihapiirissä.
        </p>

        <h3>Majoituspaketti ”Teltta” 165€</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus Myllerryksen tarjoamassa teltassa nuorisoseurantalon pihalla. Riippuen telttamajoituksen osallistujamäärästä järjestämme paikalle joko tavallisia retkitelttoja tai puolijoukketeltan. Omat nukkumisvarusteet (patja, makuupussi yms.) mukaan. Huom. tämä majoitusvaihtoehto on sekamajoitus.
        </p>

        <h3>Majoituspaketti ”Kotimajoitus” 165 €</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus tapahtuu pyöräily- tai ajomatkan päässä asuvan aitomäkeläisen kotona pääosin lattiamajoituksessa (lakanat / makuupussi mukaan). Majoituksia järjestetään niin paljon kuin majoittajia riittää, ilmoittautumisjärjestyksessä. Mikäli majoittajia ei löydy riittävästi, leiriläistä pyydetään vaihtamaan vaihtoehtonsa johonkin muuhun pakettiin. Huomaathan, että tässä majoitusvaihtoehdossa emme voi tässä vaiheessa tietää, onko majoituksen tarjoaja itse paikalla leirin aikana.
        </p>

        <h3>Majoituspaketti ”Seuraintalo” 175 €</h3>
        <p>
          Sisältää opetusta 9 tuntia, kahdet iltabileet, mahdollisuuden käyttää suihkua sekä kaikki ruokailut. Majoitus tapahtuu nuorisoseurantalolla patjamajoituksessa. Tarvitset mukaan oman tyynyn, peiton, makuupussin tai muita tarvitsemiasi nukkumisvarusteita. Myllerrys tarjoaa patjat. Majoitus on pääosin sekamajoitusta, mutta kaksi sukupuolitettua tilaa (mies / nainen / muunsukupuolinen) on mahdollista järjestää; esitäthän toiveen ilmoittautumisen lisätiedoissa. Mikäli tarvetta on enemmälle kuin kahdelle sukupuolitetulle tilalle, tuottaja on yhteydessä tilaa toivoneisiin leiriläisiin ja etsimme yhdessä toimivan ratkaisun.
        </p>

      </div>

      <h2>Kaveripaketit</h2>
      <div className={s.packages}>
        <h3>Kaveripaketti ”Myötämäki” +20 € / +30 € / +50 €</h3>
        <p>
          Jos osallistut leirille, niin voit ostaa tämän paketin Majoituspaketin lisäksi! Myllerrys haluaa mahdollistaa harrastamisen myös vähempivaraisille vapaan kansanomaisen paritanssin tanssijoille. Voit maksaa omasta leiristäsi vähän enemmän, ja tämä raha jaetaan tasan alentamaan toisen kaveripaketin ostajien kurssimaksua. Mikäli et halua nimeäsi kerrottavan Myllerryksessä, kerrothan siitä meille (muussa tapauksessa kerromme tämän paketin ostaneiden nimet Myllerryksen päätöshetkessä).
        </p>

        <h3>Kaveripaketti ”Vastamäki” -?? €</h3>
        <p>
          Jos olet hankalassa taloudellisessa tilanteessa, mutta haluaisit ilmoittautua Myllerrykseen, valitse tämä paketti Majoituspaketin lisäksi. Pakettia ei voi valita pelkästään. Huomaathan, että alennuksen suuruus riippuu ”Myötämäki”-paketin ostaneiden ja muiden tämän paketin toivoneiden lukumäärästä! Emme julkaise tai kerro nimeäsi missään. Tieto mahdollisesta alennuksesta tulee ennen ilmaisen peruutusmahdollisuuden loppumista.
        </p>

      </div>

      <div id='Ilmoittautuminen' className='anchor' />
      <h2>Ilmoittautuminen</h2>
      <img src='/ilmo.png' className={s.leftImage} alt='Ilmoittautuminen' />

      <p>
        Kurssin hinta määräytyy valitsemasi majoituspaketin ja mahdollisen valitsemasi Myötä/Vastamäki-paketin mukaan. Kurssin hintaan sisältyy:
        <br />&nbsp;&#x2022; Yhdeksän tuntia opetusta
        <br />&nbsp;&#x2022; Valitsemasi majoituspaketti
        <br />&nbsp;&#x2022; Kahdet iltabileet
        <br />&nbsp;&#x2022; Ruokailut
      </p>

      <p>
        Ilmoittautuminen tehdään Katajan ilmoittautumislomakkeella. Ilmoittautumaan mahtuu 60 ensimmäistä ja paikat täyttyvät vauhdilla, joten ole nopea! Mikäli paikat tulevat täyteen, voit ilmoittautua varasijalle.
      </p>

      <p>
        Mahdollisen peruutuksen voi tehdä veloituksetta kuukautta ennen Myllerrystä. Tämän jälkeen valitsemasi leiripaketti veloitetaan kokonaisuudessaan. Voit esteen sattuessa kuitenkin myydä pakettisi eteenpäin toiselle tanssijalle.
      </p>
      <p>
        <b>Huom!</b> Ruokavalioiden muutokset voidaan huomioida vain kolmea viikkoa ennen ilmoitettaessa!
      </p>
      <p>
        Mikäli leiri tulee täyteen ja jonoon ilmoittautuu ihmisiä, voimme yhyttää peruutusajan jälkeen peruuttavan henkilön ja jonoon ilmoittautuneen. Ilmoita siis peruutuksestasi hyvissä ajoin, vaikka ilmainen peruutusaika olisikin jo mennyt!
      </p>

      <i style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: 40 }}>Leiri on täynnä, mutta voit edelleen ilmoittautua varasijalle</i>
      <a className={'link ' + s.ilmolink} href='https://kansantanssijamit.fi/myllerrys/ilmo'>Ilmoittaudu mukaan</a>

      <img src='/navettakuva.png' className={s.middleImage} alt='Viimeinen pari navetassa' />

    </div>
  )
}