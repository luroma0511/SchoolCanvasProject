class Account {
    bio = class Bio {
        name = "";
        bioDescription = "";
        picture = undefined;
    }

    constructor(accountID, email, phoneNumber, password) {
        this.accountID = accountID;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.messages = [];
    }
}

class Teacher {
    classes = [];
}

class Student {
    gpa = 0;
    classes = [];
}

class Class {
    constructor(name, credits, teacher) {
        this.classID = "";
        this.name = name;
        this.credits = credits;
        this.students = [];
        this.teacher = teacher;
    }
}