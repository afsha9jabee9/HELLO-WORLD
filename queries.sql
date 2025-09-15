 // Retrieve complete details of every player
SELECT * FROM players;

// Display only the names and roles of bowlers in the team
SELECT name, role 
FROM players 
WHERE role = 'Bowler';

// Count how many team members are older than 30 years
SELECT COUNT(*) AS total_senior_players 
FROM players 
WHERE age > 30;

// List the top 3 players having the highest run totals
SELECT name, runs 
FROM players 
ORDER BY runs DESC 
LIMIT 3;

// Calculate the average number of wickets taken by all bowlers
SELECT AVG(wickets) AS average_wickets 
FROM players 
WHERE role = 'Bowler';
