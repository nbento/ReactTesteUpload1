var React = require('react');


/*
var Main = React.createClass(
{
	render: function()
	{
		return (<div>
					<h2>3 Title Main Component!!!</h2>
					 <Nav />
					{this.props.children}
				</div>)
	}
});
*/

var Main = (props) => {
	return (<div>
 				<div>
					<div>
						<p>Main.jsx Rendered</p>
						{props.children}
					</div>
				</div>
			</div>
		)
}

/*
var Main = React.createClass(
{
	mainHandleSearch: function(location)
	{
		alert('mainHandleSearch   location' + location);
	},
	render: function()
	{
		//<Nav navSearch={this.mainHandleSearch} />
		return (<div>
							<div className="row">
									<div>

									</div>
							</div>
							<Nav navSearch={this.mainHandleSearch} />
							<h2>Main Component!!!</h2>
							{this.props.children}
						</div>
			)
	}
});
*/
module.exports = Main;
