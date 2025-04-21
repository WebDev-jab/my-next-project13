import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>タイトルテキスト</h1>
        <p className={styles.description}>texttexttext</p>
      </div>
      <img className={styles.bgimg} src="/img-mv.jpg" alt=""></img>
    </section>
  );
}
