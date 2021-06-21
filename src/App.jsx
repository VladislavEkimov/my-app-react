import './App.css'

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Novosibirsk_Metro_logo.svg/1200px-Novosibirsk_Metro_logo.svg.png" alt=""/>
            </header>

            <nav className={'nav'}>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            
            <div className={'content'}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6s8SUWJ9Vr681FKY0JlN1ve-CV13jYvEAZQ&usqp=CAU" alt=""/>
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
                        <div>
                            Post1
                        </div>
                        <div>
                            Post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;