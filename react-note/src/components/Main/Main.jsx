import styles from './Main.module.css'
const Main=()=>{
    return(
        <>
        <section className={styles.Note}>
            <input type="text" placeholder="Title" className={styles.note}/>
            <input type="text" placeholder="Take a Note"className={styles.note}/>
            <button className={styles.btnAdd}>Add</button>
        </section>
        <section className={styles.notes}>
            <div></div>
        </section>
        </>
    )
}
export default Main;