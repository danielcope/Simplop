SELECT * FROM notification
JOIN parent ON parent.parent_id = notification.parent_id
WHERE parent.parent_id = $1