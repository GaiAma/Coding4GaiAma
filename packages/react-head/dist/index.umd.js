(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (factory((global.ReactHead = {}),global.React,global.ReactDOM));
}(this, (function (exports,React,ReactDOM) { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var prefix = 'Invariant failed';

  function invariant(condition, message) {
    if (condition) {
      return;
    }

    {
      throw new Error(prefix + ": " + (message || ''));
    }
  }

  var _React$createContext = React.createContext(null),
      Consumer = _React$createContext.Consumer,
      Provider = _React$createContext.Provider;

  var HeadTag =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(HeadTag, _React$Component);

    function HeadTag() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.state = {
        canUseDOM: false
      };
      _this.headTags = null;
      _this.index = -1;
      return _this;
    }

    var _proto = HeadTag.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this$props = this.props,
          tag = _this$props.tag,
          name = _this$props.name,
          property = _this$props.property;
      this.setState({
        canUseDOM: true
      });
      this.index = this.headTags.addClientTag(tag, name || property);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.headTags.removeClientTag(this.props.tag, this.index);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          Tag = _this$props2.tag,
          rest = _objectWithoutPropertiesLoose(_this$props2, ["tag"]);

      return React.createElement(Consumer, null, function (headTags) {
        !headTags ? invariant(false, '<HeadProvider /> should be in the tree') : void 0;
        _this2.headTags = headTags;

        if (_this2.state.canUseDOM) {
          if (!headTags.shouldRenderTag(Tag, _this2.index)) {
            return null;
          }

          var ClientComp = React.createElement(Tag, rest);
          return ReactDOM.createPortal(ClientComp, document.head);
        } // disable `data-rh` if <HeadProvider whitelist /> matches Tag


        var dataAttribute = ("" + headTags.whitelist).split(",").includes(Tag) ? {} : {
          'data-rh': ""
        };
        var ServerComp = React.createElement(Tag, _extends({}, dataAttribute, rest));
        headTags.addServerTag(ServerComp);
        return null;
      });
    };

    return HeadTag;
  }(React.Component);

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var cascadingTags = ['title', 'meta'];

  var HeadProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(HeadProvider, _React$Component);

    function HeadProvider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.indices = new Map();
      _this.state = {
        addClientTag: function addClientTag(tag, name) {
          // consider only cascading tags
          if (cascadingTags.indexOf(tag) !== -1) {
            _this.setState(function (state) {
              var _ref;

              var names = state[tag] || [];
              return _ref = {}, _ref[tag] = [].concat(names, [name]), _ref;
            }); // track indices synchronously


            var _assertThisInitialize = _assertThisInitialized(_this),
                indices = _assertThisInitialize.indices;

            var index = indices.has(tag) ? indices.get(tag) + 1 : 0;
            indices.set(tag, index);
            return index;
          }

          return -1;
        },
        shouldRenderTag: function shouldRenderTag(tag, index) {
          if (cascadingTags.indexOf(tag) !== -1) {
            var names = _this.state[tag]; // check if the tag is the last one of similar

            return names && names.lastIndexOf(names[index]) === index;
          }

          return true;
        },
        removeClientTag: function removeClientTag(tag, index) {
          _this.setState(function (state) {
            var names = state[tag];

            if (names) {
              var _ref2;

              names[index] = null;
              return _ref2 = {}, _ref2[tag] = names, _ref2;
            }

            return null;
          });
        },
        addServerTag: function addServerTag(tagNode) {
          var headTags = _this.props.headTags || []; // tweak only cascading tags

          if (cascadingTags.indexOf(tagNode.type) !== -1) {
            var index = headTags.findIndex(function (prev) {
              var prevName = prev.props.name || prev.props.property;
              var nextName = tagNode.props.name || tagNode.props.property;
              return prev.type === tagNode.type && prevName === nextName;
            });

            if (index !== -1) {
              headTags.splice(index, 1);
            }
          }

          headTags.push(tagNode);
        },
        whitelist: _this.props.whitelist || ""
      };
      return _this;
    }

    var _proto = HeadProvider.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var whitelist = "" + this.state.whitelist ? "," + this.state.whitelist : "";
      var ssrTags = document.head.querySelectorAll("[data-rh=\"\"]" + whitelist); // `forEach` on `NodeList` is not supported in Googlebot, so use a workaround

      Array.prototype.forEach.call(ssrTags, function (ssrTag) {
        return ssrTag.parentNode.removeChild(ssrTag);
      });
    };

    _proto.render = function render() {
      !(typeof window !== 'undefined' || Array.isArray(this.props.headTags)) ? invariant(false, 'headTags array should be passed to <HeadProvider /> in node') : void 0;
      return React.createElement(Provider, {
        value: this.state
      }, this.props.children);
    };

    return HeadProvider;
  }(React.Component);

  var Title = function Title(props) {
    return React.createElement(HeadTag, _extends({
      tag: "title"
    }, props));
  };
  var Style = function Style(props) {
    return React.createElement(HeadTag, _extends({
      tag: "style"
    }, props));
  };
  var Meta = function Meta(props) {
    return React.createElement(HeadTag, _extends({
      tag: "meta"
    }, props));
  };
  var Link = function Link(props) {
    return React.createElement(HeadTag, _extends({
      tag: "link"
    }, props));
  };

  exports.Title = Title;
  exports.Style = Style;
  exports.Meta = Meta;
  exports.Link = Link;
  exports.HeadProvider = HeadProvider;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
