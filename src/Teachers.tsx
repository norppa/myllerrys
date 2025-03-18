import s from './Teachers.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const descriptions = [
  <>
    <p>
      Jari on valmistunut Oulun seudun ammattikorkeakoulusta kansantanssinopettajaksi. Hän on opintojensa ohessa opiskellut unkarilaista kansantanssia Budabestissä Magyar Táncművészeti Főiskolassa. Jari opettaa Helsingissä Katajan kansanparitanssikursseja, sekä  kansantanssiryhmä Susirekkaa, jonka koreografioista ja taiteellisesta linjasta hän myös vastaa. Jari on opettanut useita ryhmiä pääkaupunkiseudulla 2000-luvun alusta asti sekä erikseen tilattavia tiiviskursseja ympäri maata ja mm. Unkarissa ja Yhdysvalloissa. Hän on myös koronapandemian aikana tehnyt sarjan Youtuben kautta levitettyjä opetusvideoita lukiolaisille vanhojen tanssien itsenäiseen etäopiskeluun. Tanssijana Jari on tanssinut useissa teoksissa vuosien varrella mm. Rimpparemmin, Mattien ja Maijojen ja Polskatroikan riveissä.
    </p>
    <p>
      Jaria kiinnostaa vapaan, sosiaalisen tanssin kontakti tanssiparin välisenä yhteisenä liikkeenä, jossa molemmat tanssijat ovat kokonaisuuden muodostumisessa merkityksellisiä. Tärkeitä metodeja Jarin tanssinopetuksessa on: mahdollistaa aloittavan ihmisen mahdollisimman nopea tanssilattialle uskaltaminen ja tanssista nauttiminen, jatkuva uuden oppiminen, parikontaktin kehittäminen ja musiikin tulkitseminen tanssilla.
    </p>
  </>,

  <>
    <p>
      Maiju on aloittanut opintonsa musiikin puolella ja siirtynyt siitä tanssin pariin. Maijulla onkin opetuskilometrejä niin musiikista, tanssista kuin koulusta. Hän on valmistunut musiikkikasvatuksesta (FM), Musiikkipedagogiksi (amk), Tanssinopettajaksi (YAMK), muusikoksi (ao). Maiju opettaa tanssia mm. Aitomäen nuorisoseurassa.
    </p>
    <p>
      Häntä kiinnostaa kansantanssin lisäksi paritanssi myös laajemmin, ja Maiju opettaa ja tanssii mielellään myös esimerkiksi lavatansseja. Paritanssissa häntä kiinnostavat erilaiset kontaktin muodot, eri tanssilajien tyypilliset piirteet sekä lajien yhdistäminen luovasti yhdeksi tanssiksi. Viime vuosina Maiju on opettanut omien ryhmiensä lisäksi monipuolisesti erilaisissa kouluttajan ja opettajan tehtävissä tanssin ja musiikin parissa. Nykyään Maiju työskentelee päivisin luokanopettajana ja iltaisin tanssinopettajana.
    </p>
  </>,


  <>
    <p>
      Arttu on Oulun seudun ammattikorkeasta valmistunut nyky- ja kansantanssin opettaja sekä tanssitaiteilija, joka tutkii työssään kansantanssin merkitystä nyky-yhteiskunnassa heijastaen sitä pohjoismaisen tanssin materiaaliin ja konteksteihin 1800- ja 1900-lukujen vaihteesta. Peltoniemelle kaikki tanssi on merkityksellistä ensisijaisesti tekijänsä sisäisenä ja tekijöiden välisenä kokemuksena. Arttu opettaa useissa pääkaupunkiseudun ryhmissä niin perinteisempää kansantanssia kuin rakastamaansa vapaata, kontaktiin perustuvaa kansanparitanssia. Opettamisen ohella hän työskentelee freelance-tanssitaiteilijana erilaisissa projekteissa ja esityksissä esim. Suomen Kansallisoopperassa ja Raakaa Tradia -kollektiivissa.
    </p>
    <p>
      Kansantanssin opettamista käsittelevässä työssään Peltoniemi on purkanut kansantanssin kuviot kontaktimetodeiksi ja rytmiikoiksi, joita harjoittelemalla tanssija voi toimia niin kutsutussa "epätietämisen" tilassa silti toteuttaen perinteistä liikemateriaalia. Tässä "epätietämisen" tilassa toimiva tanssija on kuitenkin aktiivinen tilanteen tarkkailija, joka ylläpitää kontaktia, yhteistä tai solistista toimintaa, kansantanssin liikeperiaatteita sekä yhteyttä musiikkiin. Harjoitellut liikelaadut ja askelrytmit sekä erilaiset hytkeet pitävät hetkessä syntyvän liikkeen tiukasti perinteeseen juurtuneena ollen kuitenkin tekijöilleen kokoajan juuri tässä tilanteessa syntyvää toimintaa, johon voi haltioituen upota.
    </p>
  </>,

  <>
    <p>
      Voluptate anim nisi tempor incididunt irure eiusmod duis aliquip nostrud commodo do occaecat. Tempor non cupidatat aliquip ea mollit officia ut. Commodo dolore aute sunt exercitation sint cupidatat consequat. Quis in magna ipsum ea officia. Lorem dolor sunt mollit magna deserunt dolor est et occaecat pariatur culpa non incididunt mollit. Consectetur reprehenderit exercitation amet excepteur ullamco labore cupidatat proident. Ad ad ex fugiat commodo laborum sint in velit consectetur cillum ea cillum mollit adipisicing. Quis enim commodo laborum culpa commodo elit. Nisi deserunt exercitation pariatur in aute.
    </p>
    <p>
      Sunt velit et esse incididunt labore laborum ipsum cupidatat commodo laboris incididunt minim ea. Ullamco id eu ullamco adipisicing nostrud laborum excepteur laborum qui ipsum laborum ad. Sunt sunt veniam magna qui cupidatat velit aliquip elit magna aute non sunt. Quis ea cillum id id ad. Lorem et mollit tempor deserunt adipisicing sit aliquip. Nulla pariatur id commodo aliquip in. Aliqua exercitation sunt ipsum ad nulla exercitation irure duis incididunt officia et dolor et cillum. Incididunt esse incididunt reprehenderit et velit incididunt aute velit nulla aliquip sunt irure.
    </p>
  </>
]

const teachers = ['Jari Haavisto', 'Maiju Laurila', 'Arttu Peltoniemi', 'Mari Solja']

export default function Teachers({ selected, setSelected }: { selected: number | null, setSelected: (i: number | null) => void }) {

  return (
    <div className={s.parallax}>
      <div className={s.parallaxBackground}></div>
      <div className={s.teachers}>
        <h1>Tiimi</h1>

        {selected === null
          ? (
            <div className={s.profiles}>
              {teachers.map((teacher, i) => (
                <div onClick={() => setSelected(i)}>
                  <img src={`/profile_${teacher.toLowerCase().replace(' ', '_')}.png`} alt={teacher} />
                  <h2>{teacher}</h2>
                </div>
              ))}
            </div>
          )
          : (
            <div className={s.profileContainer}>
              <FaChevronLeft className={s.chevron} onClick={() => setSelected((selected + 2) % 3)} />

              <div className={s.profile} onClick={() => setSelected(null)}>
                <h2>{teachers[selected]}</h2>
                <img src={`/profile_${teachers[selected].toLowerCase().replace(' ', '_')}.png`} alt={teachers[selected]} />
                {descriptions[selected]}
              </div>

              <FaChevronRight className={s.chevron} onClick={() => setSelected((selected + 1) % 3)} />

            </div>
          )}



      </div>
    </div>
  )
}