/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var scales = require('./scales');
var isValidScaleArray = require('./is_valid_scale_array');


module.exports = function isValidScale(scl) {
    if(scales[scl] !== undefined) return true;
    else return isValidScaleArray(scl);
};
