var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Card from './card/card';
'use strict';

var e = React.createElement;

var RecentProjects = function (_React$Component) {
  _inherits(RecentProjects, _React$Component);

  function RecentProjects(props) {
    _classCallCheck(this, RecentProjects);

    var _this = _possibleConstructorReturn(this, (RecentProjects.__proto__ || Object.getPrototypeOf(RecentProjects)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(RecentProjects, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Card, { imageUrl: '', imageAlt: '', title: 'Project 1', description: 'none' }),
        React.createElement(Card, { imageUrl: '', imageAlt: '', title: 'Project 1', description: 'none' }),
        React.createElement(Card, { imageUrl: '', imageAlt: '', title: 'Project 1', description: 'none' }),
        React.createElement(Card, { imageUrl: '', imageAlt: '', title: 'Project 1', description: 'none' })
      );
    }
  }]);

  return RecentProjects;
}(React.Component);

var domContainer = document.querySelector('#recentProjects');
ReactDOM.render(React.createElement(RecentProjects, null), domContainer);