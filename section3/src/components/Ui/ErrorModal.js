import Card from '../Ui/Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModal = props => {
  return (
    <>
      <div onClick={props.onConfirm} className={styles.backdrop} />
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
    </>
  );
};
export default ErrorModal;
