import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element, authenticated, ...props }) => {
    return authenticated ? (
        <Route {...props} element={element} />
    ) : (
        <Navigate to="/login" />
    );
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
    authenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
