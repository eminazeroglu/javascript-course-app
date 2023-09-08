/**
 * Yeni kurs əlavə etmək üçün
 * yaradılmış form event-ı
 */
document.getElementById("course-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const teacher = e.target.elements.teacher.value;
    const image = e.target.elements.image.value;
    /**
     * Kurs class-ın yaradılması
     */
    const course = new Course(name, teacher, image);
    /**
     * UI class-ın yaradılması
     */
    const ui = new UI();
    /**
     * Form içərsindəki inputların
     * yoxlanılması
     */
    if (name.trim() && teacher.trim() && image.trim()) {
        /**
         * UI class-inda yeni kursun
         * yaradılması
         */
        ui.addCourseToList(course);
        /**
         * Yeni kursun Storage class-a göndərilməsi
         */
        Storage.addCourse(course);
        /**
         * UI tərəfdə formun təmizlənməsi
         */
        ui.clearForm(e.target.elements);
        /**
         * UI tərəfdə bildirişin göstərilməsi
         */
        ui.alert("success", "Yeni kurs əlavə edildi.");
    } 
    else {
        /**
         * UI tərəfdə bildirişin göstərilməsi
         */
        ui.alert("warning", "Zəhmət olmasa formu doldurun.");
    }
});

/**
 * Kurs elementinə klik event-ın yazılması
 */
document.getElementById("course-list").addEventListener("click", function (e) {
    const ui = new UI();
    /**
     * Klik olunan event-ın delete buttonu
     * olub olmamasının yoxlanılması
     */
    if (e.target.classList.contains("delete")) {
        /**
         * UI tərəfdən kursun silinməsi
         */
        ui.deleteList(e.target);
        /**
         * Storage tərəfdən kursun silinməsi
         */
        Storage.deleteCourse(e.target);
        /**
         * UI tərəfdə bildirişin göstərilməsi
         */
        ui.alert("danger", "Kurs silindi.");
    }
});

/**
 * Səhifə yükləndiyində
 * kursun listələnməsi
 */
document.addEventListener("DOMContentLoaded", Storage.displayCourses());
