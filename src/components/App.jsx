import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const listOfChoices = ['good', 'neutral', 'bad'];

    const onBtnOptionClick = option => {
        if (option === 'good') {
            setGood(prevState => prevState + 1);
        }
        if (option === 'neutral') {
            setNeutral(prevState => prevState + 1);
        }
        if (option === 'bad') {
            setBad(prevState => prevState + 1);
        }
    };

    const totalFeedbacks = () => {
        const total = good + neutral + bad;
        return total;
    };

    const percentageOfGoodFeedbacks = () => {
        const total = totalFeedbacks();
        if (total !== 0) {
            return Math.floor((good * 100) / total);
        }
    };

    return (
        <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={listOfChoices}
                    onFeedback={onBtnOptionClick}
                />
            </Section>

            <Section title="Statistics">
                {totalFeedbacks() > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalFeedbacks()}
                        percentage={percentageOfGoodFeedbacks()}
                    ></Statistics>
                ) : (
                    <Notification text="There is no feedback" />
                )}
            </Section>
        </div>
    );
};
export default App;