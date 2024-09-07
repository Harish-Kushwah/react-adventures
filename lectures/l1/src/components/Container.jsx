import style from "./Container.module.css"
const Container =(props)=>{

    // eslint-disable-next-line react/prop-types
    return <div className={style.Container}> {props.children}</div>
}

export default Container;