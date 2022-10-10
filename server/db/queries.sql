-- --------------------------------------------
-- Sample queries to the db
--
--
--
SELECT * FROM event_users;
--
SELECT * FROM users;
--
SELECT * FROM events;
--
--
--
-- --------------------------------------------
--
--
--
SELECT event_id, COUNT(user_id)
FROM event_users
GROUP BY event_id;
--
--
--
-- --------------------------------------------
--
-- Find an event with provided `event_name`
--
SELECT JSON_OBJECT(
'event_id',
events.id,
'event_name',
events.event_name,
'event_date',
events.event_date,
'event_description',
events.event_description,
'time_start',
events.time_start,
'time_end',
events.time_end,
'event_users',
JSON_ARRAYAGG(
  JSON_OBJECT(
    'user_id',
    users.id,
    'username',
    users.name
  )
)
) json
FROM event_users
  LEFT JOIN events ON event_users.event_id = events.id
  LEFT JOIN users ON event_users.user_id = users.id
GROUP BY events.id,
  events.event_name
HAVING events.event_name LIKE '%optim%';
--
--
--
-- --------------------------------------------
--
-- Find all events
--
SELECT JSON_OBJECT(
'event_id',
events.id,
'event_name',
events.event_name,
'event_date',
events.event_date,
'event_description',
events.event_description,
'time_start',
events.time_start,
'time_end',
events.time_end,
'users',
JSON_ARRAYAGG(
  JSON_OBJECT(
    'user_id',
    users.id,
    'username',
    users.name
  )
)
) json
FROM event_users
  LEFT JOIN events ON event_users.event_id = events.id
  LEFT JOIN users ON event_users.user_id = users.id
GROUP BY events.id,
  events.event_name
ORDER BY events.id