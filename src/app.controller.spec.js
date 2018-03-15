describe('Testing App', function() {

    beforeEach(module('app'));

    describe('Testing home controller', function () {
        var ctrl;
        var scope = {};

        beforeEach(inject(function ($controller) {
            ctrl = $controller('mainCtrl', { $scope: scope })
        }));

        it('should app title is set and is set properly', function () {
            expect(scope.appName).toBeDefined();
            expect(scope.appName).toBe('AngularJS Data Visualisation');
        });
    });

});