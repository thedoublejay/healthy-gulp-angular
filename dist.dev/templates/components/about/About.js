(function(module) {
try {
  module = angular.module('airnodaAppComp');
} catch (e) {
  module = angular.module('airnodaAppComp', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('components/about/About.html',
    '<div class="arnd-about animated slideInUp"><div class="section" style="padding-top: 25px"><div class="container"><div class="row arnd-row-text"><div class="arnd-profile"><img class="img-responsive" alt="profile" ng-src="ico/profile.png"></div></div><div class="row arnd-row-text"><div class="arnd-prof-name" style="border-bottom: 1px solid"><h2 class="text-center" style="margin-bottom: 15px">Jose Jaime K. Adonis</h2></div></div><div class="row arnd-row-text"><div class="arnd-prof-name"><h3 class="arnd-prof-subname">Part-time developer, full-time lover</h3></div></div></div></div><div class="section sec-odd"><div class="container"><div class="row"><div class="arnd-content-title col-md-4"><h3>Introduction</h3></div><div class="arnd-content col-md-8"><p>Baby, you my everything, you all I ever wanted We could do it real big, bigger than you ever done it You be up on everything, other hoes ain\'t never on it I want this forever, I swear, I can spend whatever on it \'Cause she hold me down every time I hit her up When I get right, I promise that we gon\' live it up.</p><p>Know you got a roommate, call me when there\'s no one there Put the key under the mat and you know I be over there (Yup) I be over there, shawty, I be over there I be hittin\' all the spots that you ain\'t even know was there And you don\'t even have to ask twice You could have my heart or we could share it like the last slice Always felt like you was so accustomed to the fast life</p></div></div></div></div></div>');
}]);
})();
