class Storage {
    /**
     * Storage-də kursların olub olmamasının
     * yoxlanılması
     */
    static getCourses() {
        let courses = [];
        if (localStorage.getItem("courses") !== null) {
            courses = JSON.parse(localStorage.getItem("courses"));
        }
        return courses;
    }
    /**
     * Var olan kursların UI tərəfdə listələnməsi
     */
    static displayCourses() {
        const courses = Storage.getCourses();
        courses.forEach((course) => {
            const ui = new UI();
            ui.addCourseToList(course);
        });
    }
    /**
     * Yeni kursun Storage-ə
     * əlavə edilməsi
     */
    static addCourse(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem("courses", JSON.stringify(courses));
    }
    /**
     * Kursun Storage-dən silinməsi
     */
    static deleteCourse(element) {
        const id = element.getAttribute("data-id");
        const courses = Storage.getCourses();
        const filters = courses.filter((i) => i.id !== parseInt(id));
        localStorage.setItem("courses", JSON.stringify(filters));
    }
}
