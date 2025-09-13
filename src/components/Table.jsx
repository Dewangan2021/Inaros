import styles from "./Table.module.css";


const Table = ({ data }) => {

  return (
    <table className={styles.cus_table}>
      <thead>
        <tr>
          {data.tableHeading.map((head) => (
            <th key={head} className={styles.cus_table_th}>
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rowData.map((item, i) => (
          <tr key={i}>
            {data.tableHeading.map((head) => {
              let eachColData = item[head];

              if (eachColData.colType == "text") {
                return (
                  <td key={head} className={styles.cus_table_td}>
                    {eachColData.data}
                  </td>
                );
              } else if (eachColData.colType == "action") {
                return (
                  <td
                  key={head}
                    className={`${styles.cus_table_td} ${styles.cus_table_act}`}
                  >
                    {eachColData.data.map((action, i) => (
                      <div
                        key={i}
                        style={{
                          backgroundColor: action.iconBg,
                        }}
                        className={styles.cus_table_act_cont}
                      >
                        <action.Icon
                          className={styles.cus_table_icon}
                          onClick={action.iconFunc}
                        />
                      </div>
                    ))}
                  </td>
                );
              } else if (eachColData.colType == "check") {
                return (
                  <td  key={head} className={styles.cus_table_td}>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        eachColData.onChecked();
                      } else {
                        eachColData.notChecked();
                      }
                    }}
                  ></input>
                  </td>
                );
              }else{
                <td></td>
              }
            })}
          </tr>
        ))}

        
      </tbody>
    </table>
  );
};
export default Table;
