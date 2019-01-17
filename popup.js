// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var timeleft = 0;
var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 0 + ++timeleft;
  if(timeleft > 10)
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    chrome.tabs.remove(tabs[0].id);
  });
},1000);

