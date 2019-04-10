import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    // Props: Nesting and Reusability 
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>WARNING!</h4>
                    U wanna do dis?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 4:20PM" 
                    text="yolo 1" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Alex" 
                    timeAgo="Today at 2:20AM" 
                    text="yolo 2" 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Yesterday at 4:20PM" 
                    text="yolo 3" 
                />
            </ApprovalCard>
            <CommentDetail />
            <CommentDetail />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))