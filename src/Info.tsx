import s from './Info.module.css'

export default function Info() {
  return (
    <div className={s.info}>
      <h1>Aitomäen Myllerrys</h1>
      <h2>16.-18.8.2024</h2>

      <p className={s.firstParagraph}>
        Aitomäen Myllerrys vastaa paritanssin nälkäisten kutsuun ja tarjoaa kaikelle kansalle mahdollisuuden opiskella kansanomaisia paritansseja kolmen päivän ajan, kolmen opettajan tunneilla, kahdella eri tasolla ja kaksien vauhdikkaitten iltabileiden innostaessa väsyneet jalat kokeilemaan vielä kerran kaikkea opittua.
      </p>
      <a className='link'>
        Ilmottaudu mukaan!
      </a>


      <div className={s.grid}>
        <img className={s.opetusImg} src='/opetus.png' alt='Opetus' />

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

          <a className='link' href='#Opetus'>
            Lue lisää opetuksesta
          </a>
        </div>


        <img className={s.jamitImg} src='/jamit.png' alt='Jamit' />

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

          <a className='link' href='#Jamit'>
            Lue lisää jameista
          </a>
        </div>


        <img className={s.majoitusImg} src='/majoitus.png' alt='Majoitus' />

        <div className={s.majoitusText}>
          <h2 className={s.h2}>Majoitus ja ruokailut</h2>
          <ul>
            <li>
              Myllerryspakettiin kuuluu täysihoito sisältäen majoituksen ja ruokailut.
            </li>
            <li>
              Majoitusvaihtoehtoina lattiamajoitus seurantalolla, telttamajoitus pihalla tai hotellimajoitus Kouvolassa.
            </li>
            <li>
              Ruokaa on tarjolla yhdeksän aterian verran, aamupaloista iltapaloihin.
            </li>
          </ul>
          <a className='link' href='#Majoitus'>
            Lue lisää majoituksesta ja ruokailuista
          </a>
        </div>
      </div>
    </div>
  )
}