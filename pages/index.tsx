import Head from "next/head";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { toast } from "react-toastify";
import { parseJsonText } from "typescript";

export default function Home() {
  const [email, setEmail] = useState("");

  const submitEmail = async () => {
    const statusCode = 200;
    try {
      const response = await fetch(
        "https://74mshflwtg.execute-api.us-east-1.amazonaws.com/dev",
        {
          method: "POST",
          body: JSON.stringify({ email: email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 200) {
            toast("You will recieve an email shortly.", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 7000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progressClassName: "my-toast-progress",
              bodyClassName: "my-toast-body",
            } as any);
          } else {
            toast(
              "Sorry the email address entered is invalid, please try again.",
              {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 7000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progressClassName: "my-toast-progress",
                toastClassName: "my-toast",
                bodyClassName: "my-toast-body",
              } as any
            );
          }
        });
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
                  "Hi! To receive my resume start by typing your email address below & Hit Go!"
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
