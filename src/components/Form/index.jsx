import { FormControl, Button, TextField, Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";

const inputRequest = {
  numero: "",
};

export const Form = () => {
  const [input, setInput] = useState({ inputRequest });

  function onChange(ev) {
    const { name, value } = ev.target;
    setInput({ ...input, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    calculoDivPrimos(input);
  }

  const [response, setResponse] = useState(false);

  let calculoDivPrimos = async (input) => {
    let res = await axios.post("http://localhost:8080/calcular", {
      body: {
        numero: input.numero,
      },
    });
    setResponse(res.data);
  };

  useEffect(() => {}, []);

  return (
    <Container
      style={{
        marginTop: 150,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FormControl style={{ width: 600 }} onSubmit={onSubmit}>
        <TextField
          id="outlined-numero"
          label="Número"
          variant="outlined"
          placeholder="Ex.: 50"
          name="numero"
          onChange={onChange}
        />

        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Calcular
        </Button>

        <TextField
          style={{ marginTop: 20 }}
          id="outlined-numero"
          label="Número"
          variant="outlined"
          disabled
        />

        <TextField
          style={{ marginTop: 20 }}
          id="outlined-numero"
          label="Divisores"
          variant="outlined"
          disabled
        />

        <TextField
          style={{ marginTop: 20 }}
          id="outlined-numero"
          label="Primos"
          variant="outlined"
          disabled
        />
      </FormControl>
    </Container>
  );
};
