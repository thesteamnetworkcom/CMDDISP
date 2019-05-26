class CmdPrompt extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputString:"!$> ",
            returnString:"%$> ",
            output:[

            ],
            input:""
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.parseInput = this.parseInput.bind(this);
    }
    parseInput(input){
        /* DO PARSE STUFF HERE */
        let type = input.split(/\s(.+)/)[0];
        let rest = input.split(/\s(.+)/)[1];
        if(type ==="api"){
            let result = parser.api.func(rest);
            let query = {
                result:result,
                id:Math.floor(Math.random() * Math.floor(1000000))
            }
            let queryList = this.props.state.queries;
            let fullQuery = "https://api.scryfall.com/cards/search?q=";

            queryList.push(query);
            for(var i = 0; i < queryList.length; i++){
                if(i === 0){
                    fullQuery = fullQuery + queryList[i].result;
                }else{
                    fullQuery = fullQuery + "+" + queryList[i].result;
                }
            }

            fetch(fullQuery)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                let newOutput = this.state.output;
                newOutput.push(this.state.inputString + input);
                newOutput.push(this.state.returnString + "Total Cards: " + json.total_cards);
                this.props.updateQueryList(queryList, json);
                this.setState({
                    output:newOutput,
                    input:""
                });
            });
        }else if(type === "deck"){
            let result = parser.deck.func(rest);

            if("action" in result){
                switch(result.action){
                    case "new":
                        console.log("Create New Deck");
                        var newOutput = this.state.output;
                        newOutput.push(this.state.inputString + input);
                        newOutput.push(this.state.returnString + "Creating New Deck");
                        this.props.newDeck(result.name, result.format);
                        this.setState({
                            output:newOutput,
                            input:""
                        });
                        if(result.format !== null && result.format !== undefined){
                            //Query for format//
                            let queryList = this.props.state.queries;
                            queryList = [];
                            let fullQuery = "https://api.scryfall.com/cards/search?q="
                            let query = {
                                result:"f:" + result.format,
                                id:Math.floor(Math.random() * Math.floor(1000000))
                            }
                            queryList.push(query);
                            for(var i = 0; i < queryList.length; i++){
                                if(i === 0){
                                    fullQuery = fullQuery + queryList[i].result;
                                }else{
                                    fullQuery = fullQuery + "+" + queryList[i].result;
                                }
                            }

                            fetch(fullQuery)
                            .then(res => res.json())
                            .then(json => {
                                console.log(json);
                                let newOutput = this.state.output;
                                newOutput.push(this.state.returnString + "Total Cards: " + json.total_cards);
                                this.props.updateQueryList(queryList, json);
                                this.setState({
                                    output:newOutput,
                                    input:""
                                });
                            });
                        }
                        break;
                    case "edit":
                        console.log("Edit Deck");
                        if(this.props.state.deck === null){
                            var newOutput = this.state.output;
                            newOutput.push(this.state.inputString + input);
                            newOutput.push(this.state.returnString + "No deck loaded, please a load a deck with [deck action=new] first")
                            this.setState({
                                output:newOutput,
                                input:""
                            });
                        }else{
                            var newOutput = this.state.output;
                            newOutput.push(this.state.inputString + input);
                            newOutput.push(this.state.returnString + "Editing Deck Data");
                            this.setState({
                                output:newOutput,
                                input:""
                            });
                        }
                        break;
                    case "delete":
                        console.log("Delete Deck");
                        var newOutput = this.state.output;
                        newOutput.push(this.state.inputString + input);
                        newOutput.push(this.state.returnString + "Deleting Deck");
                        this.setState({
                            output:newOutput,
                            input:""
                        });
                        break;
                    case "save":
                        console.log("Save Deck");
                        var newOutput = this.state.output;
                        newOutput.push(this.state.inputString + input);
                        newOutput.push(this.state.returnString + "Saving Deck");
                        this.setState({
                            output:newOutput,
                            input:""
                        });
                        break;
                    case "load":
                        console.log("Load Deck");
                        var newOutput = this.state.output;
                        newOutput.push(this.state.inputString + input);
                        newOutput.push(this.state.returnString + "Loading Deck");
                        this.setState({
                            output:newOutput,
                            input:""
                        });
                        break;
                    default:
                        var newOutput = this.state.output;
                        newOutput.push(this.state.inputString + input);
                        newOutput.push(this.state.returnString + "Editing Deck");
                        this.setState({
                            output:newOutput,
                            input:""
                        });
                        console.log("Edit Deck");
                        break;
                }
            }else{
                console.log("Edit Deck");
                if(this.props.state.deck === null){
                    var newOutput = this.state.output;
                    newOutput.push(this.state.inputString + input);
                    newOutput.push(this.state.returnString + "No deck loaded, please a load a deck with [deck action=new] first")
                    this.setState({
                        output:newOutput,
                        input:""
                    });
                }else{
                    var newOutput = this.state.output;
                    newOutput.push(this.state.inputString + input);
                    newOutput.push(this.state.returnString + "Editing Deck");
                    this.setState({
                        output:newOutput,
                        input:""
                    });
                }
            }

        }else if(type === "card"){

        }else{
            let newOutput = this.state.output;
            newOutput.push(this.state.inputString + input);
            newOutput.push(this.state.returnString + "return");
            this.setState({
                output:newOutput,
                input:""
            });
            console.log(this.state.output);
        }
    }
    handleKeyPress(event){
        if(event.key === "Backspace"){
            this.setState({
                input:this.state.input.slice(0,-1)
            });
        }else if(event.key === "Shift"){

        }else if(event.key === "Enter"){
            this.parseInput(this.state.input);
        }else{
            this.setState({
                input:this.state.input + event.key
            });
        }
        console.log(this.state.input);
    }
    render(){
        return(
            <React.Fragment>
                <div className='cmdprompt-wrapper effect8' onKeyDown={this.handleKeyPress} tabIndex="0">
                    <div id="cmdprompt-content" tabindex="-1">
                        <div id="cmdprompt-output">
                            !$~ {this.props.state.intro} ~$!<br/>
                            !$~ {this.props.state.version} ~$!<br/>
                            !$~ {this.props.state.deck !== null ? this.props.state.deck.name : "None Loaded"} ~$!<br/>
                            {this.state.output.map(newStr=>
                                <React.Fragment>
                                    <span>{newStr}<br/></span>
                                </React.Fragment>
                            )}
                        </div>
                        <div id="cmdprompt-input">
                            {this.state.inputString}{this.state.input}
                        </div>
                        <div id="cmdprompt-cursor">_|</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
