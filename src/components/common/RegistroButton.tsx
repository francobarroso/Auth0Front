import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material";

const RegistroButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            onClick={() => {
                loginWithRedirect({
                    appState: {
                        returnTo: window.location.pathname
                    },
                    authorizationParams: {
                        screen_hint: "signup"
                    }
                })
            }}
            sx={{ backgroundColor: "#233044", color: "#eeeeee", border: "1px solid #eeeeee" }}
        >
            Sign In
        </Button>
    )
}

export default RegistroButton;