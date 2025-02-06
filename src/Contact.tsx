import { FaFacebookSquare } from 'react-icons/fa'
import katajaLogoPng from './assets/kataja_logo_alpha.png'
import s from './Contact.module.css'

const Contact = () => {

  return (
    <div className={s.contact}>
      <div>
        Tapahtuman järjestää:
        <a href='https://www.kansantanssijamit.fi'>
          <img src={katajaLogoPng} alt='Kataja logo' />
        </a>
      </div>
      <div>
        Lisätietoja:
        <a href='mailto:info@myllerrys.fi'>info@myllerrys.fi</a>
        044-9786546
        <a href='https://fb.me/e/1w0s8ez2S'>
          <FaFacebookSquare className={s.fbIcon} size={36} />
        </a>
      </div>
    </div>
  )
}

export default Contact