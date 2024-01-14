function registerCall(data, setIsRegistrationSuccessful) {
  return fetch("http://localhost:8000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        setIsRegistrationSuccessful(true);
      } else {
        setIsRegistrationSuccessful(false);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export default registerCall;
