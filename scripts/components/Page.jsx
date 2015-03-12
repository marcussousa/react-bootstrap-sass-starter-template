'use strict';

var React = require('react'),
    Alert = require('react-bootstrap/lib/Alert');

var Page = React.createClass({
        render: function () {
            return (
                <div className="container">
                	<h1>A starter template using React + React-Bootstrap + Sass-Bootstrap</h1>
                    <Alert bsStyle="info">
                        <p> go to Page.jsx</p>
                    </Alert>
                </div>
            )
        }
    });
module.exports = Page;