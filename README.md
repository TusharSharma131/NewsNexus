## User Credentials

#### Email  : tushar@example.com 
#### Password :  Tushar@123

Use these credentials to log in to the website.

# Important Notes
### Note 1: API Access Limitation
I am currently using the Developer Plan for the News API, which only permits API calls from localhost (local development environment).

- #### CORS Enabled for Localhost Only: 
Due to this restriction, you will not be able to make API requests from deployed (live) applications.

- #### Apology: 
I sincerely apologize for any inconvenience this may cause when accessing the API from the live website.

- #### Current Solution for the Issue:
The project regularly checks the News API and saves the results in a JSON file. Instead of directly using the News API every time, the latest news can now be read from the JSON file which I used in project. This helps avoid making too many API requests and allows anyone to easily access the news data.

## Pros

- No API KEY needed
- No limit on number of requests

## Cons

- Difficulty in query feature for news (Can be fixed by cloning this repo and customizing according to your needs)
- Slightly delayed result (Can be reduced by reducing the query time interval to newsapi)

### Note 2: Login Wait Time
When you enter the login credentials, the login process may take a few seconds. Please be patient and allow the time for successful authentication.