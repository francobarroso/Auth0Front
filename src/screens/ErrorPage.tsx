import { useAuth0 } from "@auth0/auth0-react";

const ErrorPage = () => {
    const { getAccessTokenSilently } = useAuth0();

    return (
        <></>
    );
};

export default ErrorPage;