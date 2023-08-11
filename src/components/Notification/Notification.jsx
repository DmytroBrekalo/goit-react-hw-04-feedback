import PropTypes from 'prop-types';

const Notification = ({ text }) => {
    return <p className="text">{text}</p>;
};

export default Notification;

Notification.propTypes = {
    text: PropTypes.string.isRequired,
};