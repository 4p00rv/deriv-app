(window.webpackJsonp=window.webpackJsonp||[]).push([["push-notification"],{633:function(t,n,e){"use strict";e.r(n);var o=e(2),i=e.n(o),r=e(0),a=e.n(r),c=e(17),s=e(6),u=e.n(s),f=e(570),l=e(23);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function y(t,n){return!n||"object"!==p(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,n){return(b=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var _=function(t){function n(){var t,e;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(e=y(this,(t=h(n)).call.apply(t,[this].concat(i)))).state={},e.onClose=function(){e.setState({show:!1},(function(){clearTimeout(e.timer)}))},e}var e,o,i;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&b(t,n)}(n,t),e=n,(o=[{key:"componentDidMount",value:function(){var t=this;this.state.show||(this.timer=setTimeout((function(){t.setState({show:!0})}),this.props.autoShow||500))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var t=this,n=this.props,e=n.className,o=n.content,i=n.duration,r=n.has_content_close,c=n.type;return a.a.createElement(f.CSSTransition,{in:this.state.show,timeout:i||500,classNames:{enterDone:"notification-bar--is-active"},unmountOnExit:!0},a.a.createElement("div",{className:u()("notification-bar",{"notification-bar--info":"info"===c,className:e})},a.a.createElement("div",{className:"notification-bar__message"},r?a.a.Children.map(o,(function(n){return a.a.cloneElement(n,{onClose:t.onClose.bind(t)})})):o),!r&&a.a.createElement("div",{onClick:this.onClose.bind(this),className:"notification-bar__button"},a.a.createElement(l.a,{icon:"IconClose",className:"notification-bar__icon"}))))}}])&&m(e.prototype,o),i&&m(e,i),n}(a.a.Component);_.propTypes={className:i.a.string,content:i.a.oneOfType([i.a.object,i.a.string]),has_content_close:i.a.bool,type:i.a.string};var w=_,v=function(t){return t.push_notifications.map((function(t,n){var e=t.autoShow,o=t.content,i=t.duration,r=t.type;return a.a.createElement(w,{key:n,autoShow:e,content:o,duration:i,type:r||"info",has_content_close:!0})}))};v.propTypes={push_notifications:i.a.array};n.default=Object(c.b)((function(t){return{push_notifications:t.ui.push_notifications}}))(v)}}]);
//# sourceMappingURL=push-notification.5e005d35938b1a2b4648.js.map