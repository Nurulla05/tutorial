import React from "react";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
    return(
      <div className={styles.dialogs}>
        <div className={styles.dialogsItems}>
          <div className={styles.dialog}>
            Nurulla
          </div>
          <div className={styles.dialog}>
            Gaziz
          </div>
          <div className={styles.dialog}>
            Asik
          </div>
          <div className={styles.dialog}>
            Kairat
          </div>
        </div>
        <div className={styles.messages}>
          <div className={styles.message}>Hi</div>
          <div className={styles.message}>Hello</div>
          <div className={styles.message}>Яксемаш</div>
        </div>
      </div>  
    );
}

export default Dialogs
