import styles from "./Display.module.css"
// eslint-disable-next-line react/prop-types
const Display = ({onDisplay})=>{

    return <>
    <input type="text" className={styles.display} value={onDisplay} readOnly/>
    </>
}
export default Display;