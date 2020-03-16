'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'TestNgSuiteBuilderFromJenkinsFailedTestsPage'});


$(function(){

  // listen when we are in TC and enable the extension icon
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
      if (request.action == 'show'){
          chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
              chrome.pageAction.show(tabs[0].id);
          });
      }
  });
});
