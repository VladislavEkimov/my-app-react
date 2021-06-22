import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://ansunibaate.com/wp-content/uploads/2019/04/Baby-Lion-Wallpaper-30535.jpg" alt=""/>
            </div>
            <div className={classes.discriptionDlock}>
                ava + description
            </div>

        </div>
    )
}

export default ProfileInfo;