describe('OverallRatingOptionBorderColor', function(){

  var $element, $scope;

  beforeEach(module('livefeed.reports.overall_rating'));

  beforeEach(inject(function( _$compile_, _$rootScope_ ) {

    $scope = _$rootScope_;
    $scope.color = '#0E590A';
    $element = _$compile_("<tr rating-option-color data-color='color'></tr>")(_$rootScope_);

  }));

  it('should apply border color', function(){
    setStyleFixtures('.col1 { border-left-width: 5px; border-left-style: solid; border-left-color: #0E590A; }');
    fixture = setFixtures('<td class="col1"></td>');
    $element.scope().$apply();
    var span = fixture.find('.col1');
    expect(span.css('border-left-color')).toEqual('rgb(14, 89, 10)');
  });


});