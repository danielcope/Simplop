SELECT * FROM kid
JOIN event ON kid.kid_id = event.kid_id
WHERE kid.kid_id = $1
ORDER BY event_id DESC