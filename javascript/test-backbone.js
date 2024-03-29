$(document).ready(function() {

	// instancie un objet du modele
	var localModel = new Backbone.Model({
		data: [
			{ alt: 'Bebo', src:'http://2.bp.blogspot.com/-e-osk7xoa-I/T8-WxAU8rII/AAAAAAAAAI8/zOcsqT94_Xw/s320/BeboLogo.jpg' },
			{ alt: 'Blogger', src:'http://3.bp.blogspot.com/-mK9dW_Vl0jU/ULUZ6kLK2jI/AAAAAAAAAGQ/HRJuct4JzXo/s1600/Blogger-logo.jpg' },
			{ alt: 'Brightkite', src:'http://asset3.cbsistatic.com/cnwk.1d/i/bto/20080428/BrightKite-logo.png' },
			{ alt: 'Delicious', src:'http://descary.com/wp-content/uploads/2009/2010/12/delicious-11.jpg' },
			{ alt: 'Design Float', src:'http://www.designer-daily.com/wp-content/uploads/2008/03/logo-designfloat.png' },
			{ alt: 'Digg', src:'http://thetechblock.com/wp-content/uploads/2012/07/digg-logo-blue.jpg' },
			{ alt: 'Evernote', src:'http://www.roadtoentrepreneur.com/wp-content/uploads/2012/03/evernote-logo-1.png' },
			{ alt: 'Facebook', src:'http://www.elitis.ca/blogue/wp-content/uploads/2011/06/facebook_logo.png' },
			{ alt: 'Flickr', src:'http://www.thetechblock.com/wp-content/uploads/2012/04/flickr.jpg' },
			{ alt: 'Friendfeed', src:'http://static.ddmcdn.com/gif/friendfeed-3.jpg' },
			{ alt: 'Google+', src:'http://cdn.bitrebels.netdna-cdn.com/wp-content/uploads/2013/01/google-plus-business-page-5.jpg' }, 
			{ alt: 'LinkedIn', src:'http://4.bp.blogspot.com/-mdB4PJB1ito/T8NdgffA6uI/AAAAAAAAAZs/G18r0I-QF9g/s320/linkedin_logo.png' },
			{ alt: 'MySpace', src:'http://blog.cgsm.com/wp-content/uploads/2011/01/myspace-logo-in-high-resolution-300x235.jpg' },
			{ alt: 'Netvibes', src:'http://www.geekozor.com/wp-content/uploads/2010/03/netvibes-logo-300x114.jpg' },
			{ alt: 'Pinterest', src:'http://www.autourduweb.fr/wp-content/uploads/2012/03/pinterest-google-chrome-500x375.jpg' },
			{ alt: 'Reddit', src:'http://cdn.socialmediaexaminer.com/wp-content/uploads/2012/08/bb-reddit.png?9d7bd4' },
			{ alt: 'Rss Feed', src:'http://increaserss.com/wp-content/uploads/rss-feeds-.jpg' },
			{ alt: 'StumbleUpon', src:'http://www.mysocialagency.com/images/stories/blog/2011/social%20media%20agency%20leeds.png' },
			{ alt: 'Technocrati', src:'http://www.co.morris.nj.us/learning20/images/technorati.jpg' },
			{ alt: 'Tumblr', src:'http://deathandtaxesmag.wpengine.netdna-cdn.com/wp-content/uploads/2012/12/tumblr-hacked-gnaa.jpg' },
			{ alt: 'Twitter', src:'http://www.lesinrocks.com/wp-content/thumbnails/uploads/2012/10/twitter-icon-pack2-604x432-604x432.jpg' },
			{ alt: 'Vimeo', src:'http://www.zachklein.com/hello/298464/400/vimeo-2006.04.18-13.46.49.jpg' },
			{ alt: 'Yelp', src:'http://www.geoinweb.com/wp-content/uploads/2012/10/yelp.jpg' },
			{ alt: 'Youtube', src:'http://www.gspia.pitt.edu/Portals/0/images/logo/youtube-logo.jpg' }
		]
	});
	
	// definition d'une classe de type vue
	// cette classe gerer les evenements sur le click sur le bouton load, le mouseover et mouseout sur le span (et le positionnement des bulles)
	// cette vue va remplir une liste des objets du modele a l'aide du div cache list-template
	// elle va aussi se baser sur le div cache template-preview pour afficher la bulle
	var View = Backbone.View.extend({
		initialize: function() {
			this.template = $("#list-template").children();
		},
		el: "#container",
		events: {
			"click button": "load",
			"mouseover span": "render",
			"mouseout span": "close"
		},
		load: function() {
			var data = this.model.get('data');
			$(this.el).find('ul').text('');
			for (var i = 0; i < data.length; i++) {
				var li = this.template.clone().find('span').text(data[i].alt).end();
				$(this.el).find('ul').append(li);
			}
		},
		render: function(event) {
			var altRecherche = $("#container").children().find(event.target).text();
			var data = this.model.get('data');
			for (var i = 0; i < data.length; i++) {
				if (data[i].alt == altRecherche) {
					var p = $("#template-preview").children().clone().find('img').attr('src', data[i].src).attr('alt', data[i].alt).attr('width', '200px').end();
					$("#container").append(p);
					$(p).css("top",(event.pageY - 10) + "px")
						.css("left",(event.pageX + 30) + "px")
						.fadeIn("fast");
				}
			}
		},
		close: function(event) {
			$("#container #preview").remove();
		}
	});
	
	// instancie la vue
	var view = new View({ model: localModel});
});
