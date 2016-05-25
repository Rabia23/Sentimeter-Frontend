angular.module( 'factories', [
  'ngResource',
  'livefeed.api_links',
  'livefeed.authService'
])

.factory('Filters', ['$resource','apiLinks', function($resource, apiLinks) {
  function Filters() {
    this.service = $resource(apiLinks.link.api, {},
    {
      allRegions: {method: "GET",isArray: false, params: {endpoint: "region"}},
      Cities: {method: "GET",isArray: false, params: {endpoint: "city"}},
      Branches: {method: "GET",isArray: false, params: {endpoint: "branch"}},
      specific_branch: {method: "GET",isArray: false, params: {endpoint: "specific_branch"}}
    });
  }
  Filters.prototype.allRegions = function(){
    return this.service.allRegions();
  };
  Filters.prototype.Cities = function(region_id){
    return this.service.Cities({region_id: region_id});
  };
  Filters.prototype.Branches = function(city_id, region_id){
    return this.service.Branches({city: city_id, region: region_id});
  };
  Filters.prototype.specific_branch = function(city_id, region_id){
    return this.service.specific_branch({city: city_id, region: region_id});
  };
  return new Filters();
}])

.factory('Graphs', ['$resource', 'apiLinks', 'TokenHandler',  function($resource, apiLinks, TokenHandler) {

  function Graphs() {
    this.service = $resource(apiLinks.link.api, {},
    {
      overall_feedback: {method: "GET",isArray: false, params: {endpoint: "overall_feedback"}},
      feedback_analysis: {method: "GET",isArray: false, params: {endpoint: "feedback_analysis"}},
      overall_rating: {method: "GET",isArray: false, params: {endpoint: "overall_rating"}},
      positive_negative_feedback: {method: "GET",isArray: false, params: {endpoint: "positive_negative_feedback"}},
      comments: {method: "GET",isArray: false, params: {endpoint: "comments"}},
      comments_text_search: {method: "GET",isArray: false, params: {endpoint: "comments_text_search"}},
      feedback_analysis_breakdown: {method: "GET",isArray: false, params: {endpoint: "feedback_analysis_breakdown"}},
      map_view: {method: "GET",isArray: false, params: {endpoint: "map_view"}},
      feedback_segmentation: {method: "GET",isArray: false, params: {endpoint: "feedback_segmentation"}},
      top_concerns: {method: "GET", isArray: false, params: {endpoint: "top_concerns"}},
      action_taken:{method: "POST",isArray: false, params: {endpoint: "action_taken"}},
      action_analysis: {method: "GET",isArray: false, params: {endpoint: "action_analysis"}},
      area_analysis: {method: "GET",isArray: true, params: {endpoint: "area"}},
      top_charts: {method: "GET",isArray: false, params: {endpoint: "top_charts"}},
      top_rankings: {method: "GET", isArray: false, params:{endpoint: "top_rankings"}},
      complaint_analysis: {method: "GET", isArray: true, params:{endpoint: "complaint_analysis"}},
      leader_board: {method: "GET", isArray: false, params:{endpoint: "leader_board"}},
      live_dashboard: {method: "GET", isArray: false, params:{endpoint: "livedashboard"}},
      opportunity_analysis: {method: "GET", isArray: false, params:{endpoint: "opportunity_analysis"}}

    });
  }

  Graphs.prototype.overall_rating = function(option_id, date_from, date_to){
    option_id = option_id || "";
    return this.service.overall_rating({option: option_id, date_from: date_from, date_to: date_to});
  };

  Graphs.prototype.live_dashboard = function(){
    return this.service.live_dashboard();
  };

  Graphs.prototype.action_taken = function(feedback_id,action_id,action_comment){
    return this.service.action_taken({feedback_id: feedback_id, action_id: action_id, action_comment: action_comment});
  };

  Graphs.prototype.top_concerns = function(){
    return this.service.top_concerns();
  };

  Graphs.prototype.top_rankings = function(){
    return this.service.top_rankings();
  };

  Graphs.prototype.feedback_segmentation = function(date, option_id){
    date = date || "";
    return this.service.feedback_segmentation({date_to: date, option: option_id});
  };

  Graphs.prototype.map_view = function(date_from, date_to){
    return this.service.map_view({date_from: date_from, date_to: date_to});
  };

  Graphs.prototype.positive_negative_feedback = function(){
    return this.service.positive_negative_feedback();
  };
  Graphs.prototype.overall_feedback = function(date_from, date_to){
    return this.service.overall_feedback({date_from: date_from, date_to: date_to});
  };
  Graphs.prototype.area = function(){
    return this.service.area_analysis();
  };
  Graphs.prototype.area_analysis = function(question_type, start_date, end_date){
    question_type = question_type || 1;
    start_date = start_date || "";
    end_date = end_date || "";
    return this.service.feedback_analysis({question_type: question_type, date_from: start_date, date_to: end_date});
  };
  Graphs.prototype.regional_analysis = function(question_type, start_date, end_date, area_id, type_id){
    question_type = question_type || 1;
    area_id = area_id || "";
    start_date = start_date || "";
    end_date = end_date || "";
    type_id = type_id || "";
    return this.service.feedback_analysis({type: type_id, question_type: question_type, area: area_id, date_from: start_date, date_to: end_date});
  };
  Graphs.prototype.city_analysis = function(region_id, question_type, start_date, end_date, type_id){
    question_type = question_type || 1;
    region_id = region_id || "";
    start_date = start_date || "";
    end_date = end_date || "";
    type_id = type_id || "";
    return this.service.feedback_analysis({type: type_id, date_from: start_date, date_to: end_date, region: region_id, question_type: question_type});
  };
  Graphs.prototype.branch_analysis = function(city_id, question_type, start_date, end_date, type_id){
    question_type = question_type || 1;
    city_id = city_id || "";
    start_date = start_date || "";
    end_date = end_date || "";
    type_id = type_id || "";
    return this.service.feedback_analysis({type: type_id, date_from: start_date, date_to: end_date, city: city_id, question_type: question_type});
  };
  Graphs.prototype.comments = function(page, branch_id, status_id){
    page = page || 1;
    status_id = status_id || "";
    branch_id = branch_id || "";
    return this.service.comments({branch_id: branch_id, action_taken: status_id, page: page});
  };

  Graphs.prototype.comments_text_search = function(page, branch_id, status_id, text){
    page = page || 1;
    status_id = status_id || "";
    branch_id = branch_id || "";
    var comment_json = {branch_id: branch_id, page: page, action_taken: status_id, text: text};
    var area = TokenHandler.get_area();
    if(area.branch_id){
      comment_json.branch_id = area.branch_id;
    }
    else if(area.region_id){
      comment_json.region_id = area.region_id;
    } 
    return this.service.comments_text_search(comment_json);
  };

  Graphs.prototype.feedback_analysis_breakdown = function(area_id, region_id, city_id, branch_id, option_id, start_date, end_date){
    area_id = area_id || "";
    region_id = region_id || "";
    city_id = city_id || "";
    branch_id = branch_id || "";
    option_id = option_id || "";
    start_date = start_date || "";
    end_date = end_date || "";
    return this.service.feedback_analysis_breakdown({area: area_id, region: region_id, city: city_id, branch: branch_id, option: option_id, date_from: start_date, date_to: end_date});
  };
  Graphs.prototype.action_analysis = function(type_id, region_id, city_id, date_from, date_to, area_id){
    type_id = type_id || "";
    date_from = date_from || "";
    date_to = date_to || "";
    region_id = region_id || "";
    city_id = city_id || "";
    area_id = area_id || "";
    return this.service.action_analysis({type: type_id, date_from: date_from, date_to: date_to, area: area_id, region: region_id, city:city_id});
  };
  Graphs.prototype.top_charts = function(){
    return this.service.top_charts();
  };
  Graphs.prototype.complaint_analysis = function(){
    return this.service.complaint_analysis();
  };
  Graphs.prototype.leader_board = function(){
    return this.service.leader_board();
  };
  Graphs.prototype.opportunity_analysis = function(region_id, city_id, branch_id, start_date, end_date){
    region_id = region_id || "";
    city_id = city_id || "";
    branch_id = branch_id || "";
    start_date = start_date || "";
    end_date = end_date || "";
    return this.service.opportunity_analysis({region: region_id, city: city_id, branch: branch_id, date_from: start_date, date_to: end_date});
  };

  return new Graphs();
}]);
