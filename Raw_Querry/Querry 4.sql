WITH EmployeeAges AS (
    SELECT 
        e.id AS employee_id,
        e.nik,
        e.name,
        e.is_active AS status,
        ep.gender,
        EXTRACT(YEAR FROM AGE(ep.date_of_birth)) || ' years old' AS age,
        ed.name AS schoolname,
        ed.level AS level
    FROM 
        "Employees" e
    JOIN 
        "EmployeeProfiles" ep ON e.id = ep.employee_id
    JOIN 
        "Educations" ed ON e.id = ed.employee_id
),
FamilyCounts AS (
    SELECT 
        ef.employee_id,
        COALESCE(num_wives::text, '0') || ' istri & ' || 
        COALESCE(num_children::text, '0') || ' anak' AS "family data"
    FROM (
        SELECT 
            ef.employee_id,
            COUNT(CASE WHEN ef.relation_status = 'Istri' THEN 1 END) AS num_wives,
            COUNT(CASE WHEN ef.relation_status = 'Anak' THEN 1 END) AS num_children
        FROM 
            "EmployeeFamilies" ef
        GROUP BY 
            ef.employee_id
    ) ef
)
SELECT 
    ea.employee_id,
    ea.nik,
    ea.name,
    ea.status,
    ea.gender,
    ea.age,
    ea.schoolname,
    ea.level,
    COALESCE(fc."family data", '-') AS "family data"
FROM 
    EmployeeAges ea
LEFT JOIN 
    FamilyCounts fc ON ea.employee_id = fc.employee_id;
