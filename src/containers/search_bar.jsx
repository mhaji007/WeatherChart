import React, {Component} from 'react'

class SearchBar extends Component {

    state = {
        term: ''
    };

    onInputChange = (event) => { 
        console.log(event.target.value);
        this.setState({term:event.target.value})
    }

    render() {
        return (
            <div>
                <div className="ui container">
                    <div className="ui action input">
                        <input
                            placeholder="Get a five-day forecast in your favorite cities"
                            type="text"
                            size="75"
                            value={this.state.term}
                            onChange={this.onInputChange}/>

                        <button className="ui button">Submit</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default SearchBar;