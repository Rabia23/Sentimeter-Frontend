describe('averageProgressBarBackground', function(){

  var $element, $scope;

  beforeEach(module('livefeed.dashboard.recommendation_likeness'));

  beforeEach(inject(function( _$compile_, _$rootScope_ ) {

    $scope = _$rootScope_;
    $scope.recommendation_likeness_data = 'foo';
    $scope.bar_color = '#e73a3a';
    $element = _$compile_("<div nps-progress-bar-background data-data='recommendation_likeness_data'></div>")(_$rootScope_);

  }));

  it('should apply background color to progress bar', function(){
    setStyleFixtures('.progress-bar { background-color: #e73a3a; color: #e73a3a}');
    fixture = setFixtures('<div class="progress"><div class="progress-bar"></div></div>');
    $element.scope().$apply();
    var span = fixture.find('.progress-bar');
    expect(span.css('background-color')).toEqual('rgb(231, 58, 58)');
    expect(span.css('color')).toEqual('rgb(231, 58, 58)');
  });


});