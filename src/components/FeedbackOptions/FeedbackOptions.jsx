import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onFeedback }) => {
    return options.map(option => {
        return (
            <button
                className={style.option_button}
                type="button"
                key={option}
                onClick={() => {
                    onFeedback(option);
                }}
            >
                {option}
            </button>
        );
    });
};

export default FeedbackOptions;

FeedbackOptions.propsType = {
    options: PropTypes.array.isRequired,
    onFeedback: PropTypes.func.isRequired,
};