describe('Testing App', function () {

    beforeEach(module('app'));

    describe('Testing chart controller', function () {
        var ctrl;
        var scope = {};

        beforeEach(inject(function ($controller) {
            ctrl = $controller('chartCtrl', { $scope: scope });
        }));

        it('should chart title is set and is set properly', function () {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Chart');
        });

        it('should logs is set', function () {
            expect(scope.logs).toBeDefined();
        });
    })
});