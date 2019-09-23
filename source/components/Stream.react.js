const React = require('react');
const ReactCreateClass = require('create-react-class');
const SnapkiteStreamClient = require('snapkite-stream-client');

const StreamTweet = require('./StreamTweet.react');
const Header = require('./Header.react');

const Stream = ReactCreateClass({
  getInitialState() {
    return { tweet: null };
  },

  componentDidMount() {
    SnapkiteStreamClient.initialiseStream(this.handleNewTweet);
  },

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  },

  handleNewTweet(tweet) {
    console.log('TWEET');
    this.setState({ tweet: tweet });
  },

  render() {
    const { tweet } = this.state;

    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection}
        />
      );
    }

    return (
      <Header text="Waiting for public photos from Twitter..." />
    );
  },
});

module.exports = Stream;
