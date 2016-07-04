namespace nAddContent {
    'use strict';

    interface INAddContentResetScope {
        event: any
        data: any
    }

    const controllerAs = 'NAddContentReset';

    class NAddContentReset implements ng.IDirective {
        static $inject: Array<string> = [];
        constructor() {}

        static instance(): ng.IDirective {
            return new NAddContentReset();
        }

        bindToController: boolean = true;
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void = this.linkFn;
        controller: NAddContentResetController = NAddContentResetController;
        restrict: string = 'EA';
        controllerAs: string = controllerAs;

        private linkFn(scope: any, element: any, attrs: any) {
            element.on('click', () => {
                scope[controllerAs].reset();
            });
        }
    }

    class NAddContentResetController {
        static $inject: Array<string> = ['NAddContentService'];
        constructor(private NAddContentService: INAddContentService) {}

        reset() {
            this.NAddContentService.reset();
        }
    }

    angular
        .module('nAddContent')
        .directive('nAddContentReset', NAddContentReset.instance);
}