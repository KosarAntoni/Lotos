import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import i05 from '../../Assets/05.png';
import TicketsData from './data';

const SeasonTickets = ({ data }) => {
  const [selectedTicket, setSelectedTicket] = useState(0);

  return (
    <section className={styles.seasonTicketsSection}>
      <MediaQuery minWidth={501}>
        <div className={styles.imageContainer}>
          <img src={i05} alt="" />
        </div>
      </MediaQuery>

      <div className={styles.selectorSection}>
        <div className={styles.ticketsWrapper}>
          <div className={styles.ticketsContainer}>
            {TicketsData.map((ticket, index) => (
              <button
                type="button"
                key={ticket.name}
                className={styles.ticket}
                onClick={() => setSelectedTicket(index)}
              >
                <p>{ticket.name}</p>
                <p>
                  <span className={styles.price}>{ticket.price}</span>
                  {' '}
                  $
                </p>
                <div
                  className={index === selectedTicket ? `${styles.plusIcon} ${styles.plusIconSelected}` : styles.plusIcon}
                />
              </button>
            ))}
          </div>

        </div>
        <Link to={`${data}${TicketsData[selectedTicket].path}`} className={styles.orderButton}>
          <div className={styles.plusIcon} />
          <span>Order ticket</span>
        </Link>
      </div>

    </section>
  );
};

SeasonTickets.propTypes = {
  data: PropTypes.string.isRequired,
};

export default SeasonTickets;
