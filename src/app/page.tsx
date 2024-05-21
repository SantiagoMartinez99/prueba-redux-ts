import styles from "./page.module.css";
import { useGetJsonByIdQuery } from "./redux/services/apiService";

export default function Home() {
  const { data } = useGetJsonByIdQuery(1);
  return (
    <main className={styles.main}>
      <h1>{data?.title}</h1>
    </main>
  );
}
