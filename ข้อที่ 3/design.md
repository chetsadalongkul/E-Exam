# REST API
POST /api/salaries/adjust
ใช้สำหรับแก้ไขเงินเดือนย้อนหลัง

# Request
{
  "empId": 1001,
  "newSalary": 35000,
  "reason": "Salary Adjustment"
}

# Response
{
  "status": "success",
  "message": "Salary updated"
}
