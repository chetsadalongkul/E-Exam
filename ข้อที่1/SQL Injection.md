# จุดผิดพลาดที่ 2 : SQL Injection

ปัญหา
โค้ดเดิมนำค่าจากตัวแปร empId และ net มาต่อเข้ากับ SQL Statement โดยตรง
await db.query(`
UPDATE salaries
SET balance = balance + ${net}
WHERE emp_id = ${empId}
`);
หากผู้ไม่หวังดีส่งข้อมูลที่เป็น SQL Command เข้ามา อาจทำให้เกิดการแก้ไขข้อมูลในฐานข้อมูลโดยไม่ได้รับอนุญาต

วิธีแก้
ใช้ Parameterized Query และ Placeholder (?) แทนการต่อ String ตรง ๆ
