import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

// takes the state object, and maps it to props on the component
// called mapStateToProps by convention
// state contains all state in the entire store
const mapStateToProps = (state) => {
    // the object we return is what shows up as props on the component
    // ie. (inside SongList): this.props === { songs: state.songs }
    return { songs: state.songs };
};

// first arg: which pieces of state we want
// second arg: an object, containing the actions we want access to, and the
// props values to map them to (NB below uses shorthand for { selectSong: selectSong })
//   NB. calling these action creators will create the action object,
//   BUT ALSO dispatch the action automatically (ie. call dispatch on redux)

// NB. this syntax is:
// - connect returns a function
// - then invoke that function once returned
export default connect(
    mapStateToProps,
    { selectSong }
)(SongList);