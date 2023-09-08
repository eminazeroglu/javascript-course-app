class Course {
    constructor(name, teacher, image) {
        this.id = Math.floor(Math.random() * 10000)
        this.name = name;
        this.teacher = teacher;
        this.image = image;
    }
}