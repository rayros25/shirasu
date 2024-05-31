/* 
At certain intervals, we will do the following:

1. Retrieve the list of manga IDs and their latest chapters from the database
2. For each manga ID, we will make an API request to get the latest chapter
3. Compare the response's latest chapter with our database's latest chapter
4. If there is a difference(i.e. new chapter), get the list of users who are tracking that manga ID
5. For each tracking user, get their associated email and send them an email

*/