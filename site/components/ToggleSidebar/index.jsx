import React from 'react';

import styles from './ToggleSidebar.module.scss';

const ToggleSidebar = ({onClick, showMobileMenu}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {
        showMobileMenu ? 'TERUG' : 'MENU'
      }
    </div>
  );
};

export default ToggleSidebar;
