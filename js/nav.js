class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    title:"About",
                    active:true,
                    pane:<About />
                },
                {
                    title:"Instructions",
                    active:false,
                    pane:<Instructions />
                }
            ]
        };
        this.resetActive = this.resetActive.bind(this);
        this.getPane = this.getPane.bind(this);
    }
    resetActive(target){
        for(var i = 0; i < this.state.items.length; i++){
            this.state.items[i].active=false;
        }
        target.active = true;
        this.setState({});
    }
    getPane(){
        for(var i = 0; i < this.state.items.length; i++){
            if(this.state.items[i].active === true){
                return(
                    this.state.items[i].pane
                )
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className='nav'>
                    <div className='left-column'>
                        {this.state.items.map(item=>
                            <div
                                className={'column-item ' + (item.active === true ? 'active' : '')}
                                onClick={()=>this.resetActive(item)}
                            >
                                {item.title}
                            </div>
                        )}
                    </div>
                    <div className='right-column'>
                        {this.getPane()}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
