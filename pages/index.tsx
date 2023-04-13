import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typewriter from "typewriter-effect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Arpit Singh Resume</title>
        <link rel="icon" href="/footer.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Hi! Get started by typing your email address below."
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .start();
            }}
          />
        </div>
        <div>
          <TextField
            required
            className={styles.inputfield}
            id="outlined-basic"
            color="secondary"
            label="Email"
            placeholder="abc@xyz.com"
          >
            Email
          </TextField>
        </div>
        <div>
          <Button
            className={styles.button}
            variant="contained"
            color="secondary"
          >
            Hit Go
          </Button>
        </div>
      </main>
    </>
  );
}
