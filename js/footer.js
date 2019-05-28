class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <div className='footer'>
                    <div className='footer-wrapper'>
                        <span className='copyright'>Copyright 2019</span>
                    </div>
                    <div className='footer-wrapper'>
                        <span className='social'>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-github"></i>
                            <i class="fab fa-discord"></i>
                            <i class="fab fa-twitch"></i>
                            <i class="fab fa-wizards-of-the-coast"></i>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
