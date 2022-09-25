import styles from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import HeaderCarButton from './HeaderCarButton';

const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCarButton onClick={props.onOpenCart}>Cart</HeaderCarButton>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="음식이미지" />
      </div>
    </>
  );
};
export default Header;
