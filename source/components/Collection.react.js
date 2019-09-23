const React = require('react');
const ReactCreateClass = require('create-react-class');
var ReactDomServer = require('react-dom/server');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

const Collection = ReactCreateClass({
    createHtmlMarkupStringOfTweetList(){
        var htmlString = ReactDomServer.renderToStaticMarkup(<TweetList tweets={this.props.tweets}/>);
        var htmlMarkup={html: htmlString};
        return JSON.stringify(htmlMarkup);
    },
    
    getListOfTweetIds(){ return Object.keys(this.props.tweets);},    
    getNumberOfTweetsInCollection(){ return this.getListOfTweetIds().length;},
    
    render: function(){
        var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection;
        if (numberOfTweetsInCollection > 0){
            var tweets = this.props.tweets;
            var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
            var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

            return (
                <div>
                    <CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection}
                                        htmlmar={htmlMarkup} onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}/>
                </div>
            )
        }
        return <Header text="Your collections is empty."/>;
    }
});

module.exports = Collection;
