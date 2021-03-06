var React 		= require('react');
var ReactDOM 	= require('react-dom');

//.......... ES5
/*	var Route 		= require('react-router').Route;
	var Router  	= require('react-router').Router;
	var IndexRoute 	= require('react-router').IndexRoute;
	var hashHistory = require('react-router').hashHistory;
*/	
//.......... ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//.......... 
var Main 	= require('Main');   


//Load foundation (CARREGA UM FILE CSS DIRECTA/ NUM FILE JSX(!!!))  (Lec.51 ~10:00)
//css! »»» 'by default the require doesn't know how to load a css file'; FORMA QUE PERMITE AO REQUIRE LOADAR UM CSS  
//style! »»» FORMA QUE injectar o css file no HTML
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//alias em webpack.config.js
require('style!css!sass!applicationStyles');

ReactDOM.render( 
			
			<Router history={hashHistory}>
				<Route path="/" component={Main}>
					
		  		</Route>
			</Router>,

  			document.getElementById('app')
);
