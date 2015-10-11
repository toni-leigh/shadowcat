var AsidePanel = React.createClass({displayName: "AsidePanel",
  render: function() {
    return (
      React.createElement("div", {className: "aside-panel"}
      )
    )
  }
});

var BreadCrumbs = React.createClass({displayName: "BreadCrumbs",
  render: function() {
    return (
      React.createElement("div", {className: "bread-crumbs"}
      )
    )
  }
});

var ButtonCta = React.createClass({displayName: "ButtonCta",
  render: function() {
    return (
      React.createElement("div", {className: "button-cta"}
      )
    )
  }
});

var ButtonLarge = React.createClass({displayName: "ButtonLarge",
  render: function() {
    return (
      React.createElement("div", {className: "button-large"}
      )
    )
  }
});

var ButtonSmall = React.createClass({displayName: "ButtonSmall",
  render: function() {
    return (
      React.createElement("div", {className: "button-small"}
      )
    )
  }
});

var ButtonSubmit = React.createClass({displayName: "ButtonSubmit",
  render: function() {
    return (
      React.createElement("div", {className: "button-submit"}
      )
    )
  }
});

var ContactDetail = React.createClass({displayName: "ContactDetail",
  render: function() {
    return (
      React.createElement("div", {className: "contact-detail"}
      )
    )
  }
});

var ImageThumbnail = React.createClass({displayName: "ImageThumbnail",
  render: function() {
    return (
      React.createElement("div", {className: "image-thumbnail"}
      )
    )
  }
});

var InputText = React.createClass({displayName: "InputText",
  render: function() {
    return (
      React.createElement("div", {className: "input-text"}
      )
    )
  }
});

var InputTextarea = React.createClass({displayName: "InputTextarea",
  render: function() {
    return (
      React.createElement("div", {className: "input-textarea"}
      )
    )
  }
});

var KeyValueDetail = React.createClass({displayName: "KeyValueDetail",
  render: function() {
    return (
      React.createElement("div", {className: "key-value-detail"}
      )
    )
  }
});

var Logo = React.createClass({displayName: "Logo",
  render: function() {
    return (
      React.createElement("img", {className: "logo", src: "assets/img/logo.svg"})
    )
  }
});

var Map = React.createClass({displayName: "Map",
  render: function() {
    return (
      React.createElement("div", {className: "map"}
      )
    )
  }
});

var Navigation = React.createClass({displayName: "Navigation",
  buildList: function() {
    var navItems = this.getNavItems();
    var rows = [];
    var x = 0;
    this.getNavItems().forEach(function(navItem) {
      rows.push(React.createElement(NavigationLink, {key: 'nav' + x, slug: navItem.slug, name: navItem.name, selected: navItem.selected}));
      x ++;
    });
    return rows;
  },

  getNavItems: function() {
    return [
      {
        name: 'Home',
        slug: 'index',
        selected: true
      },
      {
        name: 'Documentaries',
        slug: 'documentaries',
        selected: false
      },
      {
        name: 'Video Production',
        slug: 'video-production',
        selected: false
      },
      {
        name: 'Contact',
        slug: 'contact',
        selected: false
      },
      {
        name: 'Blog',
        slug: 'blog',
        selected: false
      },
      {
        name: 'Products',
        slug: 'products',
        selected: false
      },
      {
        name: 'Basket',
        slug: 'basket',
        selected: false
      }
    ];
  },

  render: function() {
    return (
      React.createElement("nav", {className: "navigation"}, 
        React.createElement("ul", null, 
          this.buildList()
        )
      )
    )
  }
});

var NavigationLink = React.createClass({displayName: "NavigationLink",
  navLiClass: function() {
    return 'navigation__item navigation__item--' + this.props.slug;
  },
  navLinkClass: function() {
    return 'navigation__link navigation__link--' + this.props.slug + ' ' + this.navSelected();
  },
  navSelected: function() {
    return true === this.props.selected ? 'selected' : ''
  },
  navUrl: function() {
    return '/' + this.props.slug + '.html';
  },
  render: function() {
    return (
      React.createElement("li", {className: this.navLiClass()}, 
        React.createElement("a", {className: this.navLinkClass(), href: this.navUrl()}, 
          this.props.name
        )
      )
    )
  }
});

var PageHeading = React.createClass({displayName: "PageHeading",
  render: function() {
    return (
      React.createElement("div", {className: "page-heading"}
      )
    )
  }
});

var SectionHeadingSimple = React.createClass({displayName: "SectionHeadingSimple",
  render: function() {
    return (
      React.createElement("div", {className: "section-heading-simple"}
      )
    )
  }
});

var SectionHeadingWithStrapline = React.createClass({displayName: "SectionHeadingWithStrapline",
  render: function() {
    return (
      React.createElement("div", {class: "section-header"}, 
        React.createElement("h1", {className: "section-header__heading"}, this.props.heading), 
        React.createElement("h2", {className: "section-header__strapline"}, this.props.strapline)
      )
    )
  }
});

var Blog = React.createClass({displayName: "Blog",
  render: function() {
    return (
      React.createElement("div", {className: "blog"}
      )
    )
  }
});

var BlogPost = React.createClass({displayName: "BlogPost",
  render: function() {
    return (
      React.createElement("div", {className: "blog-post"}
      )
    )
  }
});

var Home = React.createClass({displayName: "Home",
  render: function() {
    return (
      React.createElement("main", {className: "home"}, 
        React.createElement("div", {className: "home__top-wrapper"}, 
          React.createElement(Header, {"page-slug": "home"}), 
          React.createElement(VideoSpotlight, {src: "//player.vimeo.com/video/95396328"}), 
          React.createElement(ServicesIntroduction, null), 
          React.createElement(OurChoiceProjects, null), 
          React.createElement(CallToAction, {heading: "Looking for our spotlight product?", "button-text": "Get a DVD Copy", "button-slug": "products"}), 
          React.createElement(BlogSmall, null)
        )
      )
    )
  }
});

var Project = React.createClass({displayName: "Project",
  render: function() {
    return (
      React.createElement("div", {className: "project"}
      )
    )
  }
});

var Service = React.createClass({displayName: "Service",
  render: function() {
    return (
      React.createElement("div", {className: "service"}
      )
    )
  }
});

var Aside = React.createClass({displayName: "Aside",
  render: function() {
    return (
      React.createElement("div", {className: "aside"}
      )
    )
  }
});

var BlogSmall = React.createClass({displayName: "BlogSmall",
  render: function() {
    return (
      React.createElement("div", {className: "blog-small content-is-centred"}, 
        React.createElement(SectionHeadingWithStrapline, {heading: "Blog Latest", strapline: "These are the latest posts from our blog"}), 
        React.createElement(BlogPostSmall, {heading: "Quinoa aesthetic plaid", date: "9th Oct. 2015", text: "YOLO fingerstache next level twee. Truffaut skateboard gastropub selfies occupy distillery Tumblr cred. Authentic +1 chambray deep v meh gluten-free. Seitan organic aesthetic, wolf cronut gentrify polaroid meh Schlitz irony cold-pressed."}), 
        React.createElement(BlogPostSmall, {heading: "Pinterest hoodie deep v brunch", date: "3rd Oct. 2015", text: "Meh single-origin coffee lomo wolf. Cliche Kickstarter McSweeneys, lumbersexual Odd Future you probably havent heard of them PBR&B typewriter meggings lomo. Occupy put a bird on it keffiyeh flexitarian. Beard hella meditation, whatever wayfarers pickled sriracha disrupt."}), 
        React.createElement(BlogPostSmall, {heading: "Portland letterpress", date: "24th Sept. 2015", text: "Leggings try-hard mustache Helvetica, viral sriracha tofu wayfarers synth lumbersexual PBR&B fingerstache asymmetrical Bushwick. Scenester street art VHS, McSweeneys banjo pork belly deep v typewriter Carles four dollar toast tofu letterpress occupy stumptown"}), 
        React.createElement(BlogPostSmall, {heading: "Plaid put a bird", date: "20th Sept. 2015", text: "Brooklyn four dollar toast post-ironic photo booth, bitters fanny pack direct trade meditation Marfa. Shoreditch master cleanse single-origin coffee, hella Pitchfork Carles next level aesthetic sriracha kogi church-key. Brooklyn viral occupy, synth tousled irony."})
      )
    )
  }
});

var BlogPostSmall = React.createClass({displayName: "BlogPostSmall",
  render: function() {
    return (
      React.createElement("article", {className: "blog-small__post text"}, 
        React.createElement("h1", {className: "blog-small__post-heading"}, this.props.heading), 
        React.createElement("span", {className: "blog-small__post-date"}, this.props.date), 
        React.createElement("div", {className: "blog-small__post-text"}, 
          React.createElement("p", null, this.props.text)
        )
      )
    )
  }
});

var ButtonPair = React.createClass({displayName: "ButtonPair",
  render: function() {
    return (
      React.createElement("div", {className: "button-pair"}, 
        React.createElement("a", {className: "button-pair__button button", href: '/' + this.props['link-details'][1].slug + '.html'}, this.props['link-details'][1].name), 
        React.createElement("a", {className: "button-pair__button button", href: '/' + this.props['link-details'][2].slug + '.html'}, this.props['link-details'][2].name)
      )
    )
  }
});

var CallToAction = React.createClass({displayName: "CallToAction",
  render: function() {
    return (
      React.createElement("div", {className: "background background--orange-dark"}, 
        React.createElement("article", {className: "content-is-centred call-to-action"}, 
          React.createElement("h1", {className: "call-to-action__heading"}, this.props.heading), 
          React.createElement("a", {className: "call-to-action__button button", href: this.props['button-slug'] + '.html'}, this.props['button-text'])
        )
      )
    )
  }
});

var ChoiceProjects = React.createClass({displayName: "ChoiceProjects",
  render: function() {
    return (
      React.createElement("div", {className: "choice-projects"}
      )
    )
  }
});

var Contact = React.createClass({displayName: "Contact",
  render: function() {
    return (
      React.createElement("div", {className: "contact"}
      )
    )
  }
});

var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return (
      React.createElement("div", {className: "footer"}
      )
    )
  }
});

var Header = React.createClass({displayName: "Header",
  render: function() {
    return (
      React.createElement("header", {className: "content-is-centred header"}, 
        React.createElement(Logo, null), 
        React.createElement("div", {className: "header__business-name"}, "Shadowcat Films"), 
        React.createElement(Navigation, {selected: this.props['page-slug']})
      )
    )
  }
});

var Heading = React.createClass({displayName: "Heading",
  render: function() {
    return (
      React.createElement("div", {className: "heading"}
      )
    )
  }
});

var ImageFixed = React.createClass({displayName: "ImageFixed",
  render: function() {
    return (
      React.createElement("div", {className: "image-fixed"}
      )
    )
  }
});

var Lightbox = React.createClass({displayName: "Lightbox",
  render: function() {
    return (
      React.createElement("div", {className: "lightbox"}
      )
    )
  }
});

var OurChoiceProjects = React.createClass({displayName: "OurChoiceProjects",
  render: function() {
    return (
      React.createElement("article", {className: "our-choice-projects"}
      )
    )
  }
});

var ServicesIntroduction = React.createClass({displayName: "ServicesIntroduction",
  getButtonDetails: function() {
    return {
      1: {
        name: 'Documentaries',
        slug: 'documentaries'
      },
      2: {
        name: 'Video Production',
        slug: 'video-production'
      }
    };
  },
  render: function() {
    return (
      React.createElement("article", {className: "services-introduction content-is-centred"}, 
        React.createElement("h1", {className: "services-introduction__heading"}, "Find out all about our services"), 
        React.createElement(ButtonPair, {"link-details": this.getButtonDetails()}), 
        React.createElement("div", {className: "services-introduction__text text"}, 
          React.createElement("p", null, 
            "Flexitarian single-origin coffee health goth Williamsburg, before they sold out fanny pack trust f" + ' ' +
            "und banh mi. Flexitarian keytar biodiesel flannel Marfa tote bag. Quinoa aesthetic plaid put a bird" + ' ' +
            "on it, Pinterest hoodie deep v brunch twee authentic normcore Portland letterpress."
          ), 
          React.createElement("p", null, 
            "Williamsburg, before they sold out fanny pack trust fund banh mi.Flexitarian single-origin coffee" + ' ' +
            "health goth  Flexitarian keytar biodiesel flannel Marfa tote bag. Quinoa aesthetic plaid put a" + ' ' +
            "bird on it, Pinterest hoodie deep v brunch twee authentic normcore Portland letterpress."
          ), 
          React.createElement("p", null, 
            "Quinoa aesthetic plaid put a bird on it, Pinterest hoodie deep v brunch twee authentic normcore" + ' ' +
            "Portland letterpress. Flexitarian single-origin coffee health goth Williamsburg, before they sold" + ' ' +
            "out fanny pack trust fund banh mi. Flexitarian keytar biodiesel flannel Marfa tote bag. Flexitarian" + ' ' +
            "single-origin coffee health goth Williamsburg, before they sold out."
          )
        )
      )
    )
  }
});

var Testimonials = React.createClass({displayName: "Testimonials",
  render: function() {
    return (
      React.createElement("div", {className: "testimonials"}
      )
    )
  }
});

var Text = React.createClass({displayName: "Text",
  render: function() {
    return (
      React.createElement("div", {className: "text"}
      )
    )
  }
});

var ThumbnailGallery = React.createClass({displayName: "ThumbnailGallery",
  render: function() {
    return (
      React.createElement("div", {className: "thumbnail-gallery"}
      )
    )
  }
});

var Video = React.createClass({displayName: "Video",
  render: function() {
    return (
      React.createElement("div", {className: "video"}
      )
    )
  }
});

var VideoSpotlight = React.createClass({displayName: "VideoSpotlight",
  render: function() {
    return (
      React.createElement("div", {className: "content-is-centred"}, 
        React.createElement("iframe", {className: "video-spotlight", src: this.props.src, frameborder: "0", webkitallowfullscreen: true, mozallowfullscreen: true, allowfullscreen: true})
      )
    )
  }
});
