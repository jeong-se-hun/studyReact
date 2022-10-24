import { useState, useEffect, useCallback } from 'react';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';

const Comments = props => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = useParams();
  const { sendRequest, status, data: loadComments, error } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending')
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (status === 'completed' && (loadComments || loadComments.length > 0))
    comments = <CommentsList comments={loadComments} />;

  if (status === 'completed' && (!loadComments || loadComments.length === 0))
    comments = <p className="centered">No comments were added yet!</p>;

  const startAddCommentHandler = () => setIsAddingComment(true);
  const addCommentHandler = useCallback(() => sendRequest(quoteId), [quoteId, sendRequest]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addCommentHandler} />}
      {comments}
    </section>
  );
};

export default Comments;
