import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import yogaClassesData from './data';
import VariablesContainer from './VariablesContainer';
import ClassInfo from './ClassInfo';

const Classes = ({ data }) => {
  const [currentVariable, setCurrentVariable] = useState(0);

  const handleClassChange = (direction) => {
    switch (direction) {
      case 'NEXT': {
        const value = currentVariable + 1;
        if (value <= yogaClassesData.length - 1) setCurrentVariable(value);
        break;
      }
      case 'PREV': {
        const value = currentVariable - 1;
        if (value >= 0) setCurrentVariable(value);
        break;
      }
      default:
    }
  };

  return (
    <section className={styles.classesSection} id="classesSection">
      <MediaQuery minWidth={501}>
        <VariablesContainer
          currentVariable={currentVariable}
          setCurrentVariable={setCurrentVariable}
        />

      </MediaQuery>
      <div className={styles.informationContainer}>
        <h1>Yoga-</h1>
        <MediaQuery maxWidth={500}>
          <div className={styles.buttonsContainer}>
            <button
              type="button"
              className={styles.nextClassButton}
              onClick={() => handleClassChange('PREV')}
            >
              Prev
            </button>
            <button
              type="button"
              className={`${styles.nextClassButton} ${styles.prevClassButton}`}
              onClick={() => handleClassChange('NEXT')}
            >
              Next
            </button>
          </div>
        </MediaQuery>
        <ClassInfo
          currentVariable={currentVariable}
          yogaClassesData={yogaClassesData}
          link={data}
        />
      </div>
    </section>
  );
};

Classes.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Classes;
