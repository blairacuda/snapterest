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
    console.log("boutta mount");
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
  
  componentWillReceiveProps(nextProps){
    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    var headerText;
    
    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    })

    if (isNumberOfCharactersIncreasing){
      headerText = 'Number of characters is increasing';
    }else{
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText: headerText
    })

    window.snapterest.numberOfRecievedTweets++;
  },
  
  shouldComponentUpdate(nextProps, nextState){
    console.log("Tweet Length: " + nextProps.tweet.length);
    return (nextProps.tweet.length > 1);
  },
  
  componentDidUpdate(prevProps, prevState){
    window.snapterest.numberOfDisplayedTweets++;
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