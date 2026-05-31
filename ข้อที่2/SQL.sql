SELECT
    emp_id,
    clock_in
FROM attendance
WHERE clock_in BETWEEN
      '2026-03-18 23:00:00'
  AND '2026-03-19 08:00:00'
AND clock_in > '2026-03-19 00:05:00';
