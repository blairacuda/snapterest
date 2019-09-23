const React = require('react');
const ReactCreateClass = require('create-react-class');
const SnapkiteStreamClient = require('snapkite-stream-client');

const StreamTweet = require('./StreamTweet.react');
const Header = require('./Header.react');

const Stream = ReactCreateClass({
  getInitialState() {
    return { 
      tweet: null
    };
  },

  componentDidMount() {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  },

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  },

  handleNewTweet: function(tweet) {
    console.log('TWEET');
    this.setState({ tweet: tweet });
  },

  render() {
    if (this.state.tweet != null) {
      return (
        <div>
        <p>StreamTweet</p>
        <StreamTweet
          tweet={this.state.tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection}
        />
        </div>
      );
    }

    return ( <Header text="Waiting for public photos from Twitter..." /> );
  },
});

module.exports = Stream;
