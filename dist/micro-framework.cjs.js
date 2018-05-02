'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Pipeline(_ref) {
  var description = _ref.description;

  return function (target) {
    return function (_target) {
      _inherits(Pipeline, _target);

      function Pipeline() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, Pipeline);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Pipeline.__proto__ || Object.getPrototypeOf(Pipeline)).call.apply(_ref2, [this].concat(args))), _this), _this.description = description, _this.name = target.name, _this.chain = [], _this.listener = undefined, _this.addChain = function (promise) {
          _this.chain.push(promise);
        }, _this.listen = function () {
          _this.chain.reduce(function (promise, func) {
            return promise.then(function (result) {
              return func(result);
            });
          }, Promise.resolve(_this));
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      return Pipeline;
    }(target);
  };
}

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Application(_ref) {
  var description = _ref.description,
      pipelines = _ref.pipelines;

  return function (target) {
    return function (_target) {
      _inherits$1(Application, _target);

      function Application() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck$1(this, Application);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref2 = Application.__proto__ || Object.getPrototypeOf(Application)).call.apply(_ref2, [this].concat(args))), _this), _this.description = description, _this.pipelines = pipelines, _this.name = target.name, _this.start = function () {
          _this.pipelines.forEach(function (pipeline) {
            return pipeline.listen();
          });
        }, _temp), _possibleConstructorReturn$1(_this, _ret);
      }

      return Application;
    }(target);
  };
}

function Chain(_ref) {
  var description = _ref.description;

  return function (target) {
    return target;
  };
}

exports.Pipeline = Pipeline;
exports.Application = Application;
exports.Chain = Chain;
