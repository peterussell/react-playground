import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    avatar={faker.image.avatar()}
                    date="Today at 6:00pm"
                    content="Hey, someone's wrong on the internet, and I'm angry."
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Pete"
                    avatar={faker.image.avatar()}
                    date="Yesterday at 2:00am"
                    content="I'm not wrong. *You're* wrong."
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Eve"
                    avatar={faker.image.avatar()}
                    date="Friday at 1:00pm"
                    content="You guys are so silly."
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));