class UI {
    /**
     * Yeni kursun UI tərəfə əlavə
     * edilməsi
     */
    addCourseToList(course) {
        const list = document.getElementById("course-list");
        let html = `
            <tr>
                <td class="td-image">
                    <img class="img-cover" src="/assets/img/${course.image}"/>
                </td>
                <td>${course.name}</td>
                <td>${course.teacher}</td>
                <td style="width: 100px">
                    <button class="btn btn-red delete" data-id="${course.id}">
                        Sil
                    </button>
                </td>
            </tr>
        `;
        list.innerHTML += html;
    }
    /**
     * UI tərəfdə form-un təmizlənməsi
     */
    clearForm(formElement) {
        formElement.name.value = "";
        formElement.teacher.value = "";
        formElement.image.value = "";
    }
    /**
     * UI tərəfdə kursun silinməsi
     */
    deleteList(element) {
        element.closest("tr").remove();
    }
    /**
     * UI tərəfdə bildirişin göstərilməsi
     */
    alert(type, message) {
        let alert = `
            <div class="alert alert-${type}">${message}</div>
        `;

        document.querySelector(".head").insertAdjacentHTML("afterend", alert);

        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);
    }
}
