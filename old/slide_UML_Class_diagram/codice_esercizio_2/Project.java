import java.util.ArrayList;
import java.util.List;

public class Project {
    private String projectName;
    private double budget;
    private List<Employee> team;
    
    public Project(String projectName, double budget) {
        this.projectName = projectName;
        this.budget = budget;
        this.team = new ArrayList<>();
    }
    
    public void addTeamMember(Employee e) {
        team.add(e);
    }
    
    public List<Employee> getTeam() {
        return team;
    }
    
    public String getProjectName() {
        return projectName;
    }
    
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
    
    public double getBudget() {
        return budget;
    }
    
    public void setBudget(double budget) {
        this.budget = budget;
    }
}
