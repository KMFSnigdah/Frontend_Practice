import { useEffect } from 'react';
import { Alert } from 'antd';
import PropTypes from 'prop-types';

const TimerAlert = ({ visible, setVisible, children, className, shouldShowErrorLong, ...rest }) => {
    let timerMili;

    if (!shouldShowErrorLong) timerMili = 3000;
    else timerMili = 600000;
    className += ' rounded-md';
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, timerMili);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [visible]);

    return visible ? (
        <Alert className={className} {...rest}>
            {children}
        </Alert>
    ) : null;
};

TimerAlert.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    shouldShowErrorLong: PropTypes.bool,
};


export default TimerAlert;
