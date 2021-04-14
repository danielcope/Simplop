DROP TABLE parent
DROP TABLE event
DROP TABLE parent
DROP TABLE parent

CREATE TABLE parent (
  parent_id SERIAL PRIMARY KEY,
  username VARCHAR(255) unique,
  hash text
);

CREATE TABLE kid (
  kid_id SERIAL PRIMARY KEY,
  name varchar(255),
  parent_id int references parent (parent_id)
);

CREATE TABLE event (
  event_id SERIAL PRIMARY KEY,
  kid_id int references kid (kid_id),
  type boolean,
  time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE notification (
  notification_id SERIAL PRIMARY KEY,
  kid_id INT REFERENCES kid (kid_id),
  notification_hour int,
  notification_min int
);