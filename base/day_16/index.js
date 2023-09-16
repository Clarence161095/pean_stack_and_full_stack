



const query = `select e.name, e.email, count(p.project_id) as total_projects
            from employees e
            join employee_projects ep on e.employee_id = ep.employee_id
            join projects p on ep.project_id = p.project_id
            group by e.name, e.email
            having count(p.project_id) > 5
            order by total_projects desc`