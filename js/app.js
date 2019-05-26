class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            intro:"Scryfall DeckBuilder",
            version:"Vers: [1.0.0.0]",
            format:"No Format",
            queries:[

            ],
            cardList:[],
            curList:0,
            deck:null,
            optionState:false
        };
        this.updateQueryList = this.updateQueryList.bind(this);
        this.nextList = this.nextList.bind(this);
        this.newDeck = this.newDeck.bind(this);
        this.prevList = this.prevList.bind(this);
        this.switchState = this.switchState.bind(this);
        this.removeQuery = this.removeQuery.bind(this);
        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }
    updateQueryList(queryList,json){
        console.log(json);
        var cardList = [];
        cardList.push(json);
        console.log(queryList);
        this.setState({
            queries:queryList,
            cardList:cardList,
            curList:0
        });
    }
    addCard(card, qty){
        //get the type of the card//
        //Creature, Enchantment, Artifact, Instand, Sorcery, Land, Planeswalker
        let types = card.type_line.split(" ");
        console.log(types);
        if(types.includes("Creature")){
            console.log(this.state.deck.cards.creatures);
            if(this.state.deck.cards.creatures === undefined){
                this.state.deck.cards.creatures = [];
            }
            let test = false;
            console.log(this.state.deck.cards.creatures.length);
            for(var i = 0; i < this.state.deck.cards.creatures.length; i++){
                console.log(this.state.deck.cards.creatures[i].card.name )
                if(this.state.deck.cards.creatures[i].card.name === card.name){
                    this.state.deck.cards.creatures[i].qty = this.state.deck.cards.creatures[i].qty + qty;
                    test = true;
                }
            }
            if(!test){
                this.state.deck.cards.creatures.push({
                    card:card,
                    qty:qty
                });
            }
        }else if(types.includes("Instant") || types.includes("Sorcery")){
            if(this.state.deck.cards.spells === undefined){
                this.state.deck.cards.spells = [];
            }
            let test = false;
            for(var i = 0; i < this.state.deck.cards.spells.length; i++){
                if(this.state.deck.cards.spells[i].card.name === card.name){
                    this.state.deck.cards.spells[i].qty = this.state.deck.cards.spells[i].qty + qty;
                    test = true;
                }
            }
            if(!test){
                this.state.deck.cards.spells.push({
                    card:card,
                    qty:qty
                });
            }
        }else if(types.includes("Enchantment")){
            if(this.state.deck.cards.enchantments === undefined){
                this.state.deck.cards.enchantments = [];
            }
            let test = false;
            for(var i = 0; i < this.state.deck.cards.enchantments.length; i++){
                if(this.state.deck.cards.enchantments[i].card.name === card.name){
                    this.state.deck.cards.enchantments[i].qty = this.state.deck.cards.enchantments[i].qty + qty;
                    test = true;
                }
            }
            if(!test){
                this.state.deck.cards.enchantments.push({
                    card:card,
                    qty:qty
                });
            }
        }else if(types.includes("Artifact")){
            if(this.state.deck.cards.artifacts === undefined){
                this.state.deck.cards.artifacts = [];
            }
            let test = false;
            for(var i = 0; i < this.state.deck.cards.artifacts.length; i++){
                console.log(this.state.deck.cards.artifacts[i].card.name);
                console.log(card.name);
                if(this.state.deck.cards.artifacts[i].card.name === card.name){
                    this.state.deck.cards.artifacts[i].qty = this.state.deck.cards.artifacts[i].qty + qty;
                    test = true;
                }
            }
            if(!test){
                this.state.deck.cards.artifacts.push({
                    card:card,
                    qty:qty
                });
            }
        }else if(types.includes("Planeswalker")){
            if(this.state.deck.cards.planeswalkers === undefined){
                this.state.deck.cards.planeswalkers = [];
            }
            let test = false;
            for(var i=0; i < this.state.deck.cards.planeswalkers.length; i++){
                if(this.state.deck.cards.planeswalkers[i].card.name===card.name){
                    this.state.deck.cards.planeswalkers[i].qty = this.state.deck.cards.planeswalkers[i].qty + qty;
                    test = true;
                }
            }
            if(!test){
                this.state.deck.cards.planeswalkers.push({
                    card:card,
                    qty:qty
                });
            }
        }else if(types.includes("Land")){
            if(this.state.deck.cards.lands === undefined){
                this.state.deck.cards.lands = [];
            }
            let test = false;
            for(var i = 0; i < this.state.deck.cards.lands.length; i++){
                if(this.state.deck.cards.lands[i].card.name===card.name){
                    this.state.deck.cards.lands[i].qty = this.state.deck.cards.lands[i].qty + qty;
                    test = true;
                }
            }
            if(!test){
                this.state.deck.cards.lands.push({
                    card:card,
                    qty:qty
                });
            }
        }
        this.setState({
            deck:this.state.deck
        });
    }
    removeCard(card, qty){

    }
    newDeck(name, format){
        name = name || "untitiled";
        format = format || null;
        console.log(name);
        console.log(format);
        let newDeck = {
            name:name,
            format:format,
            cards:{

            }
        }
        this.setState({
            deck:newDeck
        });
    }
    nextList(){
        console.log(this.state.cardList.length -1);
        console.log(this.state.curList);
        if(this.state.cardList.length - 1 > this.state.curList){
            this.setState({
                curList:this.state.curList + 1
            });
        }else if(this.state.cardList[this.state.curList].has_more === true){
            console.log("Fetching...");
            fetch(this.state.cardList[this.state.curList].next_page)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                var cardList = this.state.cardList;
                this.state.cardList.push(json);
                this.setState({
                    cardList:cardList,
                    curList:this.state.curList + 1
                });
            });
        }
    }
    prevList(){
        if(this.state.curList === 0){
            //NO PREV LIST
        }else{
            this.setState({
                curList:this.state.curList - 1
            });
        }
    }
    switchState(){
        console.log("here");
        this.setState({
            optionState:!this.state.optionState
        });
    }
    removeQuery(key){
        console.log(key);
        let removeQuery = "";
        let queryList = this.state.queries;
        let newList = queryList.filter(function(e){
            if(e.id === key){
                removeQuery = e.result;
            }
            return e.id !== key;
        });
        let fullQuery = "https://api.scryfall.com/cards/search?q=";
        for(var i = 0; i < newList.length; i++){
            if(i === 0){
                fullQuery=fullQuery+newList[i].result;
            }else{
                fullQuery=fullQuery+newList[i].result;
            }
        }
        fetch(fullQuery)
        .then(res=>res.json())
        .then(json=>{
            var cardList = [];
            cardList.push(json);
            this.setState({
                queries:newList,
                cardList:cardList,
                curList:0
            });
        });
    }
    render(){
        return(
            <React.Fragment>
                <Header switchState={this.switchState} />
                <div className='root-wrapper'>
                    {this.state.optionState === true ? <OptionPane  /> : null}
                    <LeftPane
                        state={this.state}
                        next={this.nextList}
                        prev={this.prevList}
                        addCard={this.addCard}
                    />
                    <CmdPrompt
                        state={this.state}
                        updateQueryList={(q, j)=>this.updateQueryList(q, j)}
                        newDeck={(n,f)=>this.newDeck(n,f)}
                    />
                    <RightPane
                        state={this.state}
                        removeQuery={this.removeQuery}
                    />
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
