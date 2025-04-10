import s from './Teachers.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const descriptions = [
  <>
    <p>
      Jari on valmistunut Oulun seudun ammattikorkeakoulusta kansantanssinopettajaksi. Hän on opintojensa ohessa opiskellut unkarilaista kansantanssia Budapestissä Magyar Táncművészeti Főiskolassa. Jari opettaa Helsingissä Katajan kansanparitanssikursseja sekä kansantanssiryhmä Susirekkaa, jonka koreografioista ja taiteellisesta linjasta hän myös vastaa. Jari on opettanut useita ryhmiä pääkaupunkiseudulla 2000-luvun alusta asti sekä erikseen tilattuja tiiviskursseja ympäri maata ja mm. Unkarissa ja Yhdysvalloissa. Hän on myös koronapandemian aikana tehnyt sarjan Youtuben kautta levitettyjä opetusvideoita lukiolaisille vanhojentanssien itsenäiseen etäopiskeluun. Tanssijana Jari on tanssinut useissa teoksissa vuosien varrella mm. Rimpparemmin, Mattien ja Maijojen ja Polskatroikan riveissä.
    </p>
    <p>
      Jaria kiinnostaa vapaan, sosiaalisen tanssin kontakti tanssiparin välisenä yhteisenä liikkeenä, jossa molemmat tanssijat ovat kokonaisuuden muodostumisessa merkityksellisiä. Tärkeitä metodeja Jarin tanssinopetuksessa on mahdollistaa aloittavan ihmisen mahdollisimman nopea tanssilattialle uskaltaminen ja tanssista nauttiminen, jatkuva uuden oppiminen, parikontaktin kehittäminen ja musiikin tulkitseminen tanssilla.
    </p>
  </>,

  <>
    <p>
      Maiju on aloittanut opintonsa musiikin puolella ja siirtynyt siitä tanssin pariin. Maijulla onkin opetuskilometrejä niin musiikista, tanssista kuin koulusta. Hän on valmistunut musiikkikasvatuksesta (FM), musiikkipedagogiksi (amk), tanssinopettajaksi (YAMK) ja muusikoksi (ao). Maiju opettaa tanssia mm. Aitomäen nuorisoseurassa.
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
      Kansantanssin opetustyössään Peltoniemi on purkanut kansantanssin kuviot kontaktimetodeiksi ja rytmiikoiksi, joita harjoittelemalla tanssija voi toimia eräänlaisessa ”epätietämisen” tilassa silti toteuttaen perinteistä liikemateriaalia. Tässä ”epätietämisen” tilassa toimiva tanssija on kuitenkin aktiivinen tilanteen tarkkailija, joka ylläpitää kontaktia, yhteistä tai solistista toimintaa, kansantanssin liikeperiaatteita sekä yhteyttä musiikkiin. Harjoitellut liikelaadut ja askelrytmit sekä erilaiset hytkeet pitävät hetkessä syntyvän liikkeen tiukasti perinteeseen juurtuneena mutta ovat kuitenkin tekijöilleen koko ajan juuri tässä tilanteessa syntyvää toimintaa, johon voi haltioituen upota.
    </p>
  </>,

  <>
    <p>
      Mari Solja on taidealan sekatyöläinen, kasvatustieteen maisteri ja pitkän linjan freelance-tuottaja. Mari on  tuottanut viimeisten vuosikymmenten aikana lukuisia kansantanssin ja kansanmusiikin tapahtumia pääkaupunkiseudulle, esimerkiksi Tupajamit - neljän folkin bileet, Alppipuiston kesän festarikokonaisuuteen kuuluva Puistokarkelot useana vuonna ja usean ryhmän yhteistyökonsertit Elokarkelot sekä Susilykkyä. Viime syksynä Mari pääsi edistämään rakastamansa kansanomaisen paritanssin mahdollisuuksia: hän tuotti Museoviraston ja Kansanmusiikin ja Kansantanssin Edistämiskeskuksen Tanssitupa-projektin, jossa vapaan kansanomaisen paritanssin ja tanssisoiton tapahtumia käynnistettiin neljään kaupunkiin Suomessa. Mari on myös opettanut kansantanssia mm. Opiskelijakansantanssijoissa, lukuisilla viikonloppukursseilla, Kaustisen Katajapajoissa sekä Katajan teemapajoissa.
    </p>
    <p>
      Marin intohimona on vapaan kansanomaisen paritanssin mahdollisuuksien luominen tapahtumien ja opetuksen keinoin. Periaatteena kaikessa tuottamisessa on, että asia tehdään isosti ja niin, että osallistujilla on hauskaa, tai ei ollenkaan. Marin unelmana on kasvattaa kansanparitanssin skene yhtä isoksi kuin lavatanssi on tällä hetkellä.
    </p>
  </>
]

const teachers = ['Jari Haavisto', 'Maiju Laurila', 'Arttu Peltoniemi', 'Mari Solja']
const titles = ['Opettaja', 'Opettaja', 'Opettaja', 'Tuottaja']

export default function Teachers({ selected, setSelected }: { selected: number | null, setSelected: (i: number | null) => void }) {

  return (
    <div className={s.parallax}>
      <div className={s.parallaxBackground}></div>
      <div className={s.teachers}>
        <div id='Myllerrystiimi' className='anchor' />
        <h1>Myllerrystiimi</h1>

        {selected === null
          ? (
            <div className={s.profiles}>
              {teachers.map((teacher, i) => (
                <div onClick={() => setSelected(i)}>
                  <img src={`/profile_${teacher.toLowerCase().replace(' ', '_')}.png`} alt={teacher} />
                  <h2>{teacher}<br />{titles[i]}</h2>
                </div>
              ))}
            </div>
          )
          : (
            <div className={s.profileContainer}>
              <FaChevronLeft className={s.chevron} onClick={() => setSelected((selected + 2) % 4)} />

              <div className={s.profile} onClick={() => setSelected(null)}>
                <h2>{teachers[selected]} - {titles[selected]}</h2>
                <img src={`/profile_${teachers[selected].toLowerCase().replace(' ', '_')}.png`} alt={teachers[selected]} />
                {descriptions[selected]}
              </div>

              <FaChevronRight className={s.chevron} onClick={() => setSelected((selected + 1) % 4)} />

            </div>
          )}



      </div>
    </div>
  )
}