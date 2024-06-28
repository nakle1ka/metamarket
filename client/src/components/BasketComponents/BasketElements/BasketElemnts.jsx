import classes from './BasketElements.module.css'

export default function BasketElements({children,logotype}){
    return(
        <section className={classes.OrdersSection}>
            <h2 className={classes.ElementsLogotype}>{logotype}</h2>
            <div className={classes.ElementsContainer}>
                {children}
            </div>
        </section>
    )
}