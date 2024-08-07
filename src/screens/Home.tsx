import { Button, Typography } from "@mui/material";

function Home() {


  async function EndpointPublico() {

    const urlServer = `${import.meta.env.VITE_API_SERVER_URL}/public`;
    const response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
        mode: 'cors'
    });

    const data = await response.json();

    alert(data.message);
}

  return (
    <>
    <Typography variant="h6">Endpoint publico: </Typography>
    <Button variant="contained" onClick={EndpointPublico}>Endpoint Publico</Button>
    </>
  );
}

export default Home;
