import Head from "next/head";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typewriter from "typewriter-effect";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const submitEmail = async () => {
    try {
      const response = await fetch(
        "https://74mshflwtg.execute-api.us-east-1.amazonaws.com/dev",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setEmail("");
  };

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
            value={email}
            onChange={({ target }) => setEmail(target?.value)}
          >
            Email
          </TextField>
        </div>
        <div>
          <Button
            className={styles.button}
            variant="contained"
            color="secondary"
            onClick={submitEmail}
          >
            Hit Go
          </Button>
        </div>
      </main>
    </>
  );
}
