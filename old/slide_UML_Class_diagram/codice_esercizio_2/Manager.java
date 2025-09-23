public class Manager extends Employee {
    private String department;
    
    public Manager(String firstName, String lastName, String email, String department) {
        super(firstName, lastName, email);
        this.department = department;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public void setDepartment(String department) {
        this.department = department;
    }
}
