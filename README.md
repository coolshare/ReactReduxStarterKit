Demo of Redux
===========================

By Mark Qian 3/2017 (markqian@hotmail.com)

The demo page: http://ReactReduxStarterKit.coolshare.surge.sh

Description:

This starter kit is designed to get you up and running as a comprehensive web application.

 - A general web UI layout: 
 
   1). top links to divide business concept into multiple area ("Main" and "Second")<br />
   2). tabs to further divide an area into sub areas<br />
   3). accordions at the right side (in TabA) to provide management UI for different features<br />
   4). master/detail layout to provide an editing environment to handle collection data (Right pane in TabA)<br />
   5). other type of UI like map<br />  
 
 - Access store globally. The store static field of global class holds the reference of Redux store so that
   we can access the store and related method such as dispatch any where instead of pass the store down in the
   component hierachy. See code details at /services/CommunicationService.js
   
 - Basic function/feature of Redux: connect of React-redux, middleware, dispatching actions, subscription and so on. 


   
Go Mark's home page http://MarkQian.com to see more.