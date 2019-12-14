Mentor On Demand

Instructions to Run the application:

1. Run mentor.sql file to create database and tables.

2. Run the microservices in the following order:
                a. eureka-discovery-service
                b. user 
                c. auth-servic
                d. search-service
                e. training-service
                f. zuul-gateway-service

3. Run angular webapp Mentor-on-demand using ng serve.Please ensure it runs on port 4200,as the same is mentioned
   in WebConfig.java.

4. Browse for "http://localhost:4200/" , which will open the landing page for the Application.

5. Sign Up is availble for anonymous users.Sign up as mentor or user (select from user type dropdown).

6. Login Details for existing users created from mentor.sql:
                a. User Login: username- user@gmail.com, password: pwd
                b. Mentor Login: username- mentor@gmail.com, password: pwd

7. Screenshots are available in screenshots folder:
	a. Karma Testing
	b. Jmeter Testing
	c. Junit Testing
	d. Postman Screenshots for get methods 
