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
        Leiri tapahtuu <a href='https://www.seurantalot.fi/talot/1820-aitom%C3%A4en-nuorisoseura-ry-1009'>Aitomäen nuorisoseuran talolla</a> sekä viereisen Niemen navetan ylisillä.
      </p>
      <p>
        Majoitus tapahtuu seuraintalon majoitustiloissa, jossa on sängyt 20 ihmiselle ja paljon tilaa omien patjojen kanssa tuleville. Ota mukaasi omat petivaatteet ja halutessasi myös tyyny. Koska patjoja on rajoitetusti, pyydämme, että jos vain suinkin kykenet, saavut oman patjan kanssa.
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









      <div id='Ruokailut' className='anchor' />
      <h2>Ruokailut</h2>

      <img src='/ruokailut.png' className={s.leftImage} alt='Ruokailut' />
      <p>
        Kurssiin kuuluu täysihoito, eli majoitusten lisäksi kurssilaisille tarjotaan kaikki ruoat kurssin aikana. Tarjolla on perjantaina iltaruoka, lauantaina aamupala, lounas, välipala, päivällinen ja iltaruoka, sekä sunnuntaina vielä aamupala.
      </p>
      <p>
        Mikäli sinulla on ruoka-ainerajoitteita, ilmoitathan niistä ilmoittautuessasi, jotta pystymme tarjoamaan kaikille tukevat ateriat.
      </p>
      <p>
        ########
      </p>
      <p>
        ########
      </p>
      <p>
        ########
      </p>









      <div id='Ilmoittautuminen' className='anchor' />
      <h2>Ilmoittautuminen</h2>
      <img src='/ilmo.png' className={s.leftImage} alt='Ilmoittautuminen' />

      <p>
        Kurssin hinta on 100€. Kurssin hintaan sisältyy
        <ul>
          <li>Yhdeksän tuntia opetusta</li>
          <li>Majoitus Aitomäen seurantalolla</li>
          <li>Kahdet iltabileet</li>
          <li>Ruokailut</li>
        </ul>
      </p>

      <p>
        Ilmoittautuminen tehdään Katajan ilmoittautumislomakkeella. Ilmoittautumaan mahtuu 60 ensimmäistä ja paikat täyttyvät vauhdilla, joten ole nopea! Mikäli paikat tulevat täyteen, voit ilmoittautua varasijalle.
      </p>

      <p>
        ########
      </p>
      <p>
        ########
      </p>

      <a className='link'>Ilmoittaudu Myllerrykseen</a>

      <br />
      <br />
      <img src='/navettakuva.png' className={s.middleImage} alt='Viimeinen pari navetassa' />

    </div>
  )
}