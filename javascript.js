var Heading = React.createClass({displayName: "Heading",

  render: function() {
    return (
      React.createElement("header", {className: "heading"}, 
        React.createElement("h1", {className: "heading__heading"}, "Welcome to ", this.props.name, " Cart"), 
        React.createElement("h2", {className: "heading__strapline"}, "My first react Component set")
      )
    );
  }

});

var HeadingTest = React.createClass({displayName: "HeadingTest",

  render: function() {
    return (
      React.createElement("header", {className: "heading"}, 
        React.createElement("h1", {className: "heading__heading"}, "Testings to ", this.props.name, " Cart"), 
        React.createElement("h2", {className: "heading__strapline"}, "My first react Component set")
      )
    );
  }

});
