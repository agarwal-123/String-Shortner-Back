# events-schedular-app

### Read the documentation at:

https://documenter.getpostman.com/view/11583304/SztEaSYJ
</br>
(All api's can be tested by clicking on **Run on Postman** button.)

#### Deployed on Heroku: 
</br>
https://events-handler-app.herokuapp.com/

### Authourisation Used:

A authourisation of Authorisation: Bearer '{token here}'  is used to restrict unauthorised access.The token is to be sent from users side in headers.
The token is given to user when loggen in and on registration time.

### Database Models:
users,tasks</br>
users table contains userID,name,email,password,token alloted</br>
tasks table contains description ,userID(Foriegn key),compelete status. 
