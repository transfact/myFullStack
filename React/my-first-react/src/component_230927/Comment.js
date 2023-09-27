import { useOutletContext } from 'react-router-dom';

export default function Comment() {
    const { comment } = useOutletContext();
    console.log(comment);
    return (
        <div>
            <div>Comment : {comment.comment.text}</div>
        </div>
    );
}
