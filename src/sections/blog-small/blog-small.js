var BlogSmall = React.createClass({
  render: function() {
    return (
      <div className='blog-small'>
        <SectionHeadingWithStrapline heading='Blog Latest' strapline='These are the latest posts from our blog' />
        <BlogPostSmall heading='Quinoa aesthetic plaid' date='9th Oct. 2015' text='YOLO fingerstache next level twee. Truffaut skateboard gastropub selfies occupy distillery Tumblr cred. Authentic +1 chambray deep v meh gluten-free. Seitan organic aesthetic, wolf cronut gentrify polaroid meh Schlitz irony cold-pressed.'/>
        <BlogPostSmall heading='Pinterest hoodie deep v brunch' date='3rd Oct. 2015' text='Meh single-origin coffee lomo wolf. Cliche Kickstarter McSweeneys, lumbersexual Odd Future you probably havent heard of them PBR&B typewriter meggings lomo. Occupy put a bird on it keffiyeh flexitarian. Beard hella meditation, whatever wayfarers pickled sriracha disrupt.'/>
        <BlogPostSmall heading='Portland letterpress' date='24th Sept. 2015' text='Leggings try-hard mustache Helvetica, viral sriracha tofu wayfarers synth lumbersexual PBR&B fingerstache asymmetrical Bushwick. Scenester street art VHS, McSweeneys banjo pork belly deep v typewriter Carles four dollar toast tofu letterpress occupy stumptown'/>
        <BlogPostSmall heading='Plaid put a bird' date='20th Sept. 2015' text='Brooklyn four dollar toast post-ironic photo booth, bitters fanny pack direct trade meditation Marfa. Shoreditch master cleanse single-origin coffee, hella Pitchfork Carles next level aesthetic sriracha kogi church-key. Brooklyn viral occupy, synth tousled irony.'/>
      </div>
    )
  }
});
