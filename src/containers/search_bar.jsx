import React, {Component} from 'react'

class SearchBar extends Component {

    state = {
        term: ''
    };

    onInputChange = (event) => { 
        console.log(event.target.value);
        this.setState({term:event.target.value})
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui container" style={{marginTop:"20px"}}>
                    <div className="ui fluid action input">
                        <input
                            placeholder="Get a five-day forecast in your favorite cities"
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}/>

                        <button className="ui button">Submit</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default SearchBar;