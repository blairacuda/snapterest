const React = require('react');
const ReactDom = require('react-dom');
const ReactCreateClass = require('create-react-class');

const Header = require('./Header.react');
const Tweet = require('./Tweet.react');

const StreamTweet = ReactCreateClass({
  getInitialState() {
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null,
    };
  },

  componentWillMount() {
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter',
    });

    window.snapterest = {
      numberOfRecievedTweets: 1,
      numberOfDisplayedTweets: 1,
    };
  },
  
  componentDidMount(){
    var componentDomRepresentation = ReactDom.findDOMNode(this);
    window.snapterest.headerHtml = componentDomRepresentation.children[0].outerHtml;
    window.snapterest.tweetHtml = componentDomRepresentation.children[1].outerHtml;
  },
  
  componentWillUnmount(){
    delete window.snapterest;
  },

  render() {
    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection}
        />
      </section>
    );
  },
});

module.exports = StreamTweet;