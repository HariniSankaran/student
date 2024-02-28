import Controller from '@ember/controller';
import { task } from 'ember-concurrency';


export default Controller.extend({
    isSidebarOpen : false,

    selectedStudent : null,

    fetchCountries: task(function* () {
        console.log(this.store.getJSON('/student'))
        return yield this.store.getJSON('/student');
    }),

    actions: {

        openSidebar(student) {
            this.set('isSidebarOpen', true);
            this.set('selectedStudent', student);
            console.log("adasd",  this.selectedStudent);
        },

        closeSidebar() {
            this.toggleProperty('isSidebarOpen');
        },

        async deleteStudent(){

            console.log(this.isSidebar);

            window.alert("Are you sure to delete the student detail");

            const response = await fetch(`/api/student/${this.selectedStudent.id}`, {
                method: 'DELETE'
            });

            this.toggleProperty('isSidebarOpen');
            this.send('refreshmodel');

            return response;
        },

        
    },
});