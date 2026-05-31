async function processPayroll(empId, baseSalary, otHours) {

    const conn = await db.getConnection();

    try {

        await conn.beginTransaction();

        const salarySatang = Math.round(baseSalary * 100);

        const sso = Math.round(salarySatang * 0.05);

        const otRate = Math.round(
            ((salarySatang / 30 / 8) * 1.5)
        );

        const gross = salarySatang + (otHours * otRate);

        const net = gross - sso;

        await conn.query(
            'SELECT balance FROM salaries WHERE emp_id = ? FOR UPDATE',
            [empId]
        );

        await conn.query(
            `UPDATE salaries
             SET balance = balance + ?
             WHERE emp_id = ?`,
            [net, empId]
        );

        await conn.commit();

        return net / 100;

    } catch (err) {

        await conn.rollback();
        throw err;

    } finally {

        conn.release();

    }
}
