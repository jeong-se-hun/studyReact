import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const { quoteId } = useParams();
  const { sendRequest, data: quote, status, error } = useHttp(getSingleQuote, true);
  const match = useRouteMatch();

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending')
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error)
    return (
      <p className="centered focused" style={{ color: 'red' }}>
        {error}
      </p>
    );

  if (status === 'completed' && !quote.text)
    return <p style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center' }}>no qoute found</p>;

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load comment
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
