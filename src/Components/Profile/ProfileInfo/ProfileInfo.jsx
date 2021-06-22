import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://media.licdn.cn/dms/image/C4D1BAQHt5jcoqtEWIg/company-background_10000/0/1617264177780?e=2159024400&v=beta&t=T2fcYwGlPmcbM1ihTzLW57yZneMMYe34tRAWjYnU3wY" alt=""/>
            </div>
            <div className={classes.discriptionDlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;