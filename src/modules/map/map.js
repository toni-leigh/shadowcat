var Map = React.createClass({
  render: function() {
    return (
      <iframe
        className={'map ' + this.props['parent-element'] + '__map'}
        frameBorder="0"
        src={"https://www.google.com/maps/embed/v1/place?zoom=13&key=AIzaSyBgYZX_kaXMWqE-HVoXAqJQmrDhFZZ9ReU&q=" + this.props['address'].replace(/ /g, '+')} allowFullScreen>
      </iframe>
    )
  }
});
