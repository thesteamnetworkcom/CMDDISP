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
            optionState:false,
            cardDisplayState:false,
            displayCard:{},
            decks:{}
        };
        this.updateQueryList = this.updateQueryList.bind(this);
        this.nextList = this.nextList.bind(this);
        this.newDeck = this.newDeck.bind(this);
        this.prevList = this.prevList.bind(this);
        this.switchState = this.switchState.bind(this);
        this.removeQuery = this.removeQuery.bind(this);
        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.updateQty = this.updateQty.bind(this);
        this.saveDeck = this.saveDeck.bind(this);
        this.loadDeck = this.loadDeck.bind(this);
        this.switchCardState=this.switchCardState.bind(this);
        this.closeCardDisplay = this.closeCardDisplay.bind(this);
    }
    componentWillMount(){
        if(localStorage.hasOwnProperty('currentState')){
            console.log("CRAP");
            var newState = JSON.parse(localStorage.getItem('currentState'));
            this.state=newState;
            this.setState({});
        }
    }
    closeCardDisplay(){
        this.setState({
            displayCard:{},
            cardDisplayState:false
        });
        var newState = JSON.parse(localStorage.getItem('currentState'));
    }
    updateQty(e, updateTarget){
        console.log(e);
        console.log(e.target.value);
        if((e.target.value)===''){
            updateTarget.qty='';
        }else{
            updateTarget.qty = parseInt(e.target.value);
        }
        localStorage.setItem("currentState", JSON.stringify(this.state));
        this.setState({});
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
        localStorage.setItem("currentState", JSON.stringify(this.state));
    }
    addCard(card, qty){
        //get the type of the card//
        //Creature, Enchantment, Artifact, Instand, Sorcery, Land, Planeswalker
        console.log(card);
        console.log(qty);
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
        localStorage.setItem("currentState", JSON.stringify(this.state));
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
        localStorage.setItem("currentState", JSON.stringify(this.state));
    }
    nextList(){
        console.log(this.state.cardList.length -1);
        console.log(this.state.curList);
        if(this.state.cardList.length - 1 > this.state.curList){
            localStorage.setItem("currentState", JSON.stringify(this.state));
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
                localStorage.setItem("currentState", JSON.stringify(this.state));
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
            localStorage.setItem("currentState", JSON.stringify(this.state));
            this.setState({
                curList:this.state.curList - 1
            });
        }
    }
    switchState(){
        console.log("here");
        this.state.optionState=!this.state.optionState;
        this.setState({});
        localStorage.setItem("currentState", JSON.stringify(this.state));
        console.log(localStorage);
    }
    switchCardState(card){
        console.log("switching card state");
        if(this.state.cardDisplayState === true){
            this.setState({
                cardDisplayState:!this.state.cardDisplayState,
                displayCard:{}
            });
            localStorage.setItem("currentState", JSON.stringify(this.state));
        }else{
            this.setState({
                cardDisplayState:!this.state.cardDisplayState,
                displayCard:card
            });
            localStorage.setItem("currentState", JSON.stringify(this.state));
        }
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
        console.log(newList);
        let fullQuery = "https://api.scryfall.com/cards/search?q=";
        for(var i = 0; i < newList.length; i++){
            if(i === 0){
                fullQuery=fullQuery+newList[i].result;
            }else{
                fullQuery=fullQuery+ "+" + newList[i].result;
            }
        }
        console.log(fullQuery);
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
            localStorage.setItem("currentState", JSON.stringify(this.state));
        });
    }
    saveDeck(result){
        if(this.state.decks.hasOwnProperty(this.state.deck.name)){
            if(result.hasOwnProperty('flag')){
                if(result.flag === 'ow'){
                    this.state.decks[this.state.deck.name] = this.state.deck
                    localStorage.setItem("currentState", JSON.stringify(this.state));
                    this.setState({});
                    return "Deck Saved";
                }else{
                    return "Deck Exists Already";
                }
            }
            return "Deck Exists Already";
        }else{
            this.state.decks[this.state.deck.name] = (this.state.deck);
            localStorage.setItem("currentState", JSON.stringify(this.state));
            this.setState({});
            return "Deck Saved";
        }
    }
    loadDeck(result){
        if(!result.hasOwnProperty('name')){
            return "No Name Provided";
        }else{
            if(!this.state.decks.hasOwnProperty(result.name)){
                return "No Deck By That Name";
            }else{
                var newDeck = JSON.parse(JSON.stringify(this.state.decks[result.name]));
                this.state.deck = newDeck;
                this.state.queries = [];
                if(this.state.deck.format !== undefined){
                    this.state.queries.push({
                        result:"f:" + this.state.deck.format,
                        id:Math.floor(Math.random() * Math.floor(1000000))
                    });
                    let queryList = this.state.queries;
                    let fullQuery = "https://api.scryfall.com/cards/search?q=";
                    for(var i = 0; i < queryList.length; i++){
                        if(i === 0){
                            fullQuery=fullQuery+queryList[i].result;
                        }else{
                            fullQuery=fullQuery+queryList[i].result;
                        }
                    }
                    fetch(fullQuery)
                    .then(res=>res.json())
                    .then(json=>{
                        var cardList = [];
                        cardList.push(json);
                        this.setState({
                            queries:queryList,
                            cardList:cardList,
                            curList:0
                        });
                        localStorage.setItem("currentState", JSON.stringify(this.state));
                    });
                    return "Deck Loaded...Fetching Format Results";
                }else{
                    localStorage.setItem("currentState", JSON.stringify(this.state));
                    this.setState({});
                    return "Deck Loaded";
                }
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <Layout switchState={this.switchState} newPage={this.props.newPage}>
                    {this.state.optionState === true ? <OptionPane  /> : null}
                    {this.state.cardDisplayState === true ? <CardDisplayState card={this.state.displayCard} close={this.closeCardDisplay}/> : null}
                    <LeftPane
                        state={this.state}
                        next={this.nextList}
                        prev={this.prevList}
                        addCard={this.addCard}
                        switchCardState={this.switchCardState}
                    />
                    <CmdPrompt
                        state={this.state}
                        updateQueryList={(q, j)=>this.updateQueryList(q, j)}
                        newDeck={(n,f)=>this.newDeck(n,f)}
                        saveDeck={this.saveDeck}
                        loadDeck={this.loadDeck}
                    />
                    <RightPane
                        state={this.state}
                        removeQuery={this.removeQuery}
                        updateQty={this.updateQty}
                    />
                </Layout>
            </React.Fragment>
        )
    }
}
