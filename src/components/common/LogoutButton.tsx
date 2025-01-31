import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "@mui/material";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button
            onClick={() => {
                logout({
                    logoutParams: { returnTo: window.location.origin }
                })
            }}
            sx={{ backgroundColor: "#233044", color: "#eeeeee", border: "1px solid #eeeeee" }}
        >
            Log Out
        </Button>
    )
}

export default LogoutButton;