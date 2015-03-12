'use strict';

var React = require('react');


window.React = React;

// Routers
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var State = Router.State;

// BS Components
var Navbar = require('react-bootstrap/lib/Navbar'),
    Nav = require('react-bootstrap/lib/Nav');

// App Components
var Page = require('./components/Page.jsx'),
    Sample = require('./components/Sample.jsx');


var NavLink = React.createClass({

    mixins: [ State ],

    render: function () {
        var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
        var className = isActive ? 'active' : '';
        var link = (
            <Link {...this.props} />
        );
        return <li className={className}>{link}</li>;
    }
});

var App = React.createClass({
    render: function () {

        return (
            <span>
                <Navbar brand="marcussousa" inverse toggleNavKey={0}>
                    <Nav right>
                        <NavLink to="page">Sample Page</NavLink>
                    </Nav>
                </Navbar>
                <RouteHandler/>
            </span>
        )
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="page" handler={Sample}/>
        <DefaultRoute handler={Page}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});

React.render(<App />, document.getElementById('content'));