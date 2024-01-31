// Base class for users
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Function to log in
  login() {
    console.log(`${this.name} logged in.`);
  }

  // Function to log out
  logout() {
    console.log(`${this.name} logged out.`);
  }
}

// Derived class for interns
class Intern extends User {
  constructor(name, email, password)
     {
    super(name, email, password, 'Intern');
    this.profile = {};
    this.course = []; // Initialize course as an empty array
    this.learningCommunities = [];
  }
}
// Derived class for administrators
class Administrator extends User {
  constructor(admin_Id, name, email) {
    super(admin_Id, name, email, 'Administrator');
  }

}

// Derived class for tutors
class Tutor extends User {
  constructor(tutor_Id, name, email) {
    super(tutor_Id, name, email, 'Tutor');
    this.lectureContents = [];
    this.resources = [];
  }
} 