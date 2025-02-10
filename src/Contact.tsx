import { FaFacebookSquare } from 'react-icons/fa'
import s from './Contact.module.css'

const Contact = () => {

  return (
    <div className={s.contact}>
      <div className={s.kataja}>
        Tapahtuman järjestää:
        <a href='https://www.kansantanssijamit.fi'>
          <img src='/kataja_logo.png' alt='Kataja logo' />
        </a>
      </div>
      <div className={s.facebook}>
        <a href='https://fb.me/e/1w0s8ez2S'>
          <FaFacebookSquare />
        </a>
      </div>
      <div className={s.contactInfo}>
        Lisätietoja:
        <a href='mailto:info@myllerrys.fi'>info@myllerrys.fi</a>
        044-9786546

      </div>
    </div>
  )
}

export default Contact