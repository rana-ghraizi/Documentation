1. select Name from students
2. select Name from students where Age > "30";
3. select Name from students where Gender = "F" AND Age = "30";
4. select Points from students WHERE name = "Alex";
5. INSERT INTO students(ID, Name, Age, Gender, Points) VALUES ("7", "Rana", "18", "F", "460");
6. UPDATE students SET Points = "350" WHERE ID="2";
7. UPDATE students SET Points = "150" WHERE ID="1";
8.
9.
10. INSERT INTO graduates (ID, Name, Age, Gender, Points) VALUES ("4", "Layal", "18", "F", "350");
11. UPDATE graduates SET Graduation = "08/09/2018" WHERE ID="4";
12. delete from students where ID="4";
13. 
14. SELECT employees.Name, employees.Company, companies.Date
    from employees
    INNER JOIN companies
    on employees.Company = companies.Name;
15. SELECT employees.Name
    from employees
    INNER JOIN companies
    on employees.Company = companies.Name
    WHERE companies.Date < 2000;
16. SELECT employees.Company
    from employees
    INNER JOIN companies
    on employees.Company = companies.Name
    WHERE employees.Role = "Graphic Designer";
17.
18. SELECT name, max(Points) AS HighPoints
    FROM students 
    GROUP BY name
    ORDER BY HighPoints DESC
    LIMIT 3
19. SELECT AVG(Points) FROM students;
20. SELECT name FROM students WHERE Points = "500";
21. SELECT name FROM students WHERE name LIKE '%s%'
22. SELECT * FROM students ORDER BY Points DESC;
