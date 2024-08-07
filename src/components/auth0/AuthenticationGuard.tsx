import { withAuthenticationRequired } from "@auth0/auth0-react";

type Props = {
    component: React.ComponentType<object>;
};

const AuthenticationGuard = ({ component }: Props) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => {
            return <div>
                <div>Redireccionando...</div>
            </div>
        }
    })

    return <Component />
}

export default AuthenticationGuard;