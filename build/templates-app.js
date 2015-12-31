angular.module('templates-app', ['dashboard/category-performance-analysis/category-performance-analysis.tpl.html', 'dashboard/dashboard.tpl.html', 'dashboard/feedback-map/feedback-map.tpl.html', 'dashboard/overall-feedback/overall-feedback.tpl.html', 'dashboard/overall-rating/overall-rating.tpl.html', 'dashboard/positive-negative-feedback/comments-modal.tpl.html', 'dashboard/positive-negative-feedback/positive-negative-feedback.tpl.html', 'dashboard/regional-analysis/regional-analysis.tpl.html', 'dashboard/regional-analysis/sqc-modal.tpl.html', 'dashboard/statistics/statistics.tpl.html', 'dashboard/top-concern/top-concern.tpl.html']);

angular.module("dashboard/category-performance-analysis/category-performance-analysis.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/category-performance-analysis/category-performance-analysis.tpl.html",
    "<!-- <div class=\"section-holder ng-scope\">\n" +
    "	<div class=\"info-holder\">\n" +
    "\n" +
    "  <div class=\"heading-holder\">\n" +
    "  	<h2>Business Segment Breakdown\n" +
    "  		<span class=\"icon-help\" uib-popover=\"Representation of the overall QSC breakdown for each business segment. Change the tabs for sub-categories of each main category.\" popover-trigger=\"mouseenter\" popover-placement=\"top\"></span>\n" +
    "	</h2>\n" +
    "  	<ul>\n" +
    "  		<li><a class=\"btn btn-default\"  ng-class=\"{active: class == ''}\" ng-click = \"onClick(null, 'All')\" uib-tooltip=\"Click to view QSC Segmentation Breakdown\" >All</a></li>\n" +
    "  		<li><a class=\"btn btn-default\"  ng-class=\"{active: class == 'Quality'}\" ng-click = \"onClick(QualityID, 'Quality')\" uib-tooltip=\"Click to View Quality SubCategories Breakdown\">Quality</a></li>\n" +
    "  		<li><a class=\"btn btn-default\"  ng-class=\"{active: class == 'Service'}\" ng-click = \"onClick(ServiceID, 'Service')\" uib-tooltip=\"Click to view Service SubCategories Breakdown\">Service</a></li>\n" +
    "  		<li><a class=\"btn btn-default\"  ng-class=\"{active: class == 'Cleanliness'}\" ng-click = \"onClick(CleanlinessID, 'Cleanliness')\" uib-tooltip=\"Click to view Cleanliness SubCategories Breakdown\">Cleanliness</a></li>\n" +
    "  		<li>\n" +
    "			<div class=\"calender-outer\">\n" +
    "				<span class = \"calendar-holder pull-right\" uib-tooltip=\"Click to Select Custom Date Range\">\n" +
    "				  <input date-range-picker id=\"daterange-map\" readonly=\"readonly\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "				  <i class=\"glyphicon glyphicon-calendar\" map-range-click></i>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</li>\n" +
    "  	</ul>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"progress-container\" ng-class=\"{loading: show_loading}\">\n" +
    "  	<ul class=\"list add\">\n" +
    "		  <li ng-repeat = \"dat in category_data\"><span class=\"bullet\" style = \"background-color: {{dat.colour}}\"></span>{{dat.name}}</li>\n" +
    "	  </ul>\n" +
    "  	<div class=\"main-holder\">\n" +
    "  		<div class=\"holder\">\n" +
    "  		<div class=\"progress-area\" data-data = \"segments\" segment-progress-bar-background>\n" +
    "\n" +
    "			<div class=\"progress-section\" ng-repeat = \"segment in segments\" >\n" +
    "\n" +
    "			<small><em>{{segment.name}}</em></small>\n" +
    "\n" +
    "			<div class=\"inner-holder\">\n" +
    "				 <uib-progress>\n" +
    "					 <uib-bar ng-repeat=\"bar in segment.segment_data\" value=\"bar.percentage\" data-color = \"{{bar.colour}}\">\n" +
    "						 <span>{{bar.complaints}}</span></uib-bar>\n" +
    "				 </uib-progress>\n" +
    "			</div>\n" +
    "\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "  	</div>\n" +
    "  	<div class=\"holder\">\n" +
    "  		<div class=\"progress-area\">\n" +
    "			<div class=\"progress-holder\" ng-repeat = \"dat in category_data\" data-color = \"dat.colour\" data-data = \"category_data\" progress-bar-background>\n" +
    "				<small><em>{{dat.name}}</em></small>\n" +
    "				<div class=\"progress-block\"><uib-progressbar animate=\"false\" value=\"dat.percentage\" type=\"success\"><b>{{dat.complaints}} complaints</b></uib-progressbar></div>\n" +
    "		  </div>\n" +
    "  		</div>\n" +
    "  	</div>\n" +
    "  	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    "<div class=\"same-height-block add\">\n" +
    "    <div class=\"ibox float-e-margins\">\n" +
    "      <div class=\"title-outer\">\n" +
    "          <div class=\"ibox-title\">\n" +
    "              <h5>Business Segment Breakdown</h5>\n" +
    "              <div class=\"ibox-tools\">\n" +
    "                  <ul class=\"tab-links\">\n" +
    "                      <li ng-class=\"{active: class == ''}\"><a ng-click = \"onClick(null, 'All')\" uib-tooltip=\"Click to view QSC Segmentation Breakdown\">All</a></li>\n" +
    "                      <li class=\"item2\" ng-class=\"{active: class == 'Quality'}\"><a ng-click = \"onClick(QualityID, 'Quality')\" uib-tooltip=\"Click to View Quality SubCategories Breakdown\">Quality</a></li>\n" +
    "                      <li class=\"item3\" ng-class=\"{active: class == 'Service'}\"><a ng-click = \"onClick(ServiceID, 'Service')\" uib-tooltip=\"Click to view Service SubCategories Breakdown\">Service</a></li>\n" +
    "                      <li class=\"item4\" ng-class=\"{active: class == 'Cleanliness'}\"><a ng-click = \"onClick(CleanlinessID, 'Cleanliness')\" uib-tooltip=\"Click to view Cleanliness SubCategories Breakdown\">Cleanliness</a></li>\n" +
    "                      <li class=\"item5\">\n" +
    "                          <div class=\"calender-outer\">\n" +
    "                            <span class = \"calendar-holder pull-right\" uib-tooltip=\"Click to Select Custom Date Range\">\n" +
    "                              <input date-range-picker id=\"daterange-map\" readonly=\"readonly\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "                              <i class=\"glyphicon glyphicon-calendar\" map-range-click></i>\n" +
    "                            </span>\n" +
    "                          </div>\n" +
    "                      </li>\n" +
    "                  </ul>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "      <div class=\"content-holder\">\n" +
    "          <div class=\"ibox-content add\">\n" +
    "              <div class=\"chart-outer\">\n" +
    "                  <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\" chart-labels=\"labels\"></canvas>\n" +
    "              </div>\n" +
    "              <div class=\"list-holder\">\n" +
    "                  <div class=\"row\">\n" +
    "                      <div class=\"morris-block-holder\">\n" +
    "                          <div class=\"morris-content-holder\" ng-repeat=\"segment in segments track by $index\">\n" +
    "                              <div class=\"morris-graph-holder\">\n" +
    "                                 <div class=\"morris-holder\">\n" +
    "                                      <div>\n" +
    "                                          <canvas id=\"doughnut\" class=\"chart chart-doughnut\" chart-data=\"segment.data\" chart-labels=\"segment.labels\" chart-colours=\"segment.colors\"></canvas>\n" +
    "                                      </div>\n" +
    "                                      <div ng-show=\"segment.show_string\">No data available</div>\n" +
    "                                 </div>\n" +
    "                              </div>\n" +
    "                              <strong class=\"title\"><a href=\"#\">{{segment.name}}</a></strong>\n" +
    "                          </div>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/dashboard.tpl.html",
    "<div id=\"wrapper\">\n" +
    "  <header id=\"header\">\n" +
    "    <div class=\"header-block\">\n" +
    "      <div class=\"logo\"><a href=\"#\"><img src=\"assets/images/logo.png\" alt=\"MacDonald's\"></a></div>\n" +
    "      <div class=\"slider\">\n" +
    "        <div class=\"slideset\">\n" +
    "          <div class=\"heading-slide\"><h2>qsc complaints</h2></div>\n" +
    "          <div class=\"heading-slide\"><h2>business segment</h2></div>\n" +
    "          <div class=\"heading-slide\"><h2>overall rating</h2></div>\n" +
    "          <div class=\"heading-slide\"><h2>top concerns</h2></div>\n" +
    "          <div class=\"heading-slide\"><h2>Patch  qcs analysis</h2></div>\n" +
    "          <div class=\"heading-slide\"><h2>benchmark map</h2></div>\n" +
    "        </div>\n" +
    "        <h1>Country Wide</h1>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"header-content\">\n" +
    "      <time datetime=\"2015-12-23 13:49\"><strong>1:49 Pm</strong>   Fri - dec 23 - 15</time>\n" +
    "      <ul class=\"info-list\">\n" +
    "        <li>\n" +
    "          <strong class=\"title\">Overall Experience</strong>\n" +
    "          <ul>\n" +
    "            <li>I'm lovin' it</li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <strong class=\"title\">top Concern</strong>\n" +
    "          <ul>\n" +
    "            <li>Ketchup</li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <strong class=\"title\">Positive / Negative Feedback</strong>\n" +
    "          <ul>\n" +
    "            <li class=\"positive\">23,000</li>\n" +
    "            <li>1,000</li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "        <li>\n" +
    "          <strong class=\"title\">QSC complaints</strong>\n" +
    "          <ul>\n" +
    "            <li>50</li>\n" +
    "            <li class=\"item2\">100</li>\n" +
    "            <li class=\"item3\">10</li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </header>\n" +
    "  <div class=\"slideshow win-height win-min-height\">\n" +
    "    <div class=\"slideset win-height\">\n" +
    "      <div class=\"slide win-height\">\n" +
    "        <div class=\"slide-holder add\">\n" +
    "          <div class=\"holder\">\n" +
    "            <div id=\"area-chart\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"slide win-height\">\n" +
    "        <div class=\"slide-holder\">\n" +
    "          <div class=\"holder\">\n" +
    "            <div id=\"stackChart\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"slide win-height\">\n" +
    "        <div class=\"slide-holder\">\n" +
    "          <div class=\"holder\">\n" +
    "            <div id=\"barChart\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"slide win-height\">\n" +
    "        <div class=\"slide-holder\">\n" +
    "          <div class=\"holder\">\n" +
    "            <div id=\"container\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"slide win-height\">\n" +
    "        <div class=\"slide-holder\">\n" +
    "          <div class=\"holder\">\n" +
    "            <div id=\"container\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"slide win-height\">\n" +
    "        <div class=\"slide-holder\">\n" +
    "          <div class=\"holder\">\n" +
    "            <div id=\"container\"></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"pagination-holder\">\n" +
    "      <ul class=\"pagination\">\n" +
    "        <li><a href=\"#\">QSc</a></li>\n" +
    "        <li><a href=\"#\">Business Segment</a></li>\n" +
    "        <li><a href=\"#\">Overall rating</a></li>\n" +
    "        <li><a href=\"#\">Top Concerns</a></li>\n" +
    "        <li><a href=\"#\">Patch  qcs analysis</a></li>\n" +
    "        <li><a href=\"#\">benchmark map</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "  ");
}]);

angular.module("dashboard/feedback-map/feedback-map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/feedback-map/feedback-map.tpl.html",
    "<!-- <div class=\"info-block\">\n" +
    "  <div class=\"info-box\">\n" +
    "    <div class=\"heading\">\n" +
    "      <h2>\n" +
    "      	Benchmark Map\n" +
    "      	<span class=\"icon-help\" uib-popover=\"Representation of the branch-wise benchmark for daily feedback amount. A green marker is shown for branches who met their benchmark, and red is shown for branches who didn't.\" popover-trigger=\"mouseenter\" popover-placement=\"top\"></span>\n" +
    "      </h2>\n" +
    "      <div class=\"calender-outer\">\n" +
    "        	<span class = \"calendar-holder pull-right\" uib-tooltip=\"Click to Select Custom Date Range\">\n" +
    "			  <input date-range-picker id=\"daterange-map\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "			  <i class=\"glyphicon glyphicon-calendar\" map-range-click></i>\n" +
    "			</span>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"map-detail\" ng-class=\"{loading: show_loading}\">\n" +
    "  	<ul class=\"list\">\n" +
    "      <li class=\"good\">Above Benchmark</li>\n" +
    "      <li class=\"negative\">Below Benchmark</li>\n" +
    "    </ul>\n" +
    "  	<div class=\"map-holder\" same-map-height>\n" +
    "		<div class=\"inner-holder\">\n" +
    "			<div map-lazy-load=\"http://maps.google.com/maps/api/js\">\n" +
    "			  <map center=\"30,70\" zoom=\"{{zoom}}\" disable-default-u-i=\"true\" default-style=\"false\">\n" +
    "			  </map>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "  </div>\n" +
    "  \n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    " <div class=\"ibox float-e-margins\">\n" +
    "                  <div class=\"ibox-title\">\n" +
    "                      <h5>Benchmark Map</h5>\n" +
    "                      <div class=\"ibox-tools\">\n" +
    "                          <ul class=\"tab-links\">\n" +
    "                              <li>\n" +
    "                                  <div class=\"calender-outer\">\n" +
    "                                      <span class=\"calendar-holder\">\n" +
    "                                          <i class=\"fa fa-calendar\"></i>\n" +
    "                                      </span>\n" +
    "                                  </div>\n" +
    "                              </li>\n" +
    "                          </ul>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"ibox-content same-height\">\n" +
    "                      <div class=\"block-holder\">\n" +
    "                          <div id=\"world-map\"></div>\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "              </div>\n" +
    "");
}]);

angular.module("dashboard/overall-feedback/overall-feedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/overall-feedback/overall-feedback.tpl.html",
    "<!-- <div class=\"feedback-block\">\n" +
    "  <div class=\"heading-holder\">\n" +
    "  	<div class=\"calender-outer\">\n" +
    "			<span class = \"calendar-holder pull-right\" uib-tooltip=\"Click to Select Custom Date Range\">\n" +
    "			  <input date-range-picker id=\"daterange-map\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "			  <i class=\"glyphicon glyphicon-calendar\" map-range-click></i>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<h2>\n" +
    "			Overall Experience\n" +
    "			<span class=\"icon-help\" uib-popover=\"Representation of the overall Feedback ratings for all respective branches. For a regional/branch breakdown, please see Patch Analysis\" popover-trigger=\"mouseenter\" popover-placement=\"top\"></span>\n" +
    "		</h2>\n" +
    "  </div>\n" +
    "  <div class=\"inner-block\" ng-class=\"{loading: show_loading}\">\n" +
    "  	<ul class=\"list\">\n" +
    "      <li class=\"v-good\">I'm lovin' it</li>\n" +
    "      <li class=\"good\">Everything on track</li>\n" +
    "      <li class=\"neutral\">Few Concern</li>\n" +
    "      <li class=\"negative\">Not Happy Enough</li>\n" +
    "    </ul>\n" +
    "  	<div class=\"graph-holder\" data-mydata = \"bar.data\" same-bar-height >\n" +
    "		<div class=\"holder\">\n" +
    "			<canvas ng-show = \"show_canvas\" style=\" width: 608px; height: 260px;\" id=\"bar\" class=\"chart chart-bar\" chart-data=\"bar.data\" chart-labels=\"bar.labels\" chart-colours=\"bar.colours\" chart-options=\"bar.options\"></canvas>\n" +
    "			<div ng-hide = \"show_canvas\"><h2>No data Available</h2></div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "  </div>\n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    "<div class=\"row inner-row rating\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"ibox float-e-margins\">\n" +
    "            <div class=\"title-outer\">\n" +
    "                <div class=\"ibox-title\">\n" +
    "                    <h5>Overall Rating</h5>\n" +
    "                    <ul class=\"tab-links\">\n" +
    "                        <li>\n" +
    "                            <div class=\"calender-outer\">\n" +
    "                                <span class = \"calendar-holder pull-right\" uib-tooltip=\"Click to Select Custom Date Range\">\n" +
    "                                  <input date-range-picker id=\"daterange-map\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "                                  <i class=\"glyphicon glyphicon-calendar\" map-range-click></i>\n" +
    "                                </span>\n" +
    "                            </div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-holder\" ng-class=\"{loading: show_loading}\">\n" +
    "                <div class=\"ibox-content float-chart-block\">\n" +
    "                    <div class=\"flot-chart\">\n" +
    "                        <canvas ng-show = \"show_canvas\"  id=\"bar\" class=\"chart chart-bar\" chart-data=\"bar.data\" chart-labels=\"bar.labels\" chart-colours=\"bar.colours\" chart-options=\"bar.options\"></canvas>\n" +
    "                        <div ng-hide = \"show_canvas\"><h2>No data Available</h2></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/overall-rating/overall-rating.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/overall-rating/overall-rating.tpl.html",
    "<!-- <div class=\"rating-section\" ng-class = \"{loading: show_loading}\">\n" +
    "  <header class=\"heading-block\">\n" +
    "    <h2>\n" +
    "    	Timeline\n" +
    "    	<span class=\"icon-help\" uib-popover=\"Representation of amount of QSC complains based on their respective time. Gives a handy daily/weekly/monthly/annual complains comparison.\" popover-trigger=\"mouseenter\" popover-placement=\"top\"></span>\n" +
    "    </h2>\n" +
    "    <div class=\"pull-right\">\n" +
    "		<div class=\"calender-outer\">\n" +
    "			<span class = \"calendar-holder pull-right\" uib-tooltip=\"Click to Select Custom Date Range\">\n" +
    "			  <input date-range-picker id=\"daterange-map\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" ng-disabled = \"!mainView\" readonly=\"true\"/>\n" +
    "			  <i class=\"glyphicon glyphicon-calendar\" map-range-click ></i>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "   		<span class=\"select-holder\">\n" +
    "   			<select ng-disabled = \"!mainView\" ng-model= \"type\" ng-change = \"axisChanged()\" id=\"timely\" custom-form>\n" +
    "  				<option value = \"1\">Daily</option>\n" +
    "  				<option value = \"2\">Weekly</option>\n" +
    "  				<option value = \"3\">Monthly</option>\n" +
    "  				<option value = \"4\">Yearly</option>\n" +
    "			  </select>\n" +
    "   		</span>\n" +
    "    	<a ng-click = \"backToMain()\" ng-hide = \"mainView\">Back</a>\n" +
    "    </div>\n" +
    "  </header>\n" +
    "  <div class=\"rating-holder\">\n" +
    "    <ul>\n" +
    "      <li ng-repeat = \"label in qsc_labels track by $index\">\n" +
    "        <span class=\"bullet\" style = \"background-color: {{label.color}}\"></span>\n" +
    "        <a style = \"cursor:pointer\" ng-click = \"labelClick(label)\">{{label.value}}</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <div class=\"graph-holder\" same-rating-height data-data = \"line1.data\">\n" +
    "    	<div class=\"inner-holder\">\n" +
    "    		<flot dataset=\"line1.data\" options=\"line1.options\" data-width = \"100%\" data-height = \"300px\" on-plot-click = \"optionClick(event, pos, item)\"></flot>\n" +
    "    	</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"ibox float-e-margins\">\n" +
    "  <div class=\"ibox-title\">\n" +
    "      <h5>Timeline</h5>\n" +
    "      <div class=\"ibox-tools\">\n" +
    "          <ul class=\"tab-links\">\n" +
    "              <li>\n" +
    "                  <div class=\"calender-outer\">\n" +
    "                      <span class=\"calendar-holder\">\n" +
    "                          <i class=\"fa fa-calendar\"></i>\n" +
    "                      </span>\n" +
    "                  </div>\n" +
    "              </li>\n" +
    "          </ul>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"ibox-content same-height\">\n" +
    "      <div class=\"block-holder\">\n" +
    "          <!-- <canvas id=\"lineChart\" height=\"140\"></canvas> -->\n" +
    "          <!-- <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\" chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\" chart-click=\"onClick\" ></canvas>  -->\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/positive-negative-feedback/comments-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/positive-negative-feedback/comments-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "  <a ng-click = \"cancel()\" class=\"pull-right close-btn-font\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n" +
    "  <h2>Positive Negative Feedback</h2>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <div class=\"table-holder\">\n" +
    "  	<div class=\"table-block jcf-scrollable\" custom-form>\n" +
    "  		<table class=\"table\">\n" +
    "			<thead>\n" +
    "			  <tr>\n" +
    "				<th class=\"item1\">Name</th>\n" +
    "				<th class=\"item2\">Phone <span>Number</span><span class=\"no\">No</span>/ Email</th>\n" +
    "				<th class=\"item3\">Branch</th>\n" +
    "				<th class=\"item4\">Segment</th>\n" +
    "				<th class=\"item5\">Comments</th>\n" +
    "				<th class=\"item6\">Status</th>\n" +
    "			  </tr>\n" +
    "			</thead>\n" +
    "	  	</table>\n" +
    "		<div class=\"table-container jcf-scrollable\" data-comments = \"comments\" ng-class = \"{loading: lock}\" when-scrolled=\"getMoreComments()\" custom-form>\n" +
    "			<table class=\"table\">\n" +
    "			  <tbody>\n" +
    "				<tr ng-repeat = \"comment in comments\" ng-class = \"{negative: comment.data.is_negative, success: comment.data.action_taken === 2, defer: comment.data.action_taken === 3}\">\n" +
    "\n" +
    "				  <td class=\"item1\">{{comment.data.user_name}}</td>\n" +
    "				  <td class=\"item2\">\n" +
    "					<a href=\"tel:{{comment.phone_no}}\" class=\"tel\">{{comment.phone_no}}</a><br>\n" +
    "					<a>{{comment.email}}</a>\n" +
    "				  </td>\n" +
    "				  <td class=\"item3\">{{comment.data.branch}}</td>\n" +
    "				  <td class=\"item4\">{{comment.data.segment}}</td>\n" +
    "				  <td class=\"item5\">\n" +
    "					<span class=\"ico\"></span>\n" +
    "					<div class=\"text\">\n" +
    "						{{comment.data.comment}}\n" +
    "					</div>\n" +
    "				  </td>\n" +
    "				  <td class=\"item6\">\n" +
    "					<div class=\"btn-group\" uib-dropdown dropdown-append-to-body ng-show = \"comment.show_dropdown\">\n" +
    "					  <button type=\"button\" class=\"btn btn-info\" ng-click=\"selectedValue('Process',comment)\">Process</button>\n" +
    "					  <button id=\"btn-append-to-body\" type=\"button\" class=\"btn btn-info\" uib-dropdown-toggle>\n" +
    "						<span class=\"caret\"></span>\n" +
    "						<span class=\"sr-only\">Split button!</span>\n" +
    "					  </button>\n" +
    "					  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"btn-append-to-body\">\n" +
    "						<li role=\"menuitem\">\n" +
    "							<a style = \"cursor:pointer;\" ng-click=\"selectedValue('Defer',comment)\">Defer</a>\n" +
    "						</li>\n" +
    "					  </ul>\n" +
    "					</div>\n" +
    "					<span ng-hide = \"comment.show_dropdown\">{{comment.action_string}}</span>\n" +
    "				   </td>\n" +
    "				</tr>\n" +
    "			  </tbody>\n" +
    "			</table>\n" +
    "			<span class=\"loader\"></span>\n" +
    "	  </div>\n" +
    "  	</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/positive-negative-feedback/positive-negative-feedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/positive-negative-feedback/positive-negative-feedback.tpl.html",
    "<!-- <div class=\"review-block\">\n" +
    "  <div class=\"heading-block\">\n" +
    "  	<div class = \"pull-right\">\n" +
    "		<a class = \"btn btn-default\" ng-click = \"open()\" uib-tooltip=\"Click to View All Feedback Details\">View All Feedback</a>\n" +
    "	  </div>\n" +
    "	  <h2>\n" +
    "	  	Positive Negative Feedback\n" +
    "	  	<span class=\"icon-help\" uib-popover=\"Represents the positive suggestions, and negative feedbacks given by the customers. Click on View All Feedback, for more details.\" popover-trigger=\"mouseenter\" popover-placement=\"top\"></span>\n" +
    "	  </h2>\n" +
    "  </div>\n" +
    "  <div class=\"holder\">\n" +
    "    <ul>\n" +
    "      <li ng-repeat = \"pos_feedback in pos_feedbacks\">\n" +
    "        <div class=\"inner-holder\">\n" +
    "            <div class=\"text\">\n" +
    "            	<p>{{pos_feedback.comment}}</p>\n" +
    "            </div>\n" +
    "            <span class=\"arrow\"></span>\n" +
    "        </div>\n" +
    "        <time>{{pos_feedback.created_at | date:\"dd-MM-yyyy',' h:mm a\"}}</time>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <ul class=\"add\">\n" +
    "      <li ng-repeat = \"neg_feedback in neg_feedbacks\">\n" +
    "        <div class=\"inner-holder\">\n" +
    "            <div class=\"text\">\n" +
    "            	<p>{{neg_feedback.comment}}</p>\n" +
    "            </div>\n" +
    "            <span class=\"arrow\"></span>\n" +
    "        </div>\n" +
    "        <time>{{neg_feedback.created_at | date:\"dd-MM-yyyy',' h:mm a\"}}</time>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div> -->\n" +
    "\n" +
    "\n" +
    "<div class=\"comment-block\">\n" +
    "  <a style = \"cursor:pointer;\" class=\"nav-opener\" mobile-nav>\n" +
    "    <i class=\"fa fa-comments-o\"></i>\n" +
    "    <span class=\"count\">2</span>\n" +
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
    "        <ul class=\"comments-list list-unstyled\">\n" +
    "          <li ng-repeat = \"comment in comments\" ng-class = \"{negative: comment.data.is_negative, positive: !comment.data.is_negative, processed: comment.action_string == 'Processed', deferred: comment.action_string == 'Deferred'}\">\n" +
    "              <p>{{comment.data.comment}}</p>\n" +
    "              <time datetime=\"2014-06-12 18:00\">Today 5:60 pm - 12.06.2014</time>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"btn-holder\">\n" +
    "        <a class=\"btn btn-info pull-right\" ng-click = \"open()\">View All</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/regional-analysis/regional-analysis.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/regional-analysis/regional-analysis.tpl.html",
    "<div class=\"ibox float-e-margins\">\n" +
    "    <div class=\"ibox-title\">\n" +
    "        <h5 ng-show = \"area_view\">{{title}}</h5>\n" +
    "        <h5 ng-show = \"area_view == false && regional_view == true\">{{selected_area.name}}'s Region Analysis</h5>\n" +
    "		<h5 ng-show = \"regional_view == false && city_view == true\">{{selected_region.name}}'s City Analysis</h5>\n" +
    "		<h5 ng-show = \"area_view == false && regional_view == false && city_view == false\">{{selected_city.name}}'s Branch Analysis</h5>\n" +
    "        <div class=\"ibox-tools\">\n" +
    "            <ul class=\"tab-links\">\n" +
    "                <li ng-class=\"{active: radioModel == 'Complaints'}\"><a ng-model=\"radioModel\" uib-btn-radio=\"'Complaints'\" ng-click = \"showChart(null, 'areas')\" uib-tooltip=\"Click to View Complaint Resolution Analysis\">Complaints</a></li>\n" +
    "                <li ng-class=\"{active: radioModel == 'Rating'}\"><a ng-model=\"radioModel\" uib-btn-radio=\"'Rating'\" ng-click = \"showChart(null, 'areas')\" uib-tooltip=\"Click to View Overall Feedback Analysis\">Rating</a></li>\n" +
    "                <li ng-class=\"{active: radioModel == 'QSC'}\"><a ng-model=\"radioModel\" uib-btn-radio=\"'QSC'\" ng-click = \"showChart(null, 'areas')\" uib-tooltip=\"Click to View Overall QSC Analysis\">QSC</a></li>\n" +
    "                <li>\n" +
    "                    <div class=\"calender-outer\">\n" +
    "					<span class = \"calendar-holder\" uib-tooltip=\"Click to Select Custom Date Range\">\n" +
    "					  <input date-range-picker id=\"daterange-map\" name=\"daterange-map\" class=\"date-picker\" type=\"text\" ng-model=\"date\" max=\"today\" options = \"datePickerOption\" readonly=\"true\"/>\n" +
    "					  <i class=\"glyphicon glyphicon-calendar\" map-range-click></i>\n" +
    "					</span>\n" +
    "				  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "     <div class = \"breadcrum\">\n" +
    "        <span ng-hide = \"area_view\">\n" +
    "         <a ng-click = \"backToAreas()\" style = \"cursor:pointer\">Area/</a>\n" +
    "       </span>\n" +
    "       <span ng-show = \"area_view == false && regional_view == false\">\n" +
    "         <a ng-click = \"backToRegions(selected_area)\" style = \"cursor:pointer\">{{selected_area.name}}/</a>\n" +
    "       </span>\n" +
    "       <span ng-show = \"area_view == false && regional_view == false && city_view == false\">\n" +
    "         <a ng-click = \"backToCities(selected_region)\" style = \"cursor:pointer;\">{{selected_region.name}}/</a>\n" +
    "       </span>\n" +
    "     </div>\n" +
    "\n" +
    "    <div class=\"ibox-content morris-content-outer\">\n" +
    "      <div class=\"morris-content-holder\" ng-repeat = \"area in donut_graph_data.objects track by $index\" ng-show = \"area_view == true\">\n" +
    "        <div class=\"morris-graph-holder\" same-region-height data-data=\"donut_graph_data.donutData[$index]\">\n" +
    "           <div class=\"morris-holder\">\n" +
    "               <div ng-show=\"area.show_chart\" morris-chart data-data=\"donut_graph_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_graph_data.donutOptions[$index]\" data-action=\"open(option,area,region,city,branch)\"></div>\n" +
    "           </div>\n" +
    "            <div ng-hide=\"area.show_chart\">No data available</div>\n" +
    "        </div>\n" +
    "        <strong class=\"title\"><a ng-click = \"showChart(area, 'regions')\" style = \"cursor:pointer;\">{{area.name}}</a></strong>\n" +
    "      </div>\n" +
    "       <div ng-show=\"show_string && area_view == true\">No area available</div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"morris-content-holder\" ng-repeat = \"region in donut_regions_data.objects track by $index\" ng-show = \"area_view == false && regional_view == true\">\n" +
    "        <div class=\"morris-graph-holder\" same-region-height data-data=\"donut_regions_data.donutData[$index]\">\n" +
    "           <div class=\"morris-holder\">\n" +
    "               <div ng-show=\"region.show_chart\" morris-chart data-data=\"donut_regions_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_regions_data.donutOptions[$index]\" data-action=\"open(option,selected_area,region,city,branch)\"></div>\n" +
    "           </div>\n" +
    "            <div ng-hide=\"region.show_chart\">No data available</div>\n" +
    "          </div>\n" +
    "          <strong class=\"title\"><a ng-click = \"showChart(region, 'cities')\" style = \"cursor:pointer;\">{{region.name}}</a></strong>\n" +
    "        </div>\n" +
    "        <div ng-show=\"show_string && area_view == false && regional_view == true\">No region available</div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"morris-content-holder\" ng-repeat = \"city in donut_cities_data.objects track by $index\" ng-show = \"area_view == false && regional_view == false && city_view == true\">\n" +
    "        <div class=\"morris-graph-holder\" same-city-height data-data = \"donut_cities_data.donutData[$index]\">\n" +
    "           <div class=\"morris-holder\">\n" +
    "               <div ng-show=\"city.show_chart\" morris-chart data-data=\"donut_cities_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_cities_data.donutOptions[$index]\" data-action=\"open(option,selected_area,selected_region,city,branch)\"></div>\n" +
    "           </div>\n" +
    "            <div ng-hide=\"city.show_chart\">No data available</div>\n" +
    "          </div>\n" +
    "          <strong class=\"title\"><a ng-click = \"showChart(city, 'branches')\" style = \"cursor:pointer;\">{{city.name}}</a></strong>\n" +
    "        </div>\n" +
    "        <div ng-show=\"show_string && area_view == false && regional_view == false && city_view == true\">No city available</div>\n" +
    "\n" +
    "\n" +
    "      <div class=\"morris-content-holder\" ng-repeat = \"branch in donut_branches_data.objects track by $index\" ng-show = \"area_view == false && regional_view == false && city_view == false\">\n" +
    "        <div class=\"morris-graph-holder\" same-branch-height  data-data = \"donut_branches_data.donutData[$index]\">\n" +
    "           <div class=\"morris-holder\">\n" +
    "               <div ng-show=\"branch.show_chart\" morris-chart data-data=\"donut_branches_data.donutData[$index]\" data-type=\"donut\" data-options=\"donut_branches_data.donutOptions[$index]\" data-action=\"open(option,selected_area,selected_region,selected_city,branch)\"></div>\n" +
    "           </div>\n" +
    "            <div ng-hide=\"branch.show_chart\">No data available</div>\n" +
    "          </div>\n" +
    "          <strong class=\"title\">{{branch.name}}</strong>\n" +
    "        </div>\n" +
    "        <div ng-show=\"show_string && area_view == false && regional_view == false && city_view == false\">No branch available</div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/regional-analysis/sqc-modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/regional-analysis/sqc-modal.tpl.html",
    "<div class=\"modal-body info-area\">\n" +
    "  <a ng-click = \"ok()\" class=\"pull-right close-btn-font\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n" +
    "  <h2>Regional Analysis</h2>\n" +
    "	<a style = \"cursor:pointer;\" class=\"btn-slider glyphicon glyphicon-menu-left\" ng-click=\"leftClickDisabled || previous(area,region,city,branch,sqc_data)\"></a>\n" +
    "	<a style = \"cursor:pointer;\" class=\"btn-slider glyphicon glyphicon-menu-right\" ng-click=\"rightClickDisabled || next(area,region,city,branch,sqc_data)\"></a>\n" +
    "\n" +
    "  <div class=\"graph-container\">\n" +
    "  	<div class=\"holder\">\n" +
    "  		<div class=\"graph-holder\">\n" +
    "		<div morris-chart-modal data-data=\"donut_subgraph_data.donutData\" data-type=\"donut\" data-options=\"donut_subgraph_data.donutOptions\"></div>\n" +
    "	  </div>\n" +
    "	  <div style = \"text-align: center;\" ng-show=\"show_div\">No data available</div>\n" +
    "  	</div>\n" +
    "  </div>\n" +
    "  <h1 style = \"text-align: center;\">{{ sqc.name }}</h1>\n" +
    "</div>");
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
    "<div class=\"row inner-row add\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <div class=\"ibox float-e-margins float-e-margin-none\">\n" +
    "      <div class=\"title-outer\">\n" +
    "        <div class=\"ibox-title\">\n" +
    "          <h5>Top Concerns</h5>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"content-holder\">\n" +
    "        <div class=\"ibox-content\">\n" +
    "          <div class=\"graph-block\">\n" +
    "            <canvas id=\"doughnut\" class=\"chart chart-doughnut\" chart-data=\"data\" chart-labels=\"labels\"></canvas> \n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
