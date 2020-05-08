import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.lat && !this.state.errMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        return <Spinner message="Checking location..." />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);