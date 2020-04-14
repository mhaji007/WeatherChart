import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

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

        this.props.fetchWeather(this.state.term);

        this.setState({term: ''});
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

function mapDispatchToProps(dispatch) {
return bindActionCreators({fetchWeather}, dispatch);

}

export default connect(null, mapDispatchToProps) (SearchBar);