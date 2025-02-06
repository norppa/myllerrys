import s from './Banner.module.css'

export default function Banner() {

  return (
    <div className={s.parallax}>
      <div className={s.parallaxBackground}></div>
      <div className={s.banner}>
        <h1 className={s.header}>Aitomäen <br className={s.br} />Myllerrys</h1>
        <div className={s.info}>
          Vapaan viennin&nbsp;
          <br className={s.br} />
          kansantanssikurssit&nbsp;
          <br className={s.br} />
          Kouvolassa
        </div>
        <div className={s.info + ' ' + s.date}> 16.-18.8.2024</div>
      </div>
    </div>
  )
}