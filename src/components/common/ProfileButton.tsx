import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/profile")}
      sx={{ backgroundColor: "#233044", color: "#eeeeee", border: "1px solid #eeeeee" }}
    >
      Perfil
    </Button>
  );
};

export default ProfileButton;