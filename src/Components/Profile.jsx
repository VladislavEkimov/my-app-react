import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://media.licdn.cn/dms/image/C4D1BAQHt5jcoqtEWIg/company-background_10000/0/1617264177780?e=2159024400&v=beta&t=T2fcYwGlPmcbM1ihTzLW57yZneMMYe34tRAWjYnU3wY" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div>
                    <div className={classes.item}>
                        Post1
                    </div>
                    <div className={classes.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;