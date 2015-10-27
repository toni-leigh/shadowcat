var OurChoiceProjects = React.createClass({
  buildPanels: function() {
    var projects = this.props['projects'];
    var rows = [];
    var x = 0;
    projects.forEach(function(project) {
      rows.push(
        <AsidePanel
          key={'proj' + x}
          layout-class='tile'
          heading={project.name}
          image-src={project.image}
          slug={project.url}
          link-text='View project'
          type={project.project_type}
          text={project.short_desc} />
      );
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      <article className='our-choice-projects content-is-centred'>
        <h1 className='our-choice-projects__heading'>Our choice projects</h1>
        <div className='our-choice-projects__choices tiles'>
          {this.buildPanels()}
        </div>
      </article>
    )
  }
});
