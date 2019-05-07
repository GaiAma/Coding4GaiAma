import { createElement, Component, createContext } from 'react';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import { createPortal } from 'react-dom';
import invariant from 'tiny-invariant';
import _assertThisInitialized from '@babel/runtime/helpers/esm/assertThisInitialized';

var _React$createContext = createContext(null),
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

    return createElement(Consumer, null, function (headTags) {
      !headTags ? process.env.NODE_ENV !== "production" ? invariant(false, '<HeadProvider /> should be in the tree') : invariant(false) : void 0;
      _this2.headTags = headTags;

      if (_this2.state.canUseDOM) {
        if (!headTags.shouldRenderTag(Tag, _this2.index)) {
          return null;
        }

        var ClientComp = createElement(Tag, rest);
        return createPortal(ClientComp, document.head);
      } // disable `data-rh` if <HeadProvider whitelist /> matches Tag


      var dataAttribute = ("" + headTags.whitelist).split(",").includes(Tag) ? {} : {
        'data-rh': ""
      };
      var ServerComp = createElement(Tag, _extends({}, dataAttribute, rest));
      headTags.addServerTag(ServerComp);
      return null;
    });
  };

  return HeadTag;
}(Component);

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
    !(typeof window !== 'undefined' || Array.isArray(this.props.headTags)) ? process.env.NODE_ENV !== "production" ? invariant(false, 'headTags array should be passed to <HeadProvider /> in node') : invariant(false) : void 0;
    return createElement(Provider, {
      value: this.state
    }, this.props.children);
  };

  return HeadProvider;
}(Component);

var Title = function Title(props) {
  return createElement(HeadTag, _extends({
    tag: "title"
  }, props));
};
var Style = function Style(props) {
  return createElement(HeadTag, _extends({
    tag: "style"
  }, props));
};
var Meta = function Meta(props) {
  return createElement(HeadTag, _extends({
    tag: "meta"
  }, props));
};
var Link = function Link(props) {
  return createElement(HeadTag, _extends({
    tag: "link"
  }, props));
};

export { Title, Style, Meta, Link, HeadProvider };
