describe('Testing App', function() {

    beforeEach(module('app'));
    
    describe('Testing home controller', function () {
        var ctrl;
        var scope = {};
        
        beforeEach(inject(function ($controller) {
            ctrl = $controller('homeCtrl', { $scope: scope });
        }));
        
        it('should home title is set and is set properly', function () {
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Home page');
        })
    });
    
});