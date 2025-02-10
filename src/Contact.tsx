import { FaFacebookSquare } from 'react-icons/fa'
import s from './Contact.module.css'

const Contact = () => {

  return (
    <div className={s.contact}>
      <div className={s.kataja}>
        <h3>Tapahtuman järjestää:</h3>
        <a href='https://www.kansantanssijamit.fi'>
          <img src='/kataja_logo.png' alt='Kataja logo' />
        </a>
      </div>
      <div className={s.facebook}>
        <a href='https://fb.me/e/1w0s8ez2S'>
          <FaFacebookSquare />
        </a>
      </div>
      <div className={s.info}>
        <h3>Lisätietoja:</h3>
        <a href='mailto:info@myllerrys.fi'>info@myllerrys.fi</a>
        <br />
        044-9786546
      </div>
    </div>
  )
}

export default Contact