import styles from './home.module.css';
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.textContainer}>
        
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>

        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Vero blanditiis adipisici minima reiciendis a autem assumenda dolore.
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <Image
          src="/brands.png"
          alt="Brands"
          width={400}
          height={100}
        />
      </div>

      <div>
        <Image
          src="/hero.gif"
          alt="Hero"
          width={500}
          height={500}
        />
      </div>

    </div>
  );
};

export default Home;