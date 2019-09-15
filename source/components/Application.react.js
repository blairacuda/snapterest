const React = require('react');
const ReactCreateClass = require('create-react-class');
const Stream = require('./Stream.react');
const Collection = require('./Collection.react');

const Application = ReactCreateClass({
  getInitialState() {
    return { collectionTweets: {} };
  },

  addTweetToCollection(tweet) {
    const { collectionTweets } = this.state;
    collectionTweets[tweet.id] = tweet;
    this.setState({ collectionTweets });
  },

  removeTweetFromCollection(tweet) {
    const { collectionTweets } = this.state;
    delete collectionTweets[tweet.id];
    this.setState({ collectionTweets });
  },

  removeAllTweetsFromCollection() {
    this.setState({ collectionTweets: {} });
  },

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream onAddTweetToCollection={this.addTweetToCollection} />
          </div>
          <div className="col-md-8">
            <Collection
              tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={this.removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
            />
          </div>
        </div>
      </div>
    );
  },
});

module.exports = Application;
