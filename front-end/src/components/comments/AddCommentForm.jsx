import { useState } from 'react'

export default function AddCommentForm({ onAddComent }) {

    const [postedBy, setPostedby] = useState()
    const [text, setText] = useState()

    return (
        <div>
            <h3>Add Comment</h3>
            <div>
                <label htmlFor="postedBy">User</label>
                <input type="text" name="postedBy" value={postedBy} onChange={(e) => setPostedby(e.target.value)} />
                
            </div>
            <div>
                <label htmlFor="text">Comment</label>
                <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />                
            </div>
            <button onClick={() => onAddComent({ postedBy, text })}>Add Comment</button>
        </div>
    )

}