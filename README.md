React-Redux Starter Kit
========================

By Mark Qian 3/2017 (markqian@hotmail.com)

<b>A. The demo page:</b> 

http://ReactReduxStarterKit.coolshare.surge.sh

<b>B. Description:</b>

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
   This kit uses a pure Redux pattern in the area communication and view update so no "setState" is used except local    
   state like input content state impact button enable state. 


<b>C. Instructions for installation</b>

1. download the zip file of this package and unzip it to, say c:\ReactReduxStarterKit<br/>
   or simply run the following<br/>
   
      cd c:\
      git clone https://github.com/coolshare/ReactReduxStarterKit.git ReactReduxStarterKit<br/>
      
2. install environment

      cd c:\ReactReduxStarterKit<br/>
      npm install
      
3. run the application

      npm start
      
4. build a production version

      webpack -p
      
      
   
Go Mark's home page http://MarkQian.com to see more.