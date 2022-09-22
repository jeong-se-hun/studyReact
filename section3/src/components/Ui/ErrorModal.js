import ReactDOM from 'react-dom';
import Card from '../Ui/Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const Backdrop = props => <div onClick={props.onConfirm} className={styles.backdrop} />;

const ModalOverlay = props => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Okey</Button>
    </footer>
  </Card>
);

const ErrorModal = props => {
  const { onConfirm, title, message } = props;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};
export default ErrorModal;
