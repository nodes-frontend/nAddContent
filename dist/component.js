!function(e){function r(e,r,t){e in i||(i[e]={name:e,declarative:!0,deps:r,declare:t,normalizedDeps:r})}function t(e){return c[e]||(c[e]={name:e,dependencies:[],exports:{},importers:[]})}function n(r){if(!r.module){var o=r.module=t(r.name),a=r.module.exports,s=r.declare.call(e,function(e,r){if(o.locked=!0,"object"==typeof e)for(var t in e)a[t]=e[t];else a[e]=r;for(var n=0,u=o.importers.length;u>n;n++){var i=o.importers[n];if(!i.locked)for(var s=0;s<i.dependencies.length;++s)i.dependencies[s]===o&&i.setters[s](a)}return o.locked=!1,r},r.name);o.setters=s.setters,o.execute=s.execute;for(var l=0,d=r.normalizedDeps.length;d>l;l++){var f,p=r.normalizedDeps[l],v=i[p],m=c[p];m?f=m.exports:v&&!v.declarative?f=v.esModule:v?(n(v),m=v.module,f=m.exports):f=u(p),m&&m.importers?(m.importers.push(o),o.dependencies.push(m)):o.dependencies.push(null),o.setters[l]&&o.setters[l](f)}}}function o(e){var r={};if("object"==typeof e||"function"==typeof e)if(l){var t;for(var n in e)(t=Object.getOwnPropertyDescriptor(e,n))&&f(r,n,t)}else{var o=e&&e.hasOwnProperty;for(var n in e)(!o||e.hasOwnProperty(n))&&(r[n]=e[n])}return r["default"]=e,f(r,"__useDefault",{value:!0}),r}function a(r,t){var n=i[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,l=n.normalizedDeps.length;l>o;o++){var d=n.normalizedDeps[o];-1==s.call(t,d)&&(i[d]?a(d,t):u(d))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function u(e){if(v[e])return v[e];if("@node/"==e.substr(0,6))return p(e.substr(6));var r=i[e];if(!r)throw"Module "+e+" not present.";return n(i[e]),a(e,[]),i[e]=void 0,r.declarative&&f(r.module.exports,"__esModule",{value:!0}),v[e]=r.declarative?r.module.exports:r.esModule}var i={},s=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},l=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(d){l=!1}var f;!function(){try{Object.defineProperty({},"a",{})&&(f=Object.defineProperty)}catch(e){f=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var c={},p="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,v={"@empty":{}};return function(e,t,n){return function(a){a(function(a){for(var i=0;i<t.length;i++)(function(e,r){r&&r.__esModule?v[e]=r:v[e]=o(r)})(t[i],arguments[i]);n({register:r});var s=u(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)u(e[i]);return s.__useDefault?s["default"]:s})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

$__System.register("2", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [],
    execute: function() {
      exports_1("default", angular.module("nAddContent.templates", []).run(["$templateCache", function($templateCache) {
        $templateCache.put("src/container/nAddContentContainer.html", "<div class=\"nAddContentContainer\">\n\n    <div uuid=\"{{nAddContentItem.uuid}}\" ng-include=\"nAddContentItem.template\" ng-repeat=\"nAddContentItem in NAddContentContainer.items\">\n        <p>{{item}}</p>\n    </div>\n\n</div>");
      }]));
    }
  };
});

$__System.register("3", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nAddContent;
  return {
    setters: [],
    execute: function() {
      var nAddContent;
      (function(nAddContent) {
        'use strict';
        var dependencies = ['nAddContent.templates'];
        angular.module('nAddContent', dependencies);
      })(nAddContent || (nAddContent = {}));
    }
  };
});

$__System.register("4", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nAddContent;
  return {
    setters: [],
    execute: function() {
      var nAddContent;
      (function(nAddContent) {
        'use strict';
        var NAddContentServiceItem = (function() {
          function NAddContentServiceItem(template) {
            this.template = template;
            if (!template)
              throw 'Template is required!!!';
            this.uuid = this.guid();
          }
          NAddContentServiceItem.prototype.guid = function() {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
          };
          return NAddContentServiceItem;
        }());
        var NAddContentService = (function() {
          function NAddContentService($rootScope) {
            this.$rootScope = $rootScope;
            this.items = [];
          }
          NAddContentService.prototype.create = function(template) {
            return new NAddContentServiceItem(template);
          };
          NAddContentService.prototype.add = function(item) {
            if (!item)
              throw 'Item is required!!!';
            if (!item.hasOwnProperty('template'))
              throw 'Item template is required!!!';
            if (!item.hasOwnProperty('uuid'))
              throw 'Item uuid is required!!!';
            this.items.push(item);
            this.$rootScope.$apply();
            return this.items;
          };
          NAddContentService.prototype.getByUUID = function(uuid) {
            if (!uuid)
              throw 'UUID is required!!!';
            var item = this.items.filter(function(item) {
              return item.uuid === uuid;
            })[0];
            if (!item)
              throw 'UUID was not found!!!';
            return item;
          };
          NAddContentService.prototype.removeByUUID = function(uuid) {
            var item = this.getByUUID(uuid);
            var index = this.items.indexOf(item);
            this.items.splice(index, 1);
            this.$rootScope.$apply();
            return item;
          };
          NAddContentService.prototype.reset = function() {
            this.items.splice(0, this.items.length);
            this.$rootScope.$apply();
            return this.items.length === 0;
          };
          NAddContentService.$inject = ['$rootScope'];
          return NAddContentService;
        }());
        angular.module('nAddContent').service('NAddContentService', NAddContentService);
      })(nAddContent || (nAddContent = {}));
    }
  };
});

$__System.register("5", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nAddContent;
  return {
    setters: [],
    execute: function() {
      var nAddContent;
      (function(nAddContent) {
        'use strict';
        var controllerAs = 'NAddContentCreate';
        var NAddContentCreate = (function() {
          function NAddContentCreate() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = NAddContentCreateController;
            this.restrict = 'EA';
            this.controllerAs = controllerAs;
          }
          NAddContentCreate.instance = function() {
            return new NAddContentCreate();
          };
          NAddContentCreate.prototype.linkFn = function(scope, element, attrs) {
            element.on('click', function() {
              scope[controllerAs].add(attrs.template);
            });
          };
          NAddContentCreate.$inject = [];
          return NAddContentCreate;
        }());
        var NAddContentCreateController = (function() {
          function NAddContentCreateController(NAddContentService) {
            this.NAddContentService = NAddContentService;
          }
          NAddContentCreateController.prototype.add = function(template) {
            var item = this.NAddContentService.create(template);
            this.NAddContentService.add(item);
          };
          NAddContentCreateController.$inject = ['NAddContentService'];
          return NAddContentCreateController;
        }());
        angular.module('nAddContent').directive('nAddContentCreate', NAddContentCreate.instance);
      })(nAddContent || (nAddContent = {}));
    }
  };
});

$__System.register("6", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nAddContent;
  return {
    setters: [],
    execute: function() {
      var nAddContent;
      (function(nAddContent) {
        'use strict';
        var controllerAs = 'NAddContentRemove';
        var NAddContentRemove = (function() {
          function NAddContentRemove() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = NAddContentRemoveController;
            this.restrict = 'EA';
            this.controllerAs = controllerAs;
          }
          NAddContentRemove.instance = function() {
            return new NAddContentRemove();
          };
          NAddContentRemove.prototype.linkFn = function(scope, element, attrs) {
            element.on('click', function() {
              scope[controllerAs].remove(attrs.uuid);
            });
          };
          NAddContentRemove.$inject = [];
          return NAddContentRemove;
        }());
        var NAddContentRemoveController = (function() {
          function NAddContentRemoveController(NAddContentService) {
            this.NAddContentService = NAddContentService;
          }
          NAddContentRemoveController.prototype.remove = function(uuid) {
            this.NAddContentService.removeByUUID(uuid);
          };
          NAddContentRemoveController.$inject = ['NAddContentService'];
          return NAddContentRemoveController;
        }());
        angular.module('nAddContent').directive('nAddContentRemove', NAddContentRemove.instance);
      })(nAddContent || (nAddContent = {}));
    }
  };
});

$__System.register("7", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nAddContent;
  return {
    setters: [],
    execute: function() {
      var nAddContent;
      (function(nAddContent) {
        'use strict';
        var controllerAs = 'NAddContentReset';
        var NAddContentReset = (function() {
          function NAddContentReset() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = NAddContentResetController;
            this.restrict = 'EA';
            this.controllerAs = controllerAs;
          }
          NAddContentReset.instance = function() {
            return new NAddContentReset();
          };
          NAddContentReset.prototype.linkFn = function(scope, element, attrs) {
            element.on('click', function() {
              scope[controllerAs].reset();
            });
          };
          NAddContentReset.$inject = [];
          return NAddContentReset;
        }());
        var NAddContentResetController = (function() {
          function NAddContentResetController(NAddContentService) {
            this.NAddContentService = NAddContentService;
          }
          NAddContentResetController.prototype.reset = function() {
            this.NAddContentService.reset();
          };
          NAddContentResetController.$inject = ['NAddContentService'];
          return NAddContentResetController;
        }());
        angular.module('nAddContent').directive('nAddContentReset', NAddContentReset.instance);
      })(nAddContent || (nAddContent = {}));
    }
  };
});

$__System.register("8", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var nAddContent;
  return {
    setters: [],
    execute: function() {
      var nAddContent;
      (function(nAddContent) {
        'use strict';
        var controllerAs = 'NAddContentContainer';
        var NAddContentContainer = (function() {
          function NAddContentContainer() {
            this.bindToController = true;
            this.link = this.linkFn;
            this.controller = NAddContentContainerController;
            this.restrict = 'EA';
            this.templateUrl = 'src/container/nAddContentContainer.html';
            this.controllerAs = controllerAs;
          }
          NAddContentContainer.instance = function() {
            return new NAddContentContainer();
          };
          NAddContentContainer.prototype.linkFn = function(scope, element, attrs) {};
          NAddContentContainer.$inject = [];
          return NAddContentContainer;
        }());
        var NAddContentContainerController = (function() {
          function NAddContentContainerController(NAddContentService) {
            this.NAddContentService = NAddContentService;
            this.items = this.NAddContentService.items;
          }
          NAddContentContainerController.$inject = ['NAddContentService'];
          return NAddContentContainerController;
        }());
        angular.module('nAddContent').directive('nAddContentContainer', NAddContentContainer.instance);
      })(nAddContent || (nAddContent = {}));
    }
  };
});

$__System.register("1", ["2", "3", "4", "5", "6", "7", "8"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [function(_1) {}, function(_2) {}, function(_3) {}, function(_4) {}, function(_5) {}, function(_6) {}, function(_7) {}],
    execute: function() {}
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=component.js.map