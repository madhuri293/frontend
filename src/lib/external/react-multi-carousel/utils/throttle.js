"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var throttle=function(func,limit,setIsInThrottle){var inThrottle;return function(){var args=arguments;inThrottle||(func.apply(this,args),inThrottle=!0,"function"==typeof setIsInThrottle&&setIsInThrottle(!0),setTimeout(function(){inThrottle=!1,"function"==typeof setIsInThrottle&&setIsInThrottle(!1)},limit))}};exports.default=throttle;