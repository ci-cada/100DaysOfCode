public class IfElseDemo {/**
 * if (expression){
 * statement(s)
 * }
 * 
 * if (expression){
 * statement(s)
 * }else {
 * statement(s)
 * }
 * 
 * if (statement){
 * statement(s)
 * }else if(statement){
 * statement(s)
 * }else{
 * statement(s)
 * }
 */
        public static void main(String[] args) {
            int testscore = 76;
            char grade;
            if (testscore >= 90) {
                grade = 'A';
            } else if (testscore >= 80){ 
                grade = 'B';
            } else if (testscore >= 70){ 
                grade = 'C';
            }else if (testscore >= 60){ 
                grade = 'D';
            } else {
                grade = 'F';
            }
            System.out.println("Grade = " + grade);
        }
}