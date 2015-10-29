var AsidePanel = React.createClass({displayName: "AsidePanel",
  getButton: function() {
    var button = null;
    if (this.props['aside-type'] =='signpost') {
      button = React.createElement("a", {className: "aside-panel__link button", href: this.props['slug']}, this.props['link-text'])
    }
    return button;
  },
  getImage: function() {
    var image = null;
    if (this.props['aside-type'] =='image') {
      image = React.createElement("img", {className: "aside-panel__image", src: 'http://shadowcatfilms.com/' + this.props['image-src']})
    }
    return image;
  },
  hoverOverride: function() {
    hoverOverride = '';
    if (this.props['aside-type'] =='info') {
      hoverOverride = 'aside-panel__details--always-shown';
    }
    return hoverOverride;
  },
  render: function() {
    return (
      React.createElement("section", {className: 'aside-panel aside-panel--' + this.props['type'] + ' ' + this.props['layout-class']}, 
        this.getImage(), 
        React.createElement("div", {className: 'aside-panel__details ' + this.hoverOverride()}, 
          React.createElement("h2", {className: "aside-panel__heading"}, this.props['heading']), 
          React.createElement("p", {className: "aside-panel__text"}, this.props['text']), 
          this.getButton()
        )
      )
    )
  }
});

var BreadCrumbs = React.createClass({displayName: "BreadCrumbs",
  buildCrumbs: function() {
    var crumbs = this.props['bread-crumbs'];
    var rows = [];
    var x = 0;
    crumbs.forEach(function(crumb) {
      if (crumb.slug !== null) {
        rows.push(React.createElement("li", {className: "bread-crumbs__crumb"}, React.createElement("a", {href: '/' + crumb.slug}, crumb.name)));
      } else {
        rows.push(React.createElement("li", {className: "bread-crumbs__crumb bread-crumbs__crumb--last"}, React.createElement("span", null, crumb.name)));
      }
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      React.createElement("div", {className: "bread-crumbs"}, 
        React.createElement("ul", null, 
          this.buildCrumbs()
        )
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

var InputText = React.createClass({displayName: "InputText",
  render: function() {
    return (
      React.createElement("div", {className: "input-text"}
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
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      React.createElement("main", {className: "home"}, 
        React.createElement("div", {className: "home__top-wrapper"}, 
          React.createElement(Header, {"page-slug": "home", "nav-items": this.state.navItems}), 
          React.createElement(VideoSpotlight, {src: "http://player.vimeo.com/video/95396328"}), 
          React.createElement(ServicesIntroduction, {"services-text": this.state.node_details.node_html}), 
          React.createElement(OurChoiceProjects, {projects: this.state.home_projects}), 
          React.createElement(CallToAction, {heading: "Looking for our spotlight product?", "button-text": "Get a DVD Copy", "button-slug": "products"}), 
          React.createElement(BlogSmall, {"blog-posts": this.state.home_blog_posts}), 
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
  getInitialState: function() {
    console.log(window.data)
    return window.data;
  },

  render: function() {
    return (
      React.createElement("div", {className: "service background background--grey-very-light"}, 
        React.createElement(Header, {"page-slug": "documentaries", "nav-items": this.state.navItems}), 
        React.createElement(Heading, {
          background: "assets/backgrounds/sea2.jpg", 
          title: "Documentaries", 
          strapline: "This is the page that talks all about the documentaries"}), 
        React.createElement(TextDetails, null), 
        React.createElement(Contact, null), 
        React.createElement(Footer, null)
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
  buildList: function() {
    var blogPosts = this.props['blog-posts'];
    var rows = [];
    var x = 0;
    blogPosts.forEach(function(post) {
      rows.push(
        React.createElement(BlogPostSmall, {
          heading: post.name, 
          date: post.created, 
          text: post.node_html})
      );
      x ++;
    });
    return rows;
  },
  render: function() {
    return (
      React.createElement("div", {className: "background background--grey-very-light"}, 
        React.createElement("div", {className: "blog-small content-is-centred"}, 
          React.createElement(SectionHeadingWithStrapline, {heading: "Blog Latest", strapline: "These are the latest posts from our blog"}), 
          this.buildList()
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
        React.createElement("div", {className: "blog-small__post-text text", dangerouslySetInnerHTML: {__html: this.props['text']}}
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
      React.createElement("div", {className: "background background--grey-very-light"}, 
        React.createElement("header", {className: "content-is-centred header"}, 
          React.createElement(Logo, null), 
          React.createElement("div", {className: "header__business-name"}, "Shadowcat Films"), 
          React.createElement(Navigation, {"nav-items": this.props['nav-items'], selected: this.props['page-slug']})
        )
      )
    )
  }
});

var Heading = React.createClass({displayName: "Heading",
  getInitialState: function() {
    return {
      breadCrumbs: [
        {
          name: 'Home',
          slug: 'index'
        },
        {
          name: 'Documentaries',
          slug: null
        }
      ]
    }
  },

  render: function() {
    return (
      React.createElement("div", {className: "heading", style: { backgroundImage: 'url(' + this.props['background'] + ')'}}, 
        React.createElement("div", {className: "heading__tinted-overlay"}, 
          React.createElement("div", {className: "heading__content content-is-centred"}, 
            React.createElement(BreadCrumbs, {"bread-crumbs": this.state.breadCrumbs}), 
            React.createElement("h1", {className: "heading__title"}, this.props['title']), 
            React.createElement("span", {className: "heading__strapline"}, this.props['strapline'])
          )
        )
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
  buildPanels: function() {
    var projects = this.props['projects'];
    var rows = [];
    var x = 0;
    projects.forEach(function(project) {
      rows.push(
        React.createElement(AsidePanel, {
          key: 'proj' + x, 
          "layout-class": "tile", 
          "aside-type": "signpost", 
          heading: project.name, 
          "image-src": project.image, 
          slug: project.url, 
          "link-text": "View project", 
          type: project.project_type, 
          text: project.short_desc})
      );
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      React.createElement("article", {className: "our-choice-projects content-is-centred"}, 
        React.createElement("h1", {className: "our-choice-projects__heading"}, "Our choice projects"), 
        React.createElement("div", {className: "our-choice-projects__choices tiles"}, 
          this.buildPanels()
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
        React.createElement("div", {className: "services-introduction__text text", dangerouslySetInnerHTML: {__html: this.props['services-text']}}
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
      React.createElement("div", {className: "text"}, 
        React.createElement("p", null, 
          "Hashtag trust fund Odd Future deep v lumbersexual, biodiesel retro forage occupy butcher. Pork belly" + ' ' +
          "art party banjo single-origin coffee flannel, actually sriracha mixtape. Shoreditch mixtape skateboard," + ' ' +
          "banjo migas plaid hoodie Schlitz Brooklyn kitsch trust fund slow-carb. Brooklyn cronut biodiesel,"
        ), 
        React.createElement("p", null, 
          "Chillwave Wes Anderson listicle fap wayfarers Echo Park paleo readymade lumbersexual tofu +1 you probably" + ' ' +
          "havent heard of them. Meggings flannel seitan tilde actually, hoodie cardigan master cleanse occupy"
        ), 
        React.createElement("h2", null, "Ethical Banksy dreamcatcher."), 
        React.createElement("p", null, 
          "Tofu lo-fi kitsch raw denim umami distillery. Single-origin coffee ugh art party craft beer, next level" + ' ' +
          "shabby chic McSweeneys iPhone chambray cray narwhal. Listicle fingerstache shabby chic Tumblr keffiyeh swag." + ' ' +
          "Leggings semiotics Pinterest artisan, Thundercats fashion axe Echo Park Pitchfork yr food truck put a" + ' ' +
          "bird on it tilde."
        ), 
        React.createElement("h2", null, "Health goth shabby"), 
        React.createElement("p", null, 
          "Chic mumblecore cred. Gastropub asymmetrical twee High Life, tote bag squid scenester heirloom. Twee mlkshk" + ' ' +
          "fanny pack church-key sustainable. Gastropub put a bird on it meh direct trade"
        ), 
        React.createElement("p", null, 
          "Blue Bottle tattooed, sustainable salvia American Apparel literally organic. Direct trade selvage umami" + ' ' +
          "beard chambray, Tumblr fap Etsy McSweeneys fanny pack tattooed swag High Life."
        ), 
        React.createElement("p", null, 
          "Hashtag trust fund Odd Future deep v lumbersexual, biodiesel retro forage occupy butcher. Pork belly" + ' ' +
          "art party banjo single-origin coffee flannel, actually sriracha mixtape. Shoreditch mixtape skateboard," + ' ' +
          "banjo migas plaid hoodie Schlitz Brooklyn kitsch trust fund slow-carb. Brooklyn cronut biodiesel,"
        ), 
        React.createElement("h2", null, "Ethical Banksy dreamcatcher."), 
        React.createElement("p", null, 
          "Chillwave Wes Anderson listicle fap wayfarers Echo Park paleo readymade lumbersexual tofu +1 you probably" + ' ' +
          "havent heard of them. Meggings flannel seitan tilde actually, hoodie cardigan master cleanse occupy"
        ), 
        React.createElement("p", null, 
          "Tofu lo-fi kitsch raw denim umami distillery. Single-origin coffee ugh art party craft beer, next level" + ' ' +
          "shabby chic McSweeneys iPhone chambray cray narwhal. Listicle fingerstache shabby chic Tumblr keffiyeh swag." + ' ' +
          "Leggings semiotics Pinterest artisan, Thundercats fashion axe Echo Park Pitchfork yr food truck put a" + ' ' +
          "bird on it tilde."
        ), 

        React.createElement("p", null, 
          "Chic mumblecore cred. Gastropub asymmetrical twee High Life, tote bag squid scenester heirloom. Twee mlkshk" + ' ' +
          "fanny pack church-key sustainable. Gastropub put a bird on it meh direct trade"
        )
      )
    )
  }
});

var TextDetails = React.createClass({displayName: "TextDetails",
  render: function() {
    return (
      React.createElement("div", {className: "text-details text-details--text-is-left content-is-centred"}, 
        React.createElement("div", {className: "text-details__text"}, 
          React.createElement(Text, null)
        ), 
        React.createElement("aside", {className: "text-details__aside"}, 
          React.createElement(AsidePanel, {
            "layout-class": "text-details__aside-panel", 
            heading: "This is a new aside", 
            "aside-type": "info", 
            type: "", 
            text: "Meggings cray Carles Odd Future, aesthetic next level lumbersexual street art stumptown"}), 
          React.createElement(AsidePanel, {
            "layout-class": "text-details__aside-panel", 
            heading: "My new aside is also here", 
            "aside-type": "image", 
            "image-src": "assets/img/business.jpg", 
            type: "", 
            text: "Plaid High Life you probably haven't heard of them polaroid, try-hard cornhole Pinterest."}), 
          React.createElement(AsidePanel, {
            "layout-class": "text-details__aside-panel", 
            heading: "And another aside panel", 
            "aside-type": "image", 
            "image-src": "assets/img/people1.jpg", 
            type: "", 
            text: "Cornhole quinoa Wes Anderson, typewriter chillwave forage yr heirloom squid fashion axe you probably haven't heard of them viral brunch."})
        )
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
        React.createElement("iframe", {className: "video-spotlight", src: this.props.src, frameBorder: "0", webkitAllowFullScreen: true, mozAllowFullScreen: true, allowFullScreen: true})
      )
    )
  }
});
