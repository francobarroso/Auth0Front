import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";

const ClientPage = () => {
    const { getAccessTokenSilently } = useAuth0();

    async function EndpointCliente() {
        const token = await getAccessTokenSilently({
            authorizationParams: {
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            },
        });

        console.log(token);

        const urlServer = `${import.meta.env.VITE_API_SERVER_URL}/client`;
        const response = await fetch(urlServer, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            mode: 'cors'
        });

        const data = await response.json();
        console.log(data.message);
        alert(data.message);
    }

    return (
        <>
            <Typography variant="h6">Esta es la vista de cliente</Typography>
            <Button variant="contained" onClick={EndpointCliente}>Endpoint Cliente</Button>
        </>
    );
};

export default ClientPage;