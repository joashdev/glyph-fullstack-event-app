-- --------------------------------------------
--
-- Create DATABASE instance
--
CREATE DATABASE IF NOT EXISTS glyph;
-- --------------------------------------------
--
-- Table structure for `events`
--
CREATE TABLE IF NOT EXISTS events (
id BIGINT NOT NULL AUTO_INCREMENT,
event_name VARCHAR(255) NOT NULL,
event_date DATE NOT NULL,
event_description VARCHAR(255) NOT NULL,
time_start TIME NOT NULL,
time_end TIME NOT NULL,
PRIMARY KEY (id)
);
-- --------------------------------------------
--
-- Table structure for `users`
--
CREATE TABLE IF NOT EXISTS users (
id BIGINT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);
-- --------------------------------------------
--
-- Table structure for `event_users`
--
CREATE TABLE IF NOT EXISTS event_users (
event_id BIGINT NOT NULL,
user_id BIGINT NOT NULL,
FOREIGN KEY (event_id) REFERENCES events(id),
FOREIGN KEY (user_id) REFERENCES users(id)
);
--
--
--
-- --------------------------------------------
--
-- dummy data to `users` table
--
INSERT INTO 
users (name)
VALUES ('Tony Larson'),
  ('Marc Schmidt'),
  ('Isaiah Vasquez'),
  ('Rick Parker');
-- --------------------------------------------
--
-- dummy data to `events` table
--
INSERT INTO 
events (
  event_name,
  event_date,
  time_start,
  time_end,
  event_description
)
VALUES (
    'Inverse full-range moderator',
    '2022-10-20',
    '13:26:49',
    '16:23:54',
    'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.'
  ),
  (
    'Front-line empowering knowledge user',
    '2022-10-21',
    '10:31:31',
    '17:49:20',
    'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.'
  ),
  (
    'Fundamental clear-thinking matrices',
    '2022-10-23',
    '08:20:03',
    '15:39:03',
    'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.'
  ),
  (
    'Reduced radical leverage',
    '2022-10-12',
    '14:33:21',
    '16:24:32',
    'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.'
  ),
  (
    'Optimized fresh-thinking collaboration',
    '2022-10-28',
    '10:42:58',
    '16:55:43',
    'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.'
  );
-- -- --
--
--
INSERT INTO event_users (event_id, user_id)
VALUES (1, 1);
INSERT INTO event_users (event_id, user_id)
VALUES (1, 2);
INSERT INTO event_users (event_id, user_id)
VALUES (2, 2);
INSERT INTO event_users (event_id, user_id)
VALUES (2, 3);
INSERT INTO event_users (event_id, user_id)
VALUES (2, 4);
INSERT INTO event_users (event_id, user_id)
VALUES (3, 1);
INSERT INTO event_users (event_id, user_id)
VALUES (4, 4);
INSERT INTO event_users (event_id, user_id)
VALUES (4, 3);
INSERT INTO event_users (event_id, user_id)
VALUES (5, 3);