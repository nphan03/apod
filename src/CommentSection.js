import React from "react";

class CommentSection extends React.Component {
    
    render(){
        return <div className="comment-section">
            <h3>What do you think of this picture?</h3>
            <div className="formarea"> 
                <form onSubmit={this.props.handleCommentSubmit}>
                    <label>
                        Nickname:<br />
                        <input type="text" name="nicknamevalue" onChange={this.props.handleChange} value={this.props.newNickname}></input>
                    </label> <br />
                    <label>
                        Email:<br />
                        <input type="email" name="emailvalue" onChange={this.props.handleChange} value={this.props.newEmail}></input>
                    </label> <br />
                    <label>
                        Comment:<br />
                        <textarea name="newcmtvalue" onChange={this.props.handleChange} value={this.props.newComment}></textarea>
                    </label> <br />
                    <input type="submit" value="Submit"></input>
                </form>
                
                <div className="message">
                    {this.props.err_mess.map((err,index)=><p key={index}>{err}</p>)}
                </div>
            </div>
            
            <div className="cmtList">
                <h4>Comment Lists</h4>
                {this.props.comments.map((cmt,index) => 
                    <div key={index}>
                        <p className="username">{cmt.username}</p>
                        <p className="cmttext">{cmt.text}</p>
                    </div>
                )}
            </div>
        </div>;
    }
}

export default CommentSection;