describe('positiveNegativeDropDownMenuDirective', function(){

  var $element, $scope, $timeout;

  beforeEach(module('livefeed.dashboard.positive_negative_feedback'));

  beforeEach(inject(function( _$compile_, _$rootScope_, _$timeout_ ) {

    $scope = _$rootScope_;
    $scope.branches = 'foo';
    $timeout = _$timeout_;
    $element = _$compile_("<div drop-menu data-branches='branches'></div")(_$rootScope_);

  }));


  it('should call jcf.refresh method when button clicked', function(){
    spyOn(jcf, 'refresh');
    setFixtures('<button id="dropdown-button"> </button>');
    $element.scope().$apply();
    $('#dropdown-button').trigger('click');
    $timeout.flush();
    expect(jcf.refresh).toHaveBeenCalled();
  });

});
