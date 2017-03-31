(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/about/About.html',
    '<div class="arnd-about animated slideInUp"><div class="section" style="padding-top: 25px"><div class="container"><div class="row arnd-row-text"><div class="arnd-profile"><img class="img-responsive" ng-mouseover="aboutCtrl.profFn = \'profilecw\'" ng-mouseleave="aboutCtrl.profFn = \'profile\'" ng-src="ico/{{aboutCtrl.profFn}}.png"></div></div><div class="row arnd-row-text"><div class="arnd-prof-name" style="border-bottom: 1px solid"><h2 class="text-center" style="margin-bottom: 15px">Jose Jaime Adonis</h2></div></div><div class="row arnd-row-text"><div class="arnd-prof-name"><h3 class="arnd-prof-subname">Part-time developer, full-time lover</h3></div></div></div></div><div class="section sec-odd"><div class="container"><div class="row"><div class="arnd-sect-icon"><i class="fa fa-user icon-label" aria-hidden="true"></i></div><div class="arnd-sect-content"><div class="arnd-sect-title"><h3 class="arnd-sect-title-val">Hello, my friend</h3></div><div class="arnd-sect-content"><p>I\'m JJ Adonis, a front end-developer born and raised in <a href="https://goo.gl/0xLs2Y" class="arnd-sect-hltd">Manila, Philippines.</a></p><p>Fluent in JavaScript and currently working on improving my HTML and CSS skills.</p><p>I just started learning web development and there still a lot of catching up to do.</p></div></div></div><div class="row arnd-sect-content-right"><div class="arnd-sect-icon visible-xs"><i class="fa fa-briefcase icon-label" aria-hidden="true"></i></div><div class="arnd-sect-content"><div class="arnd-sect-title"><h3 class="arnd-sect-title-val">Here\'s what I\'ve done so far</h3></div><div class="arnd-sect-content"><div ng-repeat="accomp in aboutCtrl.accomList"><accomp-tile accomp="accomp"></accomp-tile></div></div></div><div class="arnd-sect-icon arnd-sect-icon-right hidden-xs"><i class="fa fa-briefcase icon-label" aria-hidden="true"></i></div></div><div class="clearfix"></div><div class="row" style="padding-top: 80px"><div class="col-md-2 col-xs-12 no-padd"><div class="arnd-sect-icon"><i class="fa fa-check-square-o icon-label" aria-hidden="true" style="padding-right: 0px"></i></div></div><div class="col-md-10 no-padd"><div class="arnd-sect-title arnd-sect-title-rate"><h3 class="arnd-sect-title-val">Technical Skills</h3></div><div class="arnd-sect-content"><rating-tile ng-repeat="rating in aboutCtrl.ratings" rating="rating"></rating-tile></div></div></div></div></div></div>');
}]);
})();
