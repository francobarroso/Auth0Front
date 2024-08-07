import { useAuth0 } from "@auth0/auth0-react";
import { Button, Typography } from "@mui/material";

const AdminPage = () => {
    const { getAccessTokenSilently } = useAuth0();

    async function EndpointAdministrador() {
        const token = await getAccessTokenSilently({
            authorizationParams: {
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            },
        });

        console.log(token);

        const urlServer = `${import.meta.env.VITE_API_SERVER_URL}/admin`;
        const response = await fetch(urlServer, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            mode: 'cors'
        });

        const data = await response.json();

        alert(data.message);
    }

    return (
        <>
            <Typography variant="h6">Esta es la vista de administrador</Typography>
            <Button variant="contained" onClick={EndpointAdministrador}>Endpoint Administrador</Button>
        </>
    );
};

export default AdminPage;
