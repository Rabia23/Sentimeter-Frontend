describe('OpportunityOptionBorderColor', function(){

  var $element, $scope;

  beforeEach(module('livefeed.reports.opportunities'));

  beforeEach(inject(function( _$compile_, _$rootScope_ ) {

    $scope = _$rootScope_;
    $scope.color = '#4CCC72';
    $element = _$compile_("<tr opportunity-option-color data-color='color'></tr>")(_$rootScope_);

  }));

  it('should apply border color', function(){
    setStyleFixtures('.col1 { border-left-width: 5px; border-left-style: solid; border-left-color: #4CCC72; }');
    fixture = setFixtures('<td class="col1"></td>');
    $element.scope().$apply();
    var span = fixture.find('.col1');
    expect(span.css('border-left-color')).toEqual('rgb(76, 204, 114)');
  });


});