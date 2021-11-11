import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useAuth();
  return (
    !isLoading && (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  );
}
export default PrivateRoute;
