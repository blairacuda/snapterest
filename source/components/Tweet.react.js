const React = require('react');
const ReactCreateClass = require('create-react-class');
const PropTypes = require('prop-types');

var tweetStyle={
    position: 'relative',
    display: 'inline-block',
    width: '300px',
    height: '400px',
    margin: '10px'
};

var imageStyle={
    maxHeight: '400px',
    boxShadow: '0px 1px 1px 0px #aaa',
    border: '1px solid #fff'
};

const Tweet = ReactCreateClass({
    propTypes:{
        tweet: function(properties, propertyName, componentName){
            var tweet = properties[propertyName];

            if (!tweet){ return new Error('Tweet must be set.'); }

            if (!tweet.media){ return new Error('Tweet must have an image.');}
        },

        onImageClick: PropTypes.func
    },

    handleImageClick(){
        var tweet = this.props.tweet;
        var onImageClick = this.props.onImageClick;
        if (onImageClick){onImageClick(tweet);}
    },
    render(){
        var tweet = this.props.tweet;
        var tweetMediaUrl = tweet.media[0].url;

        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} onClick={this.handleImageClick} style={imageStyle}/>
            </div>
        )
    }
});

module.exports = Tweet;
