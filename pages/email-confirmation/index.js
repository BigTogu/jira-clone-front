import React, { useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function EmailConfirmation() {
  const router = useRouter();
  const { token } = router.query;
  useEffect(() => {
    if (!token) {
      console.error("missing the token param on the url");
      router.push("/register");
      return;
    }
    fetch(`http://localhost:8000/email-confirmation/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json().then((data) => {
          router.push("/home");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [router, token]);

  return <div>Hola</div>;
}
