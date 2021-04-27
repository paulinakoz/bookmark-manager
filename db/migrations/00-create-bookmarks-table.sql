CREATE TABLE bookmarks(
  id SERIAL PRIMARY KEY,
  url VARCHAR(200),
  comment VARCHAR(200),
  tags VARCHAR(200)
);
