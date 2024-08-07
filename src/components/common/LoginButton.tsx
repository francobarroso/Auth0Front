import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            onClick={() => {
                loginWithRedirect({
                    appState: {
                        returnTo: window.location.pathname
                    }
                })
            }}
            sx={{ backgroundColor: "#233044", color: "#eeeeee", border: "1px solid #eeeeee" }}
        >
            Log In
        </Button>
    )
}

export default LoginButton;