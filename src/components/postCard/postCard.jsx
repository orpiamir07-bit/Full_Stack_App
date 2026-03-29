import Image from "next/image"
import Link from "next/link"
import styles from "./postCard.module.css"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>05.03.2026</span>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className= {styles.link} href="/blog/post">READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard