import React, { useState } from 'react';

import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import styles from './SeasonTickets.module.css';
import i05 from '../../Assets/05.png';

const SeasonTickets = ({ data }) => {
  const ticketsData = [
    {
      name: 'One lesson',
      price: '30',
      path: '/oneLesson',
    },
    {
      name: 'One month',
      price: '200',
      path: '/oneMonth',
    },
    {
      name: 'Two months',
      price: '350',
      path: '/twoMonths',
    },
    {
      name: 'Three months',
      price: '450',
      path: '/threeMonths',
    },
    {
      name: 'Six months',
      price: '800',
      path: '/sixMonths',
    },
    {
      name: 'One year',
      price: '1400',
      path: '/oneYear',
    },
  ];

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
            {ticketsData.map((ticket, index) => (
              <div
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
              </div>
            ))}
          </div>

        </div>
        <Link to={`${data}${ticketsData[selectedTicket].path}`} className={styles.orderButton}>
          <div className={styles.plusIcon} />
          <span>Order ticket</span>
        </Link>
      </div>

    </section>
  );
};

export default SeasonTickets;
