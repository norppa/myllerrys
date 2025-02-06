import opetusPng from './assets/opetus.png'
import jamitPng from './assets/jamit.png'
import majoitusPng from './assets/majoitus.png'

import s from './Info.module.css'

export default function Info() {
  return (
    <div className={s.info}>
      <h1 className={s.h1}>Aitomäen Myllerrys</h1>
      <h2>16.-18.8.2024</h2>

      <p className={s.firstParagraph}>
        Aitomäen Myllerrys vastaa paritanssin nälkäisten kutsuun ja tarjoaa kaikelle kansalle mahdollisuuden opiskella kansanomaisia paritansseja kolmen päivän ajan, kolmen opettajan tunneilla, kahdella eri tasolla ja kaksien vauhdikkaitten iltabileiden innostaessa väsyneet jalat kokeilemaan vielä kerran kaikkea opittua.
      </p>
      <a className='link'>
        Ilmottaudu mukaan!
      </a>


      <div className={s.grid}>
        <img className={s.opetusImg} src={opetusPng} alt='Opetus' />

        <div className={s.opetusText}>
          <h2 className={s.h2}>Opetus</h2>

          <ul>
            <li>
              Opetuksen keskiössä kansanomaiset paritanssit ja jamimeininki.
            </li>
            <li>
              Kaksi tasoa: perustaso ja edistyneet.
            </li>
            <li>
              Opettajina vapaan jamitanssin kovimmat nimet Jari Haavisto, Maiju Laurila ja Arttu Peltoniemi.
            </li>
          </ul>

          <a className='link'>
            Lue lisää opetuksesta
          </a>
        </div>


        <img className={s.jamitImg} src={jamitPng} alt='Jamit' />

        <div className={s.jamitText}>
          <h2 className={s.h2}>Jamit</h2>
          <ul>
            <li>
              Iltajamit perjantaina ja lauantaina.
            </li>
            <li>
              Aito(mäen) navettatunnelma.
            </li>
            <li>
              Legendaarinen konepajanpuisto-orkesteri ja avoimet jamit.
            </li>
          </ul>

          <a className='link'>
            Lue lisää jameista
          </a>
        </div>


        <img className={s.majoitusImg} src={majoitusPng} alt='Majoitus' />

        <div className={s.majoitusText}>
          <h2 className={s.h2}>Majoitus</h2>
          <ul>
            <li>
              Majoitusvaihtoehtoina lattiamajoitus seurantalolla, telttamajoitus pihalla tai hotellimajoitus Kouvolassa.
            </li>
            <li>
              Myllerryspakettiin kuuluvat aamupala, lounas, päivällinen ja iltaruoka.
            </li>
          </ul>
          <a className='link'>
            Lue lisää majoituksesta
          </a>
        </div>
      </div>
    </div>
  )
}