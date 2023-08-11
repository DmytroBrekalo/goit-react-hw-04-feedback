import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
onBtnOptionClick = option => {
        this.setState(prevState => {
            return {
                [option]: prevState[option] + 1,
            };
        });
    };

    totalFeedbacks = () => {
        return Object.values(this.state).reduce((acc, item) => acc + item);
    };

    percentageOfGoodFeedbacks = () => {
        const { good } = this.state;
        const total = this.totalFeedbacks();
        if (total !== 0) {
            return Math.floor((good * 100) / total);
        }
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onFeedback={this.onBtnOptionClick}
                    />
                </Section>

                <Section title="Statistics">
                    {this.totalFeedbacks() > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.totalFeedbacks()}
                            percentage={this.percentageOfGoodFeedbacks()}
                        ></Statistics>
                    ) : (
                        <Notification text="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}
export default App;