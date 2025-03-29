public class Main {
    public static void main(String[] args) {
        // Creazione di un dipendente
        Employee emp1 = new Employee("Mario", "Rossi", "mario.rossi@example.com");
        
        // Creazione di un manager (che estende Employee)
        Manager mgr1 = new Manager("Luigi", "Verdi", "luigi.verdi@example.com", "IT");
        
        // Creazione di un reparto e aggiunta dei dipendenti
        Department dept = new Department("IT");
        dept.addEmployee(emp1);
        dept.addEmployee(mgr1);
        
        // Creazione di un progetto e assegnazione del team
        Project proj = new Project("Sistema Gestionale", 100000);
        proj.addTeamMember(emp1);
        proj.addTeamMember(mgr1);
        
        // Utilizzo dei metodi per stampare informazioni
        System.out.println("Dipendenti nel reparto " + dept.getName() + ":");
        for(Employee e : dept.getEmployees()) {
            System.out.println(e.getFullName());
        }
        
        System.out.println("Team del progetto " + proj.getProjectName() + ":");
        for(Employee e : proj.getTeam()) {
            System.out.println(e.getFullName());
        }
    }
}
