import s from './Info.module.css'

export default function Info() {
  return (
    <div className={s.info}>
      <h1>Aitomäen Myllerrys</h1>
      <h2>8.-10.8.2025</h2>

      <p className={s.firstParagraph}>
        Hurjan suosion saanut Aitomäen Myllerrys järjestetään uudelleen! Tule opiskelemaan kansanomaisia paritansseja kolmen päivän ajan, kolmessa erilaisessa opetuksessa, kahdella eri tasolla ja kaksien vauhdikkaiden iltabileiden innostaessa väsyneet jalat kokeilemaan vielä kerran kaikkea opittua. Aitomäen Nuorisoseurantalo ja n. 200m päässä olevan Niemen navetan yliset takaavat tunnelmalliset puitteet leirille.
      </p>
      <a className='link'>
        Ilmoittautuminen aukeaa 5.5.2025 klo 17:00
      </a>


      <div className={s.grid}>
        <img className={s.opetusImg} src='/opetus.png' alt='Opetus' />

        <div className={s.opetusText}>
          <h2 className={s.h2}>Opetus</h2>

          <ul>
            <li>
              Opetuksen keskiössä on kansanomaiset paritanssit ja vapaan tanssin jamimeininki.
            </li>
            <li>
              Opetuksessa on kaksi tasoa: perustaso ja edistyneet.
            </li>
            <li>
              Opettajina on kansanomaisen paritanssin kovimmat nimet Jari Haavisto, Maiju Laurila ja Arttu Peltoniemi.
            </li>
          </ul>

          <a className='link' href='#Opetus'>
            Lue lisää opetuksesta
          </a>
        </div>


        <img className={s.jamitImg} src='/jamit.png' alt='Jamit' />

        <div className={s.jamitText}>
          <h2 className={s.h2}>Jamit</h2>
          <ul>
            <li>
              Vuoden eeppisimmät vapaan tanssin bileet perjantaina ja lauantaina.
            </li>
            <li>
              Lauantaina tanhuja tahdittaa kaikkien rakastama Konepajanpuisto-orkesteri.
            </li>
            <li>
              Jameissa Aito(mäen) navettatunnelma!
            </li>
          </ul>

          <a className='link' href='#Jamit'>
            Lue lisää jameista
          </a>
        </div>


        <img className={s.majoitusImg} src='/majoitus.png' alt='Majoitus' />

        <div className={s.majoitusText}>
          <h2 className={s.h2}>Majoitus ja ruokailut</h2>
          <ul>
            <li>
              Myllerryspakettiin kuuluvat ruokailut ja valitsemasi majoituspaketti.
            </li>
            <li>
              Majoitusvaihtoehtoina lattiamajoitus nuorisoseurantalolla, telttamajoitus pihalla tai hotellimajoitus Kouvolassa.
            </li>
            <li>
              Ruokaa on tarjolla yhdeksän aterian verran, aamupaloista iltapaloihin.
            </li>
          </ul>
          <a className='link' href='#MajoitusJaRuokailut'>
            Lue lisää majoituksesta ja ruokailuista
          </a>
        </div>
      </div>
    </div>
  )
}