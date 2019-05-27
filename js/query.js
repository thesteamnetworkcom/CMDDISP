class Query extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <React.Fragment>
                <li className='query-item'>
                    <span>{this.props.data.result}</span>
                    <div className='clear' onClick={()=>this.props.removeQuery(this.props.data.id)} >
                        <i class="fas fa-backspace"></i>
                    </div>
                </li>
            </React.Fragment>
        )
    }
}
