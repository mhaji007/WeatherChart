import React, {Component} from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="ui container">
                    <div class="ui action input">
                        <input type="text" placeholder="Search..."/>
                        <button class="ui button">Submit</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default SearchBar;