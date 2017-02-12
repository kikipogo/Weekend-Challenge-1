Weekend Challenge 1
For your weekend challenge, you will need to create an application that records employee data, including their salary. We also want to add the salaries up so we know how much we’re spending each month. Start with the repo provided.

Setup
You may begin from the code linked above. This contains some input fields and the code to grab the values from them. You'll have to change them and add some new ones in order to match the needs of the application.

Base Functionality
The application should first have an input form that collects:

The Employee's First and Last name
The Employee's ID Number
The Employee's Job Title
The Employee's Salary (Yearly)
The form should have a button that:

Appends this information to the DOM so the user of the application can see the information they just entered.

After appending to the DOM, your logic should calculate all of the employee salaries and report back what the monthly cost of salaries is.

Hard Mode
Create a delete button that removes an employee from the DOM. Note that in hard mode, it need not remove that Employee's salary from the reported total.
After a new employee is added, clear out the input boxes.
Pro Mode
Once the employee is deleted, also update the total salaries to discount the removed employee's salary. This will require that the logic knows which element was removed. You will need to stretch yourself for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note, you will need to do something both when the employee is added and when they are deleted to make your application 'smart'.

Good Luck, have a great weekend!
