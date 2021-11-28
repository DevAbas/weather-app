import styles from './styles.module.css';

const WeatherBox: React.FC = ({ children }) => {
  return <div className={styles.weatherBox}>{children}</div>;
};

export default WeatherBox;
