DROP TABLE parent;
DROP TABLE event;
DROP TABLE kid;
DROP TABLE notification;

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
  type varchar (20),
  hour int,
  min int,
  am_pm varchar(20),
  month int,
  day int
);

CREATE TABLE notification (
  notification_id SERIAL PRIMARY KEY,
  parent_id INT REFERENCES kid (kid_id),
  notification_hour int,
  notification_min int,
  ap_pm varchar(20)
);