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
          aside-type='signpost'
          heading={project.name}
          image-src={'http://shadowcatfilms.co.uk/' + project.image}
          slug={project.url + '.html'}
          link-text='View project'
          type={project.project_type}
          text={project.short_desc} />
      );
      x ++;
    });
    return rows;
  },

  componentDidMount: function() {
    window.AnimationTriggers.add('our-choice-projects', 200);
  },

  render: function() {
    return (
      <article className='animtrig-our-choice-projects our-choice-projects content-is-centred'>
        <h1 className='our-choice-projects__heading'>Our choice projects</h1>
        <div className='our-choice-projects__choices tiles'>
          {this.buildPanels()}
        </div>
      </article>
    )
  }
});
