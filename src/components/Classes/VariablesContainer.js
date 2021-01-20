import React from 'react';
import * as PropTypes from 'prop-types';
import styles from './styles.module.css';
import i02 from '../../Assets/02.png';
import yogaClassesData from './data';

const VariablesContainer = ({ currentVariable, setCurrentVariable }) => (
  <div className={styles.variablesContainer}>
    <ul>
      {yogaClassesData.map((classItem, id) => (
        <button
          type="button"
          key={classItem.title}
          className={id === currentVariable ? styles.variableSelected : undefined}
          onClick={() => setCurrentVariable(id)}
        >
          {classItem.title}
        </button>
      ))}
    </ul>
    <img src={i02} alt="" />
  </div>
);

VariablesContainer.propTypes = {
  currentVariable: PropTypes.number.isRequired,
  setCurrentVariable: PropTypes.func.isRequired,
};

export default VariablesContainer;
