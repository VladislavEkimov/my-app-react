import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://media.licdn.cn/dms/image/C4D1BAQHt5jcoqtEWIg/company-background_10000/0/1617264177780?e=2159024400&v=beta&t=T2fcYwGlPmcbM1ihTzLW57yZneMMYe34tRAWjYnU3wY" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;