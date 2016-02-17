angular.module('templates-app', ['common/footer.tpl.html', 'common/header.tpl.html', 'common/sidebar.tpl.html', 'coupon/coupon.tpl.html', 'dashboard/category-performance-analysis/category-performance-analysis.tpl.html', 'dashboard/dashboard.tpl.html', 'dashboard/feedback-map/feedback-map.tpl.html', 'dashboard/opportunities/opportunities.tpl.html', 'dashboard/overall-feedback/overall-feedback.tpl.html', 'dashboard/overall-rating/overall-rating.tpl.html', 'dashboard/positive-negative-feedback/comments-modal.tpl.html', 'dashboard/positive-negative-feedback/positive-negative-feedback.tpl.html', 'dashboard/regional-analysis/regional-analysis.tpl.html', 'dashboard/regional-analysis/sqc-modal.tpl.html', 'dashboard/statistics/statistics.tpl.html', 'dashboard/top-concern/top-concern.tpl.html', 'live/benchmark-map/benchmark-map.tpl.html', 'live/business-segments/business-segment.tpl.html', 'live/live.tpl.html', 'live/overall-ratings/overall-rating.tpl.html', 'live/patch-qsc-analysis/patch-qsc-analysis.tpl.html', 'live/qsc/qsc.tpl.html', 'live/strength/strength.tpl.html', 'live/top-concerns/top-concern.tpl.html', 'login/login.tpl.html', 'manage-users/edit-user-modal.tpl.html', 'manage-users/manage-users.tpl.html', 'promotions/promotions-detail.tpl.html', 'promotions/promotions.tpl.html']);

angular.module("common/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/footer.tpl.html",
    "<footer id=\"footer\">\n" +
    "  <div class=\"footer-inner\">\n" +
    "  	<div class=\"footer-holder\">\n" +
    "      <div class=\"footer-text\">\n" +
    "        <p>Admin Panel Feedback Survey</p>\n" +
    "      </div>\n" +
    "      <div class=\"footer-container\">\n" +
    "        <a href=\"http:\\\\mcdonalds.com.pk\" target=\"_blank\" class=\"footer-link\">www.mcdonalds.com.pk</a>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  </div>\n" +
    "</footer>");
}]);

angular.module("common/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/header.tpl.html",
    "<div class=\"header-visual\">\n" +
    "  <nav class=\"navbar dashboard\" role=\"navigation\" style=\"margin-bottom: 0;z-index: 999;\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary\" toggle-menu>\n" +
    "        <i class=\"fa fa-bars\"></i>\n" +
    "      </a>\n" +
    "      <!-- <form role=\"search\" class=\"navbar-form-custom\" action=\"search_results.html\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n" +
    "        </div>\n" +
    "      </form> -->\n" +
    "    </div>\n" +
    "    <ul class=\"nav navbar-top-links navbar-right\">\n" +
    "\n" +
    "      <!-- <li class=\"dashboard\">\n" +
    "        <a style = \"cursor:pointer;\" ui-sref = \"live\">\n" +
    "           Live Dashboard\n" +
    "        </a>\n" +
    "      </li> -->\n" +
    "      <li>\n" +
    "        <span class=\"m-r-sm text-muted welcome-message\">Welcome <span class=\"name text-capitalize\">{{fullname}}</span></span>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a style = \"cursor:pointer;\" ng-click = \"logout()\">\n" +
    "          <i class=\"fa fa-sign-out\"></i> Log out\n" +
    "        </a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "\n" +
    "  <div class=\"img-holder\">\n" +
    "    <div class=\"inner-holder\"><img alt=\"image\" class=\"img-responsive\" src=\"/assets/images/img1.jpg\" /></div>\n" +
    "  </div>\n" +
    "  <div class=\"header-caption animated fadeInRight\">\n" +
    "    <h1>Customer Centric Approach</h1>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("common/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/sidebar.tpl.html",
    "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\" >\n" +
    "	<div class=\"sidebar-collapse\">\n" +
    "    <div id=\"side-menu\" class=\"nav metismenu\">\n" +
    "      <div class=\"logo-holder\">\n" +
    "        <div class=\"logo\">\n" +
    "           <a href=\"http://www.mcdonalds.com.pk/\" target=\"_blank\"> <img alt=\"image\" class=\"img-responsive\" src=\"assets/images/logo.jpg\"></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "			<ul class=\"nav metismenu\" id=\"side-menu\">\n" +
    "				<li ng-class = \"{'active': currentState == 'dashboard'}\">\n" +
    "					<a ui-sref = \"dashboard\"><i class=\"fa fa-home\"></i> <span class=\"nav-label\">Dashboard</span></a>\n" +
    "				</li>\n" +
    "				<li ng-class = \"{'active': (currentState == 'promotions' || currentState == 'promotions_detail' ) }\">\n" +
    "					<a ui-sref=\"promotions\"><i class=\"fa fa-bullhorn\"></i> <span class=\"nav-label\">Promotions</span></a>\n" +
    "				</li>\n" +
    "				<li ng-class = \"{'active': currentState == 'users'}\">\n" +
    "					<a ui-sref=\"users\"><i class=\"fa fa-user\"></i> <span class=\"nav-label\">Manage Users</span></a>\n" +
    "				</li>\n" +
    "				<li ng-class = \"{'active': currentState == 'coupon'}\">\n" +
    "					<a ui-sref=\"coupon\"><i class=\"fa fa-info-circle\"></i> <span class=\"nav-label\">How To Guide</span></a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "    	</div>\n" +
    "	</div>\n" +
    "</nav>\n" +
    "");
}]);

angular.module("coupon/coupon.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("coupon/coupon.tpl.html",
    "<div id=\"wrapper\">\n" +
    "  <ui-view name = \"sidebar\"></ui-view>\n" +
    "  <div id=\"page-wrapper\" class=\"gray-bg\">\n" +
    "     <ui-view name = \"header\"></ui-view>\n" +
    "	 <div class=\"wrapper wrapper-content animated fadeInRight\">\n" +
    "	 	<h1>How To Guide</h1>\n" +
    "	 	<h2>Table of Content</h2>\n" +
    "		<div class=\"accordion-holder\">\n" +
    "			<ul class=\"accordion\">\n" +
    "				<li>\n" +
    "					<a>IOS Application</a>\n" +
    "					<div class=\"slide\">\n" +
    "\n" +
    "					</div>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a>Web Application</a>\n" +
    "					<div class=\"slide\">\n" +
    "						<ul class=\"accordion\">\n" +
    "							<li>\n" +
    "								<a>Live Dashboard</a>\n" +
    "								<div class=\"slide\"></div>\n" +
    "							</li>\n" +
    "							<li>\n" +
    "								<a>Web Dashboard</a>\n" +
    "								<div class=\"slide\">\n" +
    "									<ul class=\"accordion\">\n" +
    "										<li>\n" +
    "											<a>Dashboard</a>\n" +
    "											<div class=\"slide\">\n" +
    "												<ul class=\"accordion\">\n" +
    "													<li>\n" +
    "														<a></a>\n" +
    "														<div class=\"slide\">\n" +
    "															<ol>\n" +
    "																<li></li>\n" +
    "																<li></li>\n" +
    "															</ol>\n" +
    "														</div>\n" +
    "													</li>\n" +
    "													<li>\n" +
    "														<a></a>\n" +
    "														<div class=\"slide\"></div>\n" +
    "													</li>\n" +
    "													<li>\n" +
    "														<a></a>\n" +
    "														<div class=\"slide\"></div>\n" +
    "													</li>\n" +
    "													<li>\n" +
    "														<a></a>\n" +
    "														<div class=\"slide\"></div>\n" +
    "													</li>\n" +
    "													<li>\n" +
    "														<a></a>\n" +
    "														<div class=\"slide\"></div>\n" +
    "													</li>\n" +
    "													<li>\n" +
    "														<a></a>\n" +
    "														<div class=\"slide\"></div>\n" +
    "													</li>\n" +
    "												</ul>\n" +
    "											</div>\n" +
    "										</li>\n" +
    "										<li>\n" +
    "											<a>Promotions</a>\n" +
    "											<div class=\"slide\"></div>\n" +
    "										</li>\n" +
    "										<li>\n" +
    "											<a>Manage Users</a>\n" +
    "											<div class=\"slide\"></div>\n" +
    "										</li>\n" +
    "									</ul>\n" +
    "								</div>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "  </div>\n" +
    "  <ui-view name = \"footer\"></ui-view>\n" +
    "</div>");
}]);

angular.module("dashboard/category-performance-analysis/category-performance-analysis.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/category-performance-analysis/category-performance-analysis.tpl.html",
    "<div class=\"ibox float-e-margins\" ng-class=\"{loading: show_loading}\">\n" +
    "\n" +
    "  <div class=\"title-outer\">\n" +
    "    <div class=\"ibox-title\">\n" +
    "      <h5>Business Segment Breakdown</h5>\n" +
    "        <div class=\"ibox-tools\">\n" +
    "		  <ul class=\"tab-links\">\n" +
    "			  <li ng-class=\"{active: class == ''}\"><a ng-click = \"onClick(null, 'All')\">All</a></li>\n" +
    "			  <li class=\"item2\" ng-class=\"{active: class == 'Quality'}\"><a ng-click = \"onClick(QualityID, 'Quality')\">Quality</a></li>\n" +
    "			  <li class=\"item3\" ng-class=\"{active: class == 'Service'}\"><a ng-click = \"onClick(ServiceID, 'Service')\">Service</a></li>\n" +
    "			  <li class=\"item4\" ng-class=\"{active: class == 'Cleanliness'}\"><a ng-click = \"onClick(CleanlinessID, 'Cleanliness')\">Cleanliness</a></li>\n" +
    "			  <li class=\"item5\">\n" +
    "				  <div class=\"calender-outer\">\n" +
    "					  <span class=\"calendar-holder\">\n" +
    "						   <input date-range-picker id=\"daterange-map\" readonly=\"readonly\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "						  <i class=\"fa fa-calendar\" map-range-click></i>\n" +
    "					  </span>\n" +
    "				  </div>\n" +
    "			  </li>\n" +
    "		  </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"content-holder\">\n" +
    "    <div class=\"ibox-content add\">\n" +
    "      <div class=\"chart-outer\">\n" +
    "        <div class=\"progress-container\">\n" +
    "          <div class=\"progress-area\" progress-bar-spacing data-data = \"category_data\">\n" +
    "            <div class=\"progress-holder\" ng-repeat = \"dat in category_data\" data-color = \"dat.colour\" data-data = \"category_data\" progress-bar-background>\n" +
    "              <div class=\"progress-inner\">\n" +
    "                <small><em>{{dat.name}} <b>{{dat.complaints}} complaints</b></em></small>\n" +
    "                <div class=\"progress-block\"><uib-progressbar animate=\"false\" value=\"dat.percentage\" type=\"success\"></uib-progressbar></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"list-holder\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"morris-block-holder\">\n" +
    "            <div class=\"morris-content-holder\" ng-repeat=\"segment in segments track by $index\">\n" +
    "              <div class=\"morris-graph-holder\">\n" +
    "                <div class=\"morris-holder\">\n" +
    "                  <div ng-hide = \"segment.show_string\">\n" +
    "                    <canvas id=\"doughnut\" width=\"100\" height=\"100\" class=\"chart chart-doughnut\" chart-data=\"segment.data\" chart-labels=\"segment.labels\" chart-colours=\"segment.colors\" chart-options = \"segment.options\"></canvas>\n" +
    "                  </div>\n" +
    "                  <div ng-show=\"segment.show_string\">No Data Available</div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <strong class=\"title\">{{segment.name}}</strong>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<div id=\"wrapper\">\n" +
    "  <ui-view name = \"sidebar\"></ui-view>\n" +
    "  <div id=\"page-wrapper\" class=\"gray-bg\">\n" +
    "    <ui-view name = \"header\"></ui-view>\n" +
    "    <ui-view name = \"positive_negative_feedback\"></ui-view>\n" +
    "    <div class=\"wrapper wrapper-content animated fadeInRight\">\n" +
    "      <div class=\"row same-height-parent\">\n" +
    "        <flash-message  show-close=\"true\" on-dismiss=\"onAlertDismiss(flash)\"></flash-message> \n" +
    "        <div class=\"col-lg-6 col-lg-push-6\">\n" +
    "          <div class=\"same-height-block blocks-holder\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-xs-12 business-segment\">\n" +
    "                <ui-view name = \"category_performance_analysis\"></ui-view>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-xs-12 opportunities\">\n" +
    "                <ui-view name = \"opportunities\"></ui-view>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-6 col-lg-pull-6\">\n" +
    "          <div class=\"same-height-block\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-md-8 same-height-col\">\n" +
    "                <ui-view name = \"overall_feedback\"></ui-view>\n" +
    "                <ui-view name = \"top_concern\"></ui-view>\n" +
    "              </div>\n" +
    "              <div class=\"col-md-4 same-height-col\">\n" +
    "                <div class=\"row inner-row\">\n" +
    "                  <div class=\"col-sm-6 col-md-12\">\n" +
    "                    <div class=\"ibox float-e-margins detail-block\" ng-class=\"{loading: show_loading}\">\n" +
    "                      <div class=\"title-outer\">\n" +
    "                        <div class=\"ibox-title\"><h5>Top Region</h5></div>\n" +
    "                      </div>\n" +
    "                      <div class=\"content-holder\">\n" +
    "                        <div class=\"w1\">\n" +
    "                          <div class=\"w2\">\n" +
    "                            <div class=\"ibox-content\">\n" +
    "                              <div class=\"data-holder\" ng-show = \"chart_data.region\">\n" +
    "                                <h4 class=\"no-margins\">{{chart_data.region.region_name}} Got</h4>\n" +
    "                                <h1 class=\"no-margins\">{{chart_data.region.count}}</h1>\n" +
    "                                <h5 class=\"no-margins\">Feedbacks</h5>\n" +
    "                              </div>\n" +
    "                              <div class=\"message-holder\" ng-hide = \"chart_data.region\">\n" +
    "                                <h2 class=\"no-margins\">No Data Available</h2>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"col-sm-6 col-md-12\">\n" +
    "                    <div class=\"ibox float-e-margins detail-block\" ng-class=\"{loading: show_loading}\">\n" +
    "                      <div class=\"title-outer\">\n" +
    "                        <div class=\"ibox-title\"><h5>Top City</h5></div>\n" +
    "                      </div>\n" +
    "                      <div class=\"content-holder\">\n" +
    "                        <div class=\"w1\">\n" +
    "                          <div class=\"w2\">\n" +
    "                            <div class=\"ibox-content\">\n" +
    "                              <div class=\"data-holder\" ng-show = \"chart_data.city\">\n" +
    "                                <h4 class=\"no-margins\">{{chart_data.city.city_name}} Got</h4>\n" +
    "                                <h1 class=\"no-margins\">{{chart_data.city.count}}</h1>\n" +
    "                                <h5 class=\"no-margins\">Feedbacks</h5>\n" +
    "                              </div>\n" +
    "                              <div class=\"message-holder\" ng-hide = \"chart_data.city\">\n" +
    "                                <h2 class=\"no-margins\">No Data Available</h2>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <div class=\"row inner-row add\">\n" +
    "                  <div class=\"col-sm-6 col-md-12\">\n" +
    "                    <div class=\"ibox float-e-margins detail-block\" ng-class=\"{loading: show_loading}\">\n" +
    "                      <div class=\"title-outer\">\n" +
    "                        <div class=\"ibox-title\"><h5>Top Branch</h5></div>\n" +
    "                      </div>\n" +
    "                      <div class=\"content-holder\">\n" +
    "                        <div class=\"w1\">\n" +
    "                          <div class=\"w2\">\n" +
    "                            <div class=\"ibox-content\">\n" +
    "                              <div class=\"data-holder\" ng-show = \"chart_data.branch\">\n" +
    "                                <h4 class=\"no-margins\">{{chart_data.branch.branch_name}} Got</h4>\n" +
    "                                <h1 class=\"no-margins\">{{chart_data.branch.count}}</h1>\n" +
    "                                <h5 class=\"no-margins\">Feedbacks</h5>\n" +
    "                              </div>\n" +
    "                              <div class=\"message-holder\" ng-hide = \"chart_data.branch\">\n" +
    "                                <h2 class=\"no-margins\">No Data Available</h2>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"col-sm-6 col-md-12\">\n" +
    "                    <div class=\"ibox float-e-margins detail-block\" ng-class=\"{loading: show_loading}\">\n" +
    "                      <div class=\"title-outer\">\n" +
    "                                  <div class=\"ibox-title\"><h5>Top GRO</h5></div>\n" +
    "                      </div>\n" +
    "                      <div class=\"content-holder\">\n" +
    "                        <div class=\"w1\">\n" +
    "                          <div class=\"w2\">\n" +
    "                            <div class=\"ibox-content\">\n" +
    "                              <div class=\"data-holder\" ng-show = \"chart_data.gro\">\n" +
    "                                <h4 class=\"no-margins\">{{chart_data.gro.gro.gro_name}} Got</h4>\n" +
    "                                <h1 class=\"no-margins\">{{chart_data.gro.count}}</h1>\n" +
    "                                <h5 class=\"no-margins\">Feedbacks</h5>\n" +
    "                              </div>\n" +
    "                              <div class=\"message-holder\" ng-hide = \"chart_data.gro\">\n" +
    "                                <h2 class=\"no-margins\">No Data Available</h2>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 patch-section\">\n" +
    "          <ui-view name = \"regional_analysis\"></ui-view>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row same-height-parent\">\n" +
    "        <div class=\"col-lg-6 map-section\">\n" +
    "          <ui-view name = \"feedback_map\"></ui-view>\n" +
    "        </div>\n" +
    "        <div class=\"col-lg-6 timeline-section\">\n" +
    "          <ui-view name = \"overall_rating\"></ui-view>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "    <ui-view name = \"footer\"></ui-view>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/feedback-map/feedback-map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/feedback-map/feedback-map.tpl.html",
    "<div class=\"ibox float-e-margins\" ng-class=\"{loading: show_loading}\">\n" +
    "  <div class=\"ibox-title\">\n" +
    "	  <h5>Benchmark Map</h5>\n" +
    "	  <div class=\"ibox-tools\">\n" +
    "		  <ul class=\"tab-links\">\n" +
    "			  <li>\n" +
    "				  <div class=\"calender-outer\">\n" +
    "					  <span class=\"calendar-holder\">\n" +
    "						   <input date-range-picker id=\"daterange-map\" readonly=\"readonly\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "						  <i class=\"fa fa-calendar\" map-range-click></i>\n" +
    "					  </span>\n" +
    "				  </div>\n" +
    "			  </li>\n" +
    "		  </ul>\n" +
    "	  </div>\n" +
    "  </div>\n" +
    "  <div class=\"ibox-content\" same-map-height>\n" +
    "    <div id=\"world-map\">\n" +
    "	  <div map-lazy-load=\"http://maps.google.com/maps/api/js\">\n" +
    "		<map center=\"30,70\" zoom=\"{{zoom}}\"></map>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/opportunities/opportunities.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/opportunities/opportunities.tpl.html",
    "<div class=\"ibox float-e-margins float-e-margin-none\" ng-class=\"{loading: show_loading}\">\n" +
    "  <div class=\"title-outer\">\n" +
    "    <div class=\"ibox-title\">\n" +
    "	  <h5>What would make you visit McDonald's more often?</h5>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "  <div class=\"content-holder\">\n" +
    "    <div class=\"content-inner\">\n" +
    "	  <div class=\"content-block\">\n" +
    "	    <div class=\"ibox-content\">\n" +
    "		  <div class=\"chart-outer\">\n" +
    "		    <div class=\"progres-container\">\n" +
    "			  <div class=\"progress-area\">\n" +
    "			    <div class=\"progress-holder\" ng-repeat = \"dat in opportunity_data\" data-color = \"dat.colour\" data-data = \"opportunity_data\" opportunity-bar-background>\n" +
    "				  <div class=\"progress-inner\">\n" +
    "				    <small><em>{{dat.name}} </em></small>\n" +
    "					<div class=\"progress-block\"><uib-progressbar animate=\"false\" value=\"dat.percentage\" type=\"success\"></uib-progressbar></div>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			  </div>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "  		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/overall-feedback/overall-feedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/overall-feedback/overall-feedback.tpl.html",
    "<div class=\"row inner-row rating\" same-bar-height data-data = \"bar.data\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <div class=\"ibox float-e-margins\" ng-class=\"{loading: show_loading}\">\n" +
    "      <div class=\"title-outer\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "          <h5>Overall Rating</h5>\n" +
    "          <div class=\"ibox-tools\">\n" +
    "            <ul class=\"tab-links\">\n" +
    "			  <li>\n" +
    "			    <div class=\"calender-outer\">\n" +
    "				  <span class=\"calendar-holder\">\n" +
    "				    <input date-range-picker id=\"daterange-map\" readonly=\"readonly\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "					<i class=\"fa fa-calendar\" map-range-click></i>\n" +
    "				  </span>\n" +
    "				</div>\n" +
    "			  </li>\n" +
    "			</ul>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "      <div class=\"content-holder\">\n" +
    "        <div class=\"content-inner\">\n" +
    "          <div class=\"legends-outer\">\n" +
    "            <div class=\"legends-holder\">\n" +
    "			  <ul class=\"legends-list\" ng-show=\"show_labels\">\n" +
    "			    <li ng-repeat = \"label in labels track by $index\">\n" +
    "				  <span class=\"bullet\" back-ground data-color = \"label.color\"></span>{{label.option_name}}\n" +
    "			    </li>\n" +
    "			  </ul>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "          <div class=\"content-block\">\n" +
    "			<div class=\"ibox-content float-chart-block\">\n" +
    "			  <div class=\"flot-chart\">\n" +
    "				<canvas ng-show = \"show_canvas\"  id=\"bar\" class=\"chart chart-bar\" chart-data=\"bar.data\" chart-labels=\"bar.labels\" chart-colours=\"bar.colours\" chart-options=\"bar.options\"></canvas>\n" +
    "				<div ng-hide = \"show_canvas\" class=\"message-holder\"><h2>No Data Available</h2></div>\n" +
    "			  </div>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/overall-rating/overall-rating.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/overall-rating/overall-rating.tpl.html",
    "<div class=\"ibox float-e-margins\" ng-class=\"{loading: show_loading}\">\n" +
    "  <div class=\"ibox-title\">\n" +
    "      <h5>Timeline</h5>\n" +
    "      <div class=\"ibox-tools\">\n" +
    "          <ul class=\"tab-links\">\n" +
    "              <li>\n" +
    "                  <div class=\"calender-outer\">\n" +
    "					  <span class=\"calendar-holder\">\n" +
    "						   <input date-range-picker id=\"daterange-map\" readonly=\"readonly\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" ng-disabled = \"!mainView\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "						  <i class=\"fa fa-calendar\" map-range-click></i>\n" +
    "					  </span>\n" +
    "				  </div>\n" +
    "              </li>\n" +
    "          </ul>\n" +
    "      <a ng-click = \"backToMain()\" ng-hide = \"mainView\" class=\"btn-back\">Back</a>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"ibox-content\" same-rating-height data-data=\"overall_rating_data\">\n" +
    "      <ul class=\"legends-list\">\n" +
    "        <li ng-repeat = \"label in labels track by $index\">\n" +
    "          <span class=\"bullet\" back-ground data-color = \"label.color\"></span>\n" +
    "          <a ng-click=\"labelClick(label)\" ng-if = \"mainView\">{{label.option_name}}</a>\n" +
    "          <span ng-if = \"!mainView\">{{label.option_name}}</span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <div class=\"block-holder\" time-line data-data = \"overall_rating_data\" data-action=\"optionClick(option_object)\">\n" +
    "      	  <a ng-click = \"Prev()\" ng-show = \"mainView\" class=\"btn-prev fa fa-angle-left\" ng-if = \"max_page > 1 && page > 1\"></a>\n" +
    "          <a ng-click = \"Next()\" ng-show = \"mainView\" class=\"btn-next fa fa-angle-right\" ng-if = \"max_page > 1 && page < max_page\"></a>\n" +
    "          <a ng-click = \"labelPrev()\" ng-show = \"optionView\" class=\"btn-prev fa fa-angle-left\" ng-if = \"max_page > 1 && page > 1\"></a>\n" +
    "          <a ng-click = \"labelNext()\" ng-show = \"optionView\" class=\"btn-next fa fa-angle-right\" ng-if = \"max_page > 1 && page < max_page\"></a>\n" +
    "          <a ng-click = \"optionPrev()\" ng-show = \"optionView == false\" class=\"btn-prev fa fa-angle-left\" ng-if = \"max_page > 1 && page > 1\"></a>\n" +
    "          <a ng-click = \"optionNext()\" ng-show = \"optionView == false\" class=\"btn-next fa fa-angle-right\" ng-if = \"max_page > 1 && page < max_page\"></a>\n" +
    "          <div id=\"chartdiv\" style=\"width: 100%; height: 320px;\"></div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/positive-negative-feedback/comments-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/positive-negative-feedback/comments-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <a ng-click = \"cancel()\" class=\"pull-right close-btn-font\"><i class=\"fa fa-times\"></i></a>\n" +
    "  <h2>Positive Negative Feedback</h2>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"table-holder\">\n" +
    "    <div class=\"table-block jcf-scrollable\" custom-form>\n" +
    "  	  <table class=\"table\">\n" +
    "	    <thead>\n" +
    "		  <tr>\n" +
    "			<th class=\"item1\">Name</th>\n" +
    "			<th class=\"item2\">Phone / Email</th>\n" +
    "			<th class=\"item3\">Branch</th>\n" +
    "			<th class=\"item4\">Segment</th>\n" +
    "			<th class=\"item5\">Comments</th>\n" +
    "		    <th class=\"item6\">Status</th>\n" +
    "		  </tr>\n" +
    "		</thead>\n" +
    "	  </table>\n" +
    "	  <div class=\"table-container jcf-scrollable\" data-comments = \"comments\" ng-class = \"{loading: lock}\" when-scrolled=\"getMoreComments()\" custom-form>\n" +
    "	    <table class=\"table\">\n" +
    "		  <tbody>\n" +
    "		    <tr ng-repeat = \"comment in comments\" ng-class = \"{negative: comment.data.is_negative, success: comment.data.action_taken === 2, defer: comment.data.action_taken === 3}\">\n" +
    "			  <td class=\"item1\">{{comment.data.user_name}}</td>\n" +
    "			  <td class=\"item2\"><a href=\"tel:{{comment.phone_no}}\" class=\"tel\">{{comment.phone_no}}</a><br>{{comment.email}}</td>\n" +
    "			  <td class=\"item3\">{{comment.data.branch}}</td>\n" +
    "			  <td class=\"item4\">{{comment.data.segment}}</td>\n" +
    "			  <td class=\"item5\">\n" +
    "			  	<div class=\"text\">{{comment.data.comment}}</div>\n" +
    "			  </td>\n" +
    "			  <td class=\"item6\">\n" +
    "			    <div class=\"btn-group\" uib-dropdown dropdown-append-to-body ng-show = \"comment.show_dropdown\">\n" +
    "				  <button type=\"button\" class=\"btn btn-info\" ng-click=\"selectedValue('Process',comment)\">Process</button>\n" +
    "				  <button id=\"btn-append-to-body\" type=\"button\" class=\"btn btn-info\" uib-dropdown-toggle>\n" +
    "				    <span class=\"caret\"></span>\n" +
    "					<span class=\"sr-only\">Split button!</span>\n" +
    "				  </button>\n" +
    "				  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btn-append-to-body\">\n" +
    "				    <li role=\"menuitem\">\n" +
    "					  <a style = \"cursor:pointer;\" ng-click=\"selectedValue('Defer',comment)\">Defer</a>\n" +
    "					</li>\n" +
    "				  </ul>\n" +
    "				</div>\n" +
    "				<span ng-hide = \"comment.show_dropdown\">{{comment.action_string}}</span>\n" +
    "			  </td>\n" +
    "			</tr>\n" +
    "		  </tbody>\n" +
    "		</table>\n" +
    "		<span class=\"loader\"></span>\n" +
    "	  </div>\n" +
    "  	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/positive-negative-feedback/positive-negative-feedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/positive-negative-feedback/positive-negative-feedback.tpl.html",
    "<div class=\"comment-block\">\n" +
    "  <a style = \"cursor:pointer;\" class=\"nav-opener\" mobile-nav>\n" +
    "    <i class=\"fa fa-comments-o\"></i>\n" +
    "    <!--  <span class=\"count\">{{feedback_count}}</span> -->\n" +
    "  </a>\n" +
    "  <div class=\"comments-drop\">\n" +
    "    <a href=\"#\" class=\"nav-opener\">\n" +
    "      <i class=\"fa fa-times\"></i>\n" +
    "    </a>\n" +
    "    <div class=\"inner-holder\">\n" +
    "      <div class=\"heading-holder\">\n" +
    "        <div class=\"holder\">\n" +
    "          <div class=\"icon-holder\">\n" +
    "            <i class=\"fa fa-comments-o\"></i>\n" +
    "          </div>\n" +
    "          <h2>Positive/Negative Feedback</h2>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"comments-holder\">\n" +
    "          <ul class=\"comments-list list-unstyled jcf-scrollable\" custom-form data-comments = \"comments\">\n" +
    "		    <li ng-if = \"feedback_count != 0\" ng-repeat = \"comment in comments\" ng-class = \"{negative: comment.data.is_negative, positive: !comment.data.is_negative, processed: comment.action_string == 'Processed', deferred: comment.action_string == 'Deferred'}\">\n" +
    "			  <p>{{comment.data.comment}}</p>\n" +
    "			  <time datetime=\"{{comment.date_time}}\">{{comment.date_time}}</time>\n" +
    "            </li>\n" +
    "			<li ng-if = \"feedback_count == 0\">No Data Available</li>\n" +
    "          </ul>\n" +
    "      </div>\n" +
    "      <div class=\"btn-holder\">\n" +
    "        <button class=\"btn btn-info pull-right btn-close\" ng-click = \"open()\" ng-disabled = \"feedback_count == 0\">View All</button>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/regional-analysis/regional-analysis.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/regional-analysis/regional-analysis.tpl.html",
    "<div class=\"ibox float-e-margins\" ng-class=\"{loading: show_loading}\">\n" +
    "\n" +
    "  <div class=\"ibox-title\">\n" +
    "	<h5>{{title}}</h5>\n" +
    "	<!--<h5 ng-show = \"area_view\">{{title}}</h5>-->\n" +
    "	<!--<h5 ng-show = \"area_view == false && regional_view == true\">{{selected_area.name}}'s Region Analysis</h5>-->\n" +
    "	<!--<h5 ng-show = \"regional_view == false && city_view == true\">{{selected_region.name}}'s City Analysis</h5>-->\n" +
    "	<!--<h5 ng-show = \"area_view == false && regional_view == false && city_view == false\">{{selected_city.name}}'s Branch Analysis</h5>-->\n" +
    "	<div class=\"ibox-tools\">\n" +
    "	  <ul class=\"tab-links\">\n" +
    "		<li ng-class=\"{active: radioModel == 'Complaints'}\"><a ng-model=\"radioModel\" uib-btn-radio=\"'Complaints'\" ng-click = \"showChart(null, 'areas')\">Complaints</a></li>\n" +
    "		<li ng-class=\"{active: radioModel == 'Rating'}\"><a ng-model=\"radioModel\" uib-btn-radio=\"'Rating'\" ng-click = \"showChart(null, 'areas')\">Rating</a></li>\n" +
    "		<li ng-class=\"{active: radioModel == 'QSC'}\"><a ng-model=\"radioModel\" uib-btn-radio=\"'QSC'\" ng-click = \"showChart(null, 'areas')\">QSC</a></li>\n" +
    "		<li>\n" +
    "			<div class=\"calender-outer\">\n" +
    "			  <span class=\"calendar-holder\">\n" +
    "				   <input date-range-picker id=\"daterange-map\" readonly=\"readonly\" name=\"daterange-map\" class=\"date-picker\" type=\"text\"\n" +
    "	   ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "				  <i class=\"fa fa-calendar\" map-range-click></i>\n" +
    "			  </span>\n" +
    "		  </div>\n" +
    "		</li>\n" +
    "	  </ul>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "  <div class=\"ibox-content morris-content-outer\">\n" +
    "    <div class = \"breadcrum\">\n" +
    "      <span ng-show = \"area_link == true\">\n" +
    "        <a ng-click = \"backToAreas()\" style = \"cursor:pointer\">Area&nbsp;/</a>\n" +
    "      </span>\n" +
    "      <span ng-show = \"area_link == true && region_link == true\">\n" +
    "        <a ng-click = \"backToRegions(selected_area)\" style = \"cursor:pointer\">{{selected_area.name}}&nbsp;/</a>\n" +
    "      </span>\n" +
    "	  <span ng-show = \"area_link == false && region_link == true\">\n" +
    "        <a ng-click = \"backToRegions(selected_area)\" style = \"cursor:pointer\"> Region&nbsp;/</a>\n" +
    "      </span>\n" +
    "	  <span ng-show = \"area_link == true && region_link == true && city_link == true\">\n" +
    "        <a ng-click = \"backToCities(selected_region)\" style = \"cursor:pointer;\">{{selected_region.name}}</a>\n" +
    "      </span>\n" +
    "      <span ng-show = \"area_link == false && region_link == true && city_link == true\">\n" +
    "        <a ng-click = \"backToCities(selected_region)\" style = \"cursor:pointer;\">{{selected_region.name}}</a>\n" +
    "      </span>\n" +
    "    </div>\n" +
    "     <div class=\"regional-holder\">\n" +
    "       <div class=\"regional-frame\">\n" +
    "	     <div class=\"morris-content-holder\" ng-repeat = \"area in donut_graph_data.objects track by $index\" ng-show = \"area_view == true\">\n" +
    "		   <div class=\"morris-graph-holder\" same-region-height data-data=\"donut_graph_data.donutData[$index]\">\n" +
    "		     <div class=\"morris-holder\">\n" +
    "			   <div ng-show=\"area.show_chart\" morris-chart data-data=\"donut_graph_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_graph_data.donutOptions[$index]\"\n" +
    "			     data-action=\"open(option,area,region,city,branch)\" style = \"height: 200px;\"></div>\n" +
    "			   <div ng-hide=\"area.show_chart\">No data available</div>\n" +
    "			 </div>\n" +
    "\n" +
    "		   </div>\n" +
    "	       <strong class=\"title\"><a ng-click = \"showChart(area, 'regions')\" style = \"cursor:pointer;\">{{area.name}}</a></strong>\n" +
    "		 </div>\n" +
    "		 <div ng-show=\"show_string && area_view == true\">No area available</div>\n" +
    "\n" +
    "		 <div class=\"morris-content-holder\" ng-repeat = \"region in donut_regions_data.objects track by $index\" ng-show = \"area_view == false && regional_view == true\">\n" +
    "		   <div class=\"morris-graph-holder\" same-region-height data-data=\"donut_regions_data.donutData[$index]\">\n" +
    "		     <div class=\"morris-holder\">\n" +
    "			   <div ng-show=\"region.show_chart\" morris-chart data-data=\"donut_regions_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_regions_data.donutOptions[$index]\"\n" +
    "                 data-action=\"open(option,selected_area,region,city,branch)\" style = \"height: 200px;\"></div>\n" +
    "			   <div ng-hide=\"region.show_chart\">No data available</div>\n" +
    "			 </div>\n" +
    "		   </div>\n" +
    "		   <strong class=\"title\"><a ng-click = \"showChart(region, 'cities')\" style = \"cursor:pointer;\">{{region.name}}</a></strong>\n" +
    "		 </div>\n" +
    "		 <div ng-show=\"show_string && area_view == false && regional_view == true\">No region available</div>\n" +
    "\n" +
    "		 <div class=\"morris-content-holder\" ng-repeat = \"city in donut_cities_data.objects track by $index\" ng-show = \"area_view == false && regional_view == false && city_view == true\">\n" +
    "		   <div class=\"morris-graph-holder\" same-city-height data-data = \"donut_cities_data.donutData[$index]\">\n" +
    "		     <div class=\"morris-holder\">\n" +
    "			   <div ng-show=\"city.show_chart\" morris-chart data-data=\"donut_cities_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_cities_data.donutOptions[$index]\"\n" +
    "                 data-action=\"open(option,selected_area,selected_region,city,branch)\" style = \"height: 200px;\"></div>\n" +
    "			   <div ng-hide=\"city.show_chart\">No data available</div>\n" +
    "			 </div>\n" +
    "		   </div>\n" +
    "		   <strong class=\"title\"><a ng-click = \"showChart(city, 'branches')\" style = \"cursor:pointer;\">{{city.name}}</a></strong>\n" +
    "		 </div>\n" +
    "		 <div ng-show=\"show_string && area_view == false && regional_view == false && city_view == true\">No city available</div>\n" +
    "\n" +
    "		 <div class=\"morris-content-holder\" ng-repeat = \"branch in donut_branches_data.objects track by $index\" ng-show = \"area_view == false && regional_view == false && city_view == false\">\n" +
    "		   <div class=\"morris-graph-holder\" same-branch-height  data-data = \"donut_branches_data.donutData[$index]\">\n" +
    "		     <div class=\"morris-holder\">\n" +
    "			   <div ng-show=\"branch.show_chart\" morris-chart data-data=\"donut_branches_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_branches_data.donutOptions[$index]\"\n" +
    "                 data-action=\"open(option,selected_area,selected_region,selected_city,branch)\" style = \"height: 200px;\"></div>\n" +
    "			   <div ng-hide=\"branch.show_chart\">No data available</div>\n" +
    "			 </div>\n" +
    "		   </div>\n" +
    "		   <strong class=\"title\">{{branch.name}}</strong>\n" +
    "		 </div>\n" +
    "		 <div ng-show=\"show_string && area_view == false && regional_view == false && city_view == false\">No branch available</div>\n" +
    "	   </div>\n" +
    "     </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("dashboard/regional-analysis/sqc-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/regional-analysis/sqc-modal.tpl.html",
    "<div class=\"modal-body info-area\">\n" +
    "  <a ng-click = \"ok()\" class=\"pull-right close-btn-font\"><i class=\"fa fa-times\"></i></a>\n" +
    "  <h2>Regional Analysis</h2>\n" +
    "	<a style = \"cursor:pointer;\" ng-class=\"{btnSlider: show_angle_left}\" ng-click=\"previous(area,region,city,branch,sqc_data)\"></a>\n" +
    "	<a style = \"cursor:pointer;\" ng-class=\"{btnSlider:show_angle_right, right:show_angle_right}\" ng-click=\"next(area,region,city,branch,sqc_data)\"></a>\n" +
    "\n" +
    "  <div class=\"graph-container\" ng-class=\"{loading: show_loading}\">\n" +
    "  	<div class=\"holder\">\n" +
    "  		<div class=\"graph-holder\">\n" +
    "		<div morris-chart-modal data-data=\"donut_subgraph_data.donutData\" data-type=\"donut\" data-options=\"donut_subgraph_data.donutOptions\"></div>\n" +
    "	  </div>\n" +
    "	  <div style = \"text-align: center;\" ng-show=\"show_div\">No data available</div>\n" +
    "  	</div>\n" +
    "  </div>\n" +
    "  <h3 style = \"text-align: center;\">{{ sqc.name }}</h3>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/statistics/statistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/statistics/statistics.tpl.html",
    "<div ng-controller = \"StatisticsCtrl\">    \n" +
    "  <section class=\"panel panel-default\">\n" +
    "    <div class=\"panel-body\">\n" +
    "      <h4>Statistics</h4>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "  ");
}]);

angular.module("dashboard/top-concern/top-concern.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/top-concern/top-concern.tpl.html",
    "<div class=\"row inner-row add\" same-height data-data = \"data\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <div class=\"ibox float-e-margins float-e-margin-none\" ng-class=\"{loading: show_loading}\">\n" +
    "      <div class=\"title-outer\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "          <h5>Top Opportunities</h5>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"content-holder\" top-concerns data-data = \"data\">\n" +
    "        <div class=\"ibox-content float-chart-block chart-box\">\n" +
    "        	<div id=\"piechart\" style=\"width:100%; height:300px;\" ng-hide = \"all_zero\"></div>\n" +
    "			<div ng-show = \"all_zero\" class=\"message-holder\">\n" +
    "				<h2>No Data Available</h2>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "        <!--<div class=\"ibox-content\">-->\n" +
    "          <!--<div class=\"graph-block\">-->\n" +
    "            <!--&lt;!&ndash;<canvas id=\"doughnut\" class=\"chart chart-doughnut\" chart-data=\"data\" chart-labels=\"labels\"></canvas> &ndash;&gt;-->\n" +
    "          <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("live/benchmark-map/benchmark-map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/benchmark-map/benchmark-map.tpl.html",
    "<div class=\"slide win-height\">\n" +
    "        <div class=\"slide-holder\">\n" +
    "            <div class=\"holder\">\n" +
    "                <div ng-show=\"branches.length == 0\" class=\"error-msg\">\n" +
    "                	<span>No Feedback Received</span>\n" +
    "                </div>\n" +
    "                <div class=\"detail-holder\" ng-hide=\"branches.length == 0\">\n" +
    "                    <div class=\"table-inner\">\n" +
    "                        <div class=\"info-block\">\n" +
    "                            <div class=\"inner-box\">\n" +
    "                                <h3>Gro Of The Day</h3>\n" +
    "                                <div class=\"hold\">\n" +
    "                                    <span class=\"name\">{{leader_board_data.gro.gro.gro_name}}</span>\n" +
    "                                    <div class=\"info\">\n" +
    "                                        <strong>{{leader_board_data.gro.count}}</strong> feedback received, <span class=\"branch\"><strong>{{leader_board_data.gro.branch.branch_name}}</strong> Branch</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"inner-box\">\n" +
    "                                <h3>City Of The Day</h3>\n" +
    "                                <div class=\"hold\">\n" +
    "                                    <span class=\"name\">{{leader_board_data.city.city_name}}</span>\n" +
    "                                    <div class=\"info\">\n" +
    "                                        <strong>{{leader_board_data.city.count}}</strong> feedback received\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"table-inner\">\n" +
    "                      <div class=\"info-block\">\n" +
    "                        <h3>Top leading Branches</h3>\n" +
    "                        <ul>\n" +
    "                          <li ng-repeat=\"branch_data in branches\">\n" +
    "                            <span class=\"count\">{{branch_data.count}}</span>\n" +
    "                            <div class=\"name\">{{branch_data.city.city_name}}-{{branch_data.branch.branch_name}}</div>\n" +
    "                          </li>\n" +
    "                        </ul>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("live/business-segments/business-segment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/business-segments/business-segment.tpl.html",
    "<div class=\"slide win-height\" business-segment data-data = \"segmentation_rating\">\n" +
    "	<div class=\"slide-holder add\">\n" +
    "		<div class=\"holder\">\n" +
    "			<div class=\"inner-holder\">\n" +
    "				<div class=\"list-holder\">\n" +
    "					<ul class=\"list\">\n" +
    "						<li class = {{label.option_class}} ng-repeat=\"label in business_segments_labels\"><span class=\"bullet\"></span> {{label.option_name}}</li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "				<div class=\"block-holder\">\n" +
    "					<div class=\"c-holder\">\n" +
    "						<div class=\"block\">\n" +
    "							<div class=\"chart-outer\">\n" +
    "								<div id=\"stackchart\"></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("live/live.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/live.tpl.html",
    "<div id=\"wrapper\">\n" +
    "	<header id=\"header\">\n" +
    "		<div class=\"header-block\">\n" +
    "			<div class=\"logo\"><a href=\"http://www.mcdonalds.com.pk/\" target=\"_blank\"><img src=\"assets/images/logo.png\" alt=\"MacDonald's\"></a></div>\n" +
    "			<div class=\"slider\">\n" +
    "				<div class=\"slideset\">\n" +
    "					<div class=\"heading-slide\"><h2>qsc complaints</h2></div>\n" +
    "					<div class=\"heading-slide\"><h2>business segment</h2></div>\n" +
    "					<div class=\"heading-slide\"><h2>overall rating</h2></div>\n" +
    "					<div class=\"heading-slide\"><h2>What would make you visit McDonald's more often?</h2></div>\n" +
    "					<div class=\"heading-slide\"><h2>Top Opportunities</h2></div>\n" +
    "					<div class=\"heading-slide\"><h2>Complaint analysis</h2></div>\n" +
    "					<div class=\"heading-slide\"><h2>Leaderboard</h2></div>\n" +
    "				</div>\n" +
    "				<div class=\"heading-holder\">\n" +
    "					<h1>Country Wide</h1>\n" +
    "					<ul class=\"timer-slider\">\n" +
    "						<li>Since Last Week</li>\n" +
    "						<li>Since Yesterday Morning</li>\n" +
    "						<li>Since Yesterday Morning</li>\n" +
    "						<li>Since Yesterday Morning</li>\n" +
    "						<li>Since Beginning</li>\n" +
    "						<li>Since Yesterday Morning</li>\n" +
    "						<li>Since Yesterday Morning</li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"header-content\">\n" +
    "			<time datetime=\"2015-12-23 13:49\"><strong>{{time}}</strong>  {{date_output}}</time>\n" +
    "			<ul class=\"info-list\">\n" +
    "				<li>\n" +
    "					<strong class=\"title\">Overall Experience</strong>\n" +
    "					<ul>\n" +
    "						<li>{{top_ranking.overall_experience.option_text}}</li>\n" +
    "					</ul>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<strong class=\"title\">Top Segment</strong>\n" +
    "					<ul>\n" +
    "						<li>{{top_ranking.top_segment.segment}}</li>\n" +
    "					</ul>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<strong class=\"title\">Positive / Negative Feedback</strong>\n" +
    "					<ul>\n" +
    "						<li class=\"positive\">{{top_ranking.positive_negative_feedback.positive_feedback_count}}</li>\n" +
    "						<li>{{top_ranking.positive_negative_feedback.negative_feedback_count}}</li>\n" +
    "					</ul>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<strong class=\"title\">QSC complaints</strong>\n" +
    "					<ul>\n" +
    "						<li ng-repeat = \"q_count in qsc_ranking\" ng-class = \"{'item2': q_count.option_name == 'Service', 'item3': q_count.option_name == 'Cleanliness'}\">{{q_count.option_count}}</li>\n" +
    "					</ul>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</header>\n" +
    "\n" +
    "	<div class=\"slideshow win-height win-min-height\">\n" +
    "		<div class=\"slideset win-height\">\n" +
    "			<ui-view name = \"qsc\"></ui-view>\n" +
    "			<ui-view name = \"business_segment\"></ui-view>\n" +
    "			<ui-view name = \"overall_rating\"></ui-view>\n" +
    "			<ui-view name = \"strength\"></ui-view>\n" +
    "			<ui-view name = \"top_concern\"></ui-view>\n" +
    "			<ui-view name = \"patch_qsc_analysis\"></ui-view>\n" +
    "			<ui-view name = \"benchmark_map\"></ui-view>\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"pagination-holder\" init-slide>\n" +
    "			<ul class=\"pagination\">\n" +
    "				<li><a href=\"#\"><span>QSc</span></a></li>\n" +
    "				<li><a href=\"#\"><span>Business Segment</span></a></li>\n" +
    "				<li><a href=\"#\"><span>Overall rating</span></a></li>\n" +
    "				<li><a href=\"#\"><span>Top Strengths</span></a></li>\n" +
    "				<li><a href=\"#\"><span>Top Opportunities</span></a></li>\n" +
    "				<li><a href=\"#\"><span>Complaint analysis</span></a></li>\n" +
    "				<li><a href=\"#\"><span>Leaderboard</span></a></li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("live/overall-ratings/overall-rating.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/overall-ratings/overall-rating.tpl.html",
    "<div class=\"slide win-height\" overall-rating data-data = \"overall_rating_data\">\n" +
    "	<div class=\"slide-holder\">\n" +
    "		<div class=\"holder\">\n" +
    "			<div class=\"chart-outer\">\n" +
    "				<div id=\"barchart\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("live/patch-qsc-analysis/patch-qsc-analysis.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/patch-qsc-analysis/patch-qsc-analysis.tpl.html",
    "<div class=\"slide win-height\">\n" +
    "    <div class=\"slide-holder add\">\n" +
    "        <div class=\"holder\">\n" +
    "            <div class=\"inner-holder\">\n" +
    "                <div class=\"list-holder\">\n" +
    "                    <ul class=\"list\">\n" +
    "                        <li class = {{label.action_class}} ng-repeat=\"label in patch_qsc_labels\"><span class=\"bullet\"></span> {{label.action_name}}</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"error-msg\" ng-show=\"all_zeros\">\n" +
    "                    <span>No data generated</span>\n" +
    "                </div>\n" +
    "                <div class=\"block-holder\" ng-hide=\"all_zeros\">\n" +
    "                    <div class=\"c-holder\">\n" +
    "                        <div class=\"box-holder\" patch-pie-chart data-data = \"pakistan_analysis\">\n" +
    "                            <div id=\"piechart\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"box-holder\">\n" +
    "							<div class=\"container-holder\">\n" +
    "								<div class=\"container\">\n" +
    "									<div class=\"box\" >\n" +
    "										<div id=\"chartdiv\" patch-chart-div data-data = \"north_south_percentage\"></div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<div class=\"container add\">\n" +
    "									<div class=\"box\" >\n" +
    "										<div id=\"patch-bar\" patch-bar-one data-data = \"north_analysis\"></div>\n" +
    "									</div>\n" +
    "									<div class=\"box\" >\n" +
    "										<div id=\"patch-bar2\" patch-bar-two data-data = \"south_analysis\"></div>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("live/qsc/qsc.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/qsc/qsc.tpl.html",
    "<div class=\"slide win-height\" qsc data-data = \"overall_rating_data\">\n" +
    "	<div class=\"slide-holder add\">\n" +
    "		<div class=\"holder\">\n" +
    "			<div class=\"inner-holder\">\n" +
    "				<div class=\"list-holder\">\n" +
    "					<ul class=\"list\">\n" +
    "						<li class = {{label.option_class}} ng-repeat=\"label in qsc_labels\"><span class=\"bullet\"></span> {{label.option_name}} </li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "				<div class=\"block-holder\">\n" +
    "					<div class=\"c-holder\">\n" +
    "						<div class=\"block\">\n" +
    "							<div class=\"chart-outer\">\n" +
    "								<div id=\"area-chart\"></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("live/strength/strength.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/strength/strength.tpl.html",
    "<div class=\"slide win-height\">\n" +
    "	<div class=\"slide-holder\">\n" +
    "		<div class=\"holder\">\n" +
    "			<div class=\"chart-outer\" strength data-data = \"strength_data\" ng-hide=\"all_zero\">\n" +
    "				<div id=\"strengthPieChart\"></div>\n" +
    "				<div ng-show=\"all_zero\" class=\"error-msg\">\n" +
    "					<span>No Data Generated</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("live/top-concerns/top-concern.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("live/top-concerns/top-concern.tpl.html",
    "<div class=\"slide win-height\">\n" +
    "	<div class=\"slide-holder\">\n" +
    "		<div class=\"holder\">\n" +
    "			<div class=\"chart-outer\" top-concern data-data = \"top_concern_data\" ng-hide=\"all_zero\">\n" +
    "				<div id=\"container\"></div>\n" +
    "				<div ng-show=\"all_zero\" class=\"error-msg\">\n" +
    "					<span>No Data Generated</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"wrapper wrapper-content animated fadeInLeft\">\n" +
    "	<div id=\"header\">\n" +
    "		<div class=\"logo\"><a href=\"http:\\\\mcdonalds.com.pk\" target=\"_blank\"><img src=\"assets/images/logo.png\" width=\"116\" height=\"112\" alt=\"McDonald &reg;\"></a>	</div>\n" +
    "		<h2>Customer Centric Approach</h2>\n" +
    "	</div>\n" +
    "	<div class=\"section\">\n" +
    "		<div class=\"login-block\">\n" +
    "			<div class=\"form-holder\" ng-class=\"{loading: show_loading}\">\n" +
    "				<div class=\"form-inner\">\n" +
    "					<flash-message  show-close=\"true\" on-dismiss=\"onAlertDismiss(flash)\"></flash-message> \n" +
    "					<div class=\"inner-holder\">\n" +
    "						<h3>Log In</h3>\n" +
    "						<form class=\"login-form\" name = \"LoginForm\" ng-submit=\"login(LoginForm.$valid)\" novalidate>\n" +
    "							<fieldset>\n" +
    "								<input type=\"text\" class=\"form-control\" placeholder=\"User Name\" required name = \"username\" ng-model = \"authenticate.username\">\n" +
    "								<div ng-show=\"LoginForm.username.$error.required && (!LoginForm.username.$pristine || submitted == true)\" class=\"form-error-message pull-left\">Username is required.</div>\n" +
    "								<input type=\"password\" class=\"form-control\" placeholder=\"Password\" required name = \"password\" ng-model = \"authenticate.password\">\n" +
    "								<div ng-show=\"LoginForm.password.$error.required && (!LoginForm.password.$pristine || submitted == true)\" class=\"form-error-message pull-left\">Password is required.</div>\n" +
    "								<input type=\"submit\" value=\"Log in\" class=\"btn btn-info\">\n" +
    "								<label for=\"check-1\">\n" +
    "									<input id=\"check-1\" type=\"checkbox\" ng-model = \"remember_me\" ng-checked = \"remember_me\">\n" +
    "									<span class=\"fake-input\"></span>\n" +
    "									<span class=\"fake-label\">Remember me on this computer.</span>\n" +
    "								</label>\n" +
    "							</fieldset>\n" +
    "						</form>\n" +
    "					</div>\n" +
    "					<div class=\"btn-holder\">\n" +
    "						<a ng-click = \"open_support()\">Contact Support</a>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    " </div>\n" +
    "");
}]);

angular.module("manage-users/edit-user-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manage-users/edit-user-modal.tpl.html",
    "<form  class=\"info-form\" name=\"UserForm\" ng-submit=\"add(UserForm.$valid)\" novalidate>\n" +
    "	<fieldset>\n" +
    "		<div class=\"modal-header\">\n" +
    "			<a class=\"close\" ng-click = \"cancel()\">\n" +
    "				<span aria-hidden=\"true\">&times;</span>\n" +
    "				<span class=\"sr-only\">Close</span>\n" +
    "			</a>\n" +
    "			<h2 ng-if = \"!edit_form\">Add User</h2>\n" +
    "			<h2 ng-if = \"edit_form\">Edit User</h2>\n" +
    "		</div>\n" +
    "		<div class=\"modal-body\" ng-class = \"{'loading': show_loading}\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<flash-message duration=\"5000\" show-close=\"true\"></flash-message>\n" +
    "					<div class=\"form-group\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"firsName\">First Name</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "							<input type=\"text\" id=\"first_name\" class=\"form-control\" ng-model = \"user.first_name\" name = \"first_name\"\n" +
    "							required = true maxlength=\"12\">\n" +
    "							<div ng-show=\"UserForm.first_name.$error.required && (!UserForm.first_name.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">First Name is required.\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"lastName\">Last Name</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "							<input type=\"text\" id=\"last_name\" class=\"form-control\" ng-model = \"user.last_name\" name = \"last_name\"\n" +
    "							required=\"true\" maxlength=\"12\">\n" +
    "							<div ng-show=\"UserForm.last_name.$error.required && (!UserForm.last_name.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Last Name is required.\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-if = \"!edit_form\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"userName\">User Name</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "							<input type=\"text\" id=\"username\" class=\"form-control\" ng-model = \"user.username\" name = \"username\"\n" +
    "							required = true autocomplete=\"off\">\n" +
    "							<div ng-show=\"UserForm.username.$error.required && (!UserForm.username.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">User Name is required.\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"password\">Password</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "							<input type=\"password\" id=\"password\" class=\"form-control\" ng-model = \"user.password\" name=\"password\"\n" +
    "							autocomplete=\"off\" ng-required = \"!edit_form\">\n" +
    "							<div ng-show=\"UserForm.password.$error.required && (!UserForm.password.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Password is required.\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"email\">Email</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "							<input type=\"email\" id=\"email\" class=\"form-control\" ng-model = \"user.email\" name = \"email\"\n" +
    "							required = true autocomplete=\"off\" ng-pattern=\"/^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$/\">\n" +
    "							<div ng-show=\"UserForm.email.$error.required && (!UserForm.email.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Email is required.\n" +
    "						  </div>\n" +
    "							<div ng-show=\"UserForm.email.$error.pattern && (!UserForm.email.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Wrong email pattern.\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"phone_no\">Phone No.</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "							<input type=\"tel\" id=\"phone_no\" class=\"form-control\" ng-model = \"user.phone_no\" name = \"phone_no\"\n" +
    "							required = true ng-pattern=\"/^[0-9]+$/\" maxlength = \"15\">\n" +
    "							<div ng-show=\"UserForm.phone_no.$error.required && (!UserForm.phone_no.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Phone no is required.\n" +
    "							</div>\n" +
    "							<div ng-show=\"UserForm.phone_no.$error.pattern && (!UserForm.phone_no.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Wrong number pattern.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<div class=\"form-group\" ng-if = \"user.role == 3 && !user.branch\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"branch\">Branch</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "								<select id=\"branch\" class=\"barcode\" custom-form  ng-options = \"branch.id as branch.name for branch in branches track by branch.id\"\n" +
    "							ng-model = \"user.branch_id\" name = \"branch\" required>\n" +
    "									<option class=\"hideme\" value = \"\">Please Select a Branch</option>\n" +
    "							</select>\n" +
    "							<div ng-show=\"UserForm.branch.$error.required && (!UserForm.branch.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Branch is required.\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\" ng-if = \"user.role == 4 && !user.region\">\n" +
    "						<label class=\"col-sm-2 col-md-3 control-label\" for=\"code\">Regions</label>\n" +
    "						<div class=\"col-sm-10 col-md-9\">\n" +
    "							<select id=\"region\" class=\"barcode\" custom-form  ng-options = \"region.id as region.name for region in regions track by region.id\"\n" +
    "							ng-model = \"user.region_id\" name = \"region\" required=\"true\" ng-selected = \"user.region_id\">\n" +
    "								<option class=\"hideme\" value = \"\">Please Select a Region</option>\n" +
    "							</select>\n" +
    "							<div ng-show=\"UserForm.region.$error.required && (!UserForm.region.$pristine || submitted == true)\"\n" +
    "							class=\"form-error-message pull-left\">Region is required.\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"modal-footer\">\n" +
    "			<a class=\"btn btn-white\" ng-click = \"cancel()\">Cancel</a>\n" +
    "			<button class=\"btn btn-primary\" type = \"submit\">Save changes</button>\n" +
    "		</div>\n" +
    "	</fieldset>\n" +
    "</form>\n" +
    "");
}]);

angular.module("manage-users/manage-users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("manage-users/manage-users.tpl.html",
    "<div id=\"wrapper\">\n" +
    "  <ui-view name = \"sidebar\"></ui-view>\n" +
    "  <div id=\"page-wrapper\" class=\"gray-bg\">\n" +
    "     <ui-view name = \"header\"></ui-view>\n" +
    "	<a class=\"add-user\" ng-click = \"open()\" ng-hide = \"show_loading\"><i class=\"fa fa-plus\"></i></a>\n" +
    "	 <div class=\"wrapper wrapper-content animated fadeInRight\">\n" +
    "		<div class=\"row users-section\" ng-class = \"{'loading': show_loading}\">\n" +
    "			<div class=\"col-lg-12\">\n" +
    "				<h1>{{user_list}}</h1>\n" +
    "				<div class=\"users-area\">\n" +
    "					<div ng-show=\"users.length == 0\" class=\"message-block\">\n" +
    "						<i class=\"fa fa-info-circle\"></i>\n" +
    "						<h2>No User Added</h2>\n" +
    "                        <h4>Click on Add button to Add New User</h4>\n" +
    "					</div>\n" +
    "					<flash-message  show-close=\"true\" on-dismiss=\"onAlertDismiss(flash)\"></flash-message>\n" +
    "					<ul class=\"users-list\" data-users = \"users\">\n" +
    "						<li ng-repeat = \"user in users track by $index\" ng-class=\"{'deactivate': user.is_active == false, 'inactive': user.is_active == false}\">\n" +
    "							<div class=\"ibox\">\n" +
    "								<div class=\"header\">\n" +
    "									<div class=\"img-holder\"><img src=\"assets/images/person-img.png\" alt=\"\"></div>\n" +
    "									<h5>{{user.first_name}} {{user.last_name}}</h5>\n" +
    "								</div>\n" +
    "								<ul>\n" +
    "									<li>\n" +
    "										<span class=\"title\">Phone No :</span>\n" +
    "										<div class=\"text\">{{user.phone_no}}</div>\n" +
    "									</li>\n" +
    "									<li ng-if = \"child_role == 2 || child_role == 3\">\n" +
    "										<span class=\"title\">Branch :</span>\n" +
    "										<div class=\"text\" ng-show = \"user.branch\">\n" +
    "                      {{user.branch.name}}\n" +
    "                    </div>\n" +
    "                    <div class = \"text\" ng-hide = \"user.branch\">\n" +
    "                      <a ng-click = \"edit(user, $index)\">\n" +
    "                        Add Branch\n" +
    "                      </a>\n" +
    "                    </div>\n" +
    "									</li>\n" +
    "									<li>\n" +
    "										<span class=\"title\">User Name :</span>\n" +
    "										<div class=\"text\">{{user.username}}</div>\n" +
    "									</li>\n" +
    "									<li>\n" +
    "										<span class=\"title\">Email :</span>\n" +
    "										<div class=\"text\">{{user.email}}</div>\n" +
    "									</li>\n" +
    "									<li>\n" +
    "										<span class=\"title\">Status :</span>\n" +
    "										<div class=\"text\">{{user.status}}</div>\n" +
    "									</li>\n" +
    "									<li>\n" +
    "										<span class=\"title\">Role :</span>\n" +
    "										<div class=\"text\">{{user.user_role}}</div>\n" +
    "									</li>\n" +
    "									<li ng-if = \"child_role == 4\" >\n" +
    "										<span class=\"title\">Region:</span>\n" +
    "										<div class=\"text\" ng-show = \"user.region\">\n" +
    "                      {{user.region.name}}\n" +
    "                    </div>\n" +
    "                    <div class=\"text\" ng-hide = \"user.region\">\n" +
    "                      <a ng-click = \"edit(user, $index)\"> Add Region </a>\n" +
    "                    </div>\n" +
    "									</li>\n" +
    "								</ul>\n" +
    "								<div class=\"btn-box\">\n" +
    "									<span class=\"btn-holder\">\n" +
    "										<a ng-click = \"edit(user, $index)\" class=\"fa fa-pencil-square-o\" title = \"Edit User\"></a>\n" +
    "									</span>\n" +
    "									<span class=\"btn-holder\">\n" +
    "										<a ng-click = \"deactivate(user, $index)\" title = \"activate/deactivate user\" ng-class=\"{'fa fa-user btn-active': (user.is_active == false), 'fa fa-user-times btn-deactive': (user.is_active == true)}\"></a>\n" +
    "									</span>\n" +
    "\n" +
    "                  <span class=\"btn-holder\">\n" +
    "										<a ng-click = \"disassociate(user, $index)\" title = \"disassociate user\" class=\"fa fa-remove\" ng-if = \"(child_role == 4 && user.region) || ((child_role == 2 || child_role == 3) && (user.branch))\"></a>\n" +
    "									</span>\n" +
    "\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "  </div>\n" +
    "  <ui-view name = \"footer\"></ui-view>\n" +
    "</div>\n" +
    "");
}]);

angular.module("promotions/promotions-detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("promotions/promotions-detail.tpl.html",
    "<div id=\"wrapper\">\n" +
    "  <ui-view name = \"sidebar\"></ui-view>\n" +
    "  <div id=\"page-wrapper\" class=\"gray-bg\">\n" +
    "     <ui-view name = \"header\"></ui-view>\n" +
    "   <div class=\"wrapper wrapper-content animated fadeInRight\">\n" +
    "    <div class=\"row promotions\" ng-class = \"{loading: show_loading}\">\n" +
    "      <flash-message  show-close=\"true\" on-dismiss=\"onAlertDismiss(flash)\"></flash-message> \n" +
    "      <div class=\"col-lg-12\">\n" +
    "        <h1>{{promotion.title}} Promotion</h1>\n" +
    "        <div class=\"row grid-container\">\n" +
    "          <div class=\"col-sm-6 col-lg-4 grid-item\" ng-repeat = \"question in questions track by $index\">\n" +
    "            <div class=\"ibox float-e-margins\">\n" +
    "              <div class=\"ibox-title\">\n" +
    "                <h3>{{question.question}}</h3>\n" +
    "              </div>\n" +
    "              <div class=\"ibox-content\" ng-if = \"question.type == 5\">\n" +
    "                <div class=\"data-container\">\n" +
    "                  <div id = \"graph_{{$index}}\">\n" +
    "                  <div class=\"progres-container\">\n" +
    "                    <div class=\"progress-area\">\n" +
    "                    <div class=\"progress-holder\" ng-repeat = \"dat in question.question_bar_chart\" data-color = \"dat.colour\" data-data = \"question.question_bar_chart\" question-bar-background>\n" +
    "                      <div class=\"progress-inner\">\n" +
    "                      <small><em>{{dat.name}} <b>{{dat.count}} Views</b></em></small>\n" +
    "                      <div class=\"progress-block\"><uib-progressbar animate=\"false\" value=\"dat.percentage\" type=\"success\"></uib-progressbar></div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "              <div class=\"ibox-content\" ng-if = \"question.type == 4\" question-pie-chart data-data = \"question.question_pie_chart\">\n" +
    "                <div class=\"data-container\">\n" +
    "                  <div id={{question.question_pie_chart[0]}} style=\"width:100%; height:300px;\" ng-hide = \"all_zero\"></div>\n" +
    "                  <div ng-show = \"all_zero\" class=\"message-holder\">\n" +
    "                    <h2>No Data Available</h2>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <ui-view name = \"footer\"></ui-view>\n" +
    "</div>\n" +
    "");
}]);

angular.module("promotions/promotions.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("promotions/promotions.tpl.html",
    "<div id=\"wrapper\">\n" +
    "  <ui-view name = \"sidebar\"></ui-view>\n" +
    "  <div id=\"page-wrapper\" class=\"gray-bg\">\n" +
    "     <ui-view name = \"header\"></ui-view>\n" +
    "	 <div class=\"wrapper wrapper-content animated fadeInRight\">\n" +
    "		<div class=\"row promotions\" ng-class = \"{loading: show_loading}\">\n" +
    "			<div class=\"col-lg-12\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-xs-12\">\n" +
    "            <flash-message  show-close=\"true\" on-dismiss=\"onAlertDismiss(flash)\"></flash-message>\n" +
    "						<ul class=\"btn-list\">\n" +
    "							<li ng-repeat = \"promotion in promotions\">\n" +
    "								<a class=\"btn ibox dim btn-large-dim btn-outline\" ng-click = \"detail(promotion.id)\">\n" +
    "									<span class=\"ico-holder\"><img src=\"assets/images/promo1.jpg\" alt=\"\"></span>\n" +
    "									<span class=\"title\" promotion-same-height data-promotion = \"promotion\">{{promotion.title}} Promotion</span>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "						</ul>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "  </div>\n" +
    "  <ui-view name = \"footer\"></ui-view>\n" +
    "</div>\n" +
    "");
}]);
