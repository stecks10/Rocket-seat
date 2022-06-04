import styles from './styles.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/stecks10.png" />
          <div className={styles.authorInfo}>
            <strong>Vitor Nunes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="04 de Junho as 15:45" dateTime="2022-06-04 08:13:20">
          Publicado ha 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        👉 <p>jane.design/doctorcare </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat </a>
        </p>
      </div>
    </article>
  );
}
