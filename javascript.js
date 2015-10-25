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
  componentDidMount: function() {
    t = this;
    window.jsonpCallback = function(data) {
      t.setState(data);
    }
    var head = document.head;
    var script = document.createElement("script");
    script.setAttribute("src", this.props['api-source']);
    head.appendChild(script);
  },

  getInitialState: function() {
    return {
      navItems: [
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
      ]
    };
  },

  render: function() {
    return (
      React.createElement("main", {className: "home"}, 
        React.createElement("div", {className: "home__top-wrapper"}, 
          React.createElement(Header, {"page-slug": "home", "nav-items": this.state.navItems}), 
          React.createElement(VideoSpotlight, {src: "http://player.vimeo.com/video/95396328"}), 
          React.createElement(ServicesIntroduction, null), 
          React.createElement(OurChoiceProjects, null), 
          React.createElement(CallToAction, {heading: "Looking for our spotlight product?", "button-text": "Get a DVD Copy", "button-slug": "products"}), 
          React.createElement(BlogSmall, null), 
          React.createElement(Contact, null), 
          React.createElement(Footer, null)
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

var AsidePanel = React.createClass({displayName: "AsidePanel",
  render: function() {
    return (
      React.createElement("section", {className: 'aside-panel aside-panel--' + this.props['type']}, 
        React.createElement("img", {className: "aside-panel__image", src: this.props['image-src']}), 
        React.createElement("div", {className: "aside-panel__details"}, 
          React.createElement("h2", {className: "aside-panel__heading"}, this.props['heading']), 
          React.createElement("p", {className: "aside-panel__text"}, this.props['text']), 
          React.createElement("a", {className: "aside-panel__link button", href: this.props['slug']}, this.props['link-text'])
        )
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
    var navItems = this.props['nav-items'];
    var rows = [];
    var x = 0;
    navItems.forEach(function(navItem) {
      rows.push(React.createElement(NavigationLink, {key: 'nav' + x, slug: navItem.slug, name: navItem.name, selected: navItem.selected}));
      x ++;
    });
    return rows;
  },

  getInitialState: function() {
    return({
      'open': false
    });
  },

  openClass: function() {
    return this.state.open ? 'is-open' : 'is-closed';
  },

  slideMenu: function() {
    this.state.open = this.state.open ? false : true;
    this.setState(this.state);
  },

  render: function() {
    return (
      React.createElement("nav", {className: 'navigation ' + this.openClass()}, 
        React.createElement("div", {className: "navigation__links"}, 
          React.createElement("ul", null, 
            this.buildList()
          ), 
          React.createElement("div", {className: "navigation__close", onClick: this.slideMenu}, "close")
        ), 
        React.createElement("a", {className: "navigation__trigger button", onClick: this.slideMenu}, "Menu")
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
      React.createElement("div", {className: "section-header"}, 
        React.createElement("h1", {className: "section-header__heading"}, this.props.heading), 
        React.createElement("h2", {className: "section-header__strapline"}, this.props.strapline)
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
      React.createElement("div", {className: "background background--grey-very-light"}, 
        React.createElement("div", {className: "blog-small content-is-centred"}, 
          React.createElement(SectionHeadingWithStrapline, {heading: "Blog Latest", strapline: "These are the latest posts from our blog"}), 
          React.createElement(BlogPostSmall, {heading: "Quinoa aesthetic plaid", date: "9th Oct. 2015", text: "YOLO fingerstache next level twee. Truffaut skateboard gastropub selfies occupy distillery Tumblr cred. Authentic +1 chambray deep v meh gluten-free. Seitan organic aesthetic, wolf cronut gentrify polaroid meh Schlitz irony cold-pressed."}), 
          React.createElement(BlogPostSmall, {heading: "Pinterest hoodie deep v brunch", date: "3rd Oct. 2015", text: "Meh single-origin coffee lomo wolf. Cliche Kickstarter McSweeneys, lumbersexual Odd Future you probably havent heard of them PBR&B typewriter meggings lomo. Occupy put a bird on it keffiyeh flexitarian. Beard hella meditation, whatever wayfarers pickled sriracha disrupt."}), 
          React.createElement(BlogPostSmall, {heading: "Portland letterpress", date: "24th Sept. 2015", text: "Leggings try-hard mustache Helvetica, viral sriracha tofu wayfarers synth lumbersexual PBR&B fingerstache asymmetrical Bushwick. Scenester street art VHS, McSweeneys banjo pork belly deep v typewriter Carles four dollar toast tofu letterpress occupy stumptown"}), 
          React.createElement(BlogPostSmall, {heading: "Plaid put a bird", date: "20th Sept. 2015", text: "Brooklyn four dollar toast post-ironic photo booth, bitters fanny pack direct trade meditation Marfa. Shoreditch master cleanse single-origin coffee, hella Pitchfork Carles next level aesthetic sriracha kogi church-key. Brooklyn viral occupy, synth tousled irony."})
        )
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
        React.createElement("a", {className: "button-pair__button button-pair__button-1 button", href: '/' + this.props['link-details'][1].slug + '.html'}, this.props['link-details'][1].name), 
        React.createElement("a", {className: "button-pair__button button-pair__button-2 button", href: '/' + this.props['link-details'][2].slug + '.html'}, this.props['link-details'][2].name)
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
      React.createElement("div", {className: "background background--blue-dark"}, 
        React.createElement("div", {className: "contact content-is-centred"}, 
          React.createElement(SectionHeadingWithStrapline, {heading: "Get In Touch", strapline: "Please use any of the methods below to get in touch. We’d love to hear from you about anything."}), 
          React.createElement("form", {className: "contact__form"}, 
            React.createElement("label", {htmlFor: "name", className: "contact__form-label"}, "Name:"), 
            React.createElement("input", {id: "name", className: "contact__form-input", type: "text", placeholder: "Enter your name"}), 
            React.createElement("label", {htmlFor: "telephone", className: "contact__form-label"}, "Telephone:"), 
            React.createElement("input", {id: "telephone", className: "contact__form-input", type: "text", placeholder: "Enter your telephone number"}), 
            React.createElement("label", {htmlFor: "email", className: "contact__form-label"}, "Email:"), 
            React.createElement("input", {id: "email", className: "contact__form-input", type: "text", placeholder: "you@example.com"}), 
            React.createElement("label", {htmlFor: "message", className: "contact__form-label"}, "Message:"), 
            React.createElement("textarea", {id: "message", className: "contact__form-input contact__form-textarea", type: "text", placeholder: "Your message"}
            ), 
            React.createElement("button", {className: "contact__form-submit button"}, "Send contact")
          ), 
          React.createElement("div", {className: "contact__details"}, 
            React.createElement(Map, null), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Managing Director"), 
              React.createElement("p", {className: "contact__detail-body"}, "Alysoun Sharpe")
            ), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Telephone"), 
              React.createElement("p", {className: "contact__detail-body"}, React.createElement("a", {href: "tel:01234567890"}, "01234 567 890"))
            ), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Address"), 
              React.createElement("p", {className: "contact__detail-body"}, 
                "3 The Street,", React.createElement("br", null), 
                "A Little Town Somewhere,", React.createElement("br", null), 
                "That County,", React.createElement("br", null), 
                "AB12 3CD"
              )
            ), 
            React.createElement("div", {className: "contact__detail"}, 
              React.createElement("span", {className: "contact__detail-heading"}, "Email"), 
              React.createElement("p", {className: "contact__detail-body"}, React.createElement("a", {href: "mailto:email@shadowcatfilms.co.uk"}, "email@shadowcatfilms.co.uk"))
            )
          )
        )
      )
    )
  }
});

var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return (
      React.createElement("div", {className: "background background--black"}, 
        React.createElement("footer", {className: "footer content-is-centred"}, 
          React.createElement("ul", {className: "footer__social"}, 
            React.createElement("li", {className: "footer__social-link facebook"}, React.createElement("a", {href: "#"}, "Facebook")), 
            React.createElement("li", {className: "footer__social-link twitter"}, React.createElement("a", {href: "#"}, "Twitter")), 
            React.createElement("li", {className: "footer__social-link youtube"}, React.createElement("a", {href: "#"}, "Youtube"))
          ), 
          React.createElement("span", {className: "footer__copywrite"}, "© 2015 Shadowcat Films")
        )
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
        React.createElement(Navigation, {"nav-items": this.props['nav-items'], selected: this.props['page-slug']})
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
      React.createElement("article", {className: "our-choice-projects content-is-centred"}, 
        React.createElement("h1", {className: "our-choice-projects__heading"}, "Our choice projects"), 
        React.createElement("div", {className: "our-choice-projects__choices"}, 
          React.createElement(AsidePanel, {heading: "City Project", "image-src": "assets/img/city.jpg", slug: "documentary/1", "link-text": "View project", type: "documentary", text: "Deep v you probably havent heard of them dreamcatcher, kitsch artisan listicle"}), 
          React.createElement(AsidePanel, {heading: "People have long titles sometimes", "image-src": "assets/img/people1.jpg", slug: "documentary/2", "link-text": "View project", type: "documentary", text: "Marfa iPhone Wes Anderson wayfarers flexitarian. Hashtag Banksy church-key, slow-carb art party."}), 
          React.createElement(AsidePanel, {heading: "Business Promotion", "image-src": "assets/img/business.jpg", slug: "documentary/3", "link-text": "View project", type: "documentary", text: "Tote bag sustainable cardigan blog Brooklyn, bespoke normcore pork belly Blue Bottle."}), 
          React.createElement(AsidePanel, {heading: "Motor Sports Day", "image-src": "assets/img/sport.jpg", slug: "video-production/1", "link-text": "View project", type: "video-production", text: "PBR&B photo booth Banksy Marfa aesthetic, chambray polaroid selfies lo-fi Truffaut viral brunch."}), 
          React.createElement(AsidePanel, {heading: "Natural World", "image-src": "assets/img/nature.jpg", slug: "video-production/2", "link-text": "View project", type: "video-production", text: "Shoreditch readymade synth. Cold-pressed small batch vinyl, kitsch tilde hashtag squid try-hard."}), 
          React.createElement(AsidePanel, {heading: "Abstract Artists", "image-src": "assets/img/abstract.jpg", slug: "video-production/3", "link-text": "View project", type: "video-production", text: "Pinterest biodiesel freegan aesthetic brunch. Cray YOLO Pitchfork keffiyeh. "})
        )
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

var VideoSpotlight = React.createClass({displayName: "VideoSpotlight",
  render: function() {
    return (
      React.createElement("div", {className: "content-is-centred"}, 
        React.createElement("iframe", {className: "video-spotlight", src: this.props.src, frameBorder: "0", webkitAllowFullScreen: true, mozAllowFullScreen: true, allowFullScreen: true})
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
