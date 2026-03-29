'use client'
import Image from "next/image";
import styles from './contact.module.css';
import { useEffect } from "react";
//import dynamic from "next/dynamic";
//import HydrationTest from "@/components/hydrationTest";//

//const HydrationTestNoSSR= dynamic(()=> import( '@/components/hydrationTest'), {ssr: false})

const ContactPage = () => {
  
  return (
    <div className={styles.container}>

      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          alt="Contact"
          width={500}
          height={500}
        />
      </div>

      <div className={styles.formContainer}>
        {/*<HydrationTestNoSSR/>*/}
        {/* <div suppressHydrationWarning>{a}</div>*/}
        <form action='' className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols='30'
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>

    </div>
  );
};

export default ContactPage;