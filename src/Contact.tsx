import s from './Contact.module.css'

const Contact = () => {

  return (
    <div className={s.contact}>
      <div className={s.left}>
        <a href='https://www.kansantanssijamit.fi'>
          <img src='/kataja_logo.png' alt='Kataja logo' />
        </a>
      </div>
      <a className={s.middle} href=''>
        {/* <img src='/fb_logo.png' alt='Facebook logo' /> */}
      </a>
      <div className={s.right}>
        <div className={s.info}>
          <h3>Lisätietoja:</h3>
          <a href='mailto:info@myllerrys.fi'>info@myllerrys.fi</a>
          <span>Mari Solja, tuottaja</span>
          <span>044-9786546</span>
        </div>
      </div>
    </div>
  )
}

export default Contact