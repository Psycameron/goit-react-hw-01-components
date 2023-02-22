import PropTypes from 'prop-types';

import { getRandomHexColor } from 'constants/randomColor';

import style from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={style.section}>
      {title && <h2 className={style.title}>{title.toUpperCase()}</h2>}
      <ul className={style.list}>
        {stats.map(stat => (
          <li
            className={style.item}
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
