class HomeTemplate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page: "Home"
        };
        this.newPage = this.newPage.bind(this);
    }
    newPage(pageName){
        this.setState({
            page: pageName
        });
    }
    render(){
        console.log(this.state.page);
        switch(this.state.page){
            case "Home":
                return(<Home newPage={this.newPage}/>)
            case "App":
                return(<App newPage={this.newPage}/>)
            case "Decks":
                return(<Decks newPage={this.newPage}/>)
        }
    }
}

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <Layout newPage={this.props.newPage} >
                <div className='main-wrapper'>
                    <div className='search-section'>
                        <div className='block-wrapper'>
                            <div className='text-wrapping'>
                                <h1>&lt;HomeBrews/&gt;;</h1>
                                <h2>For rapid deck prototyping and tracking</h2>
                                <h3>Powered by Scryfall Api</h3>
                            </div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='description-section'>
                    </div>
                </div>
            </Layout >
        )
    }
}


ReactDOM.render(
    <HomeTemplate />,
    document.getElementById("root")
);
