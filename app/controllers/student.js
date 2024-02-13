import Controller from '@ember/controller';

export default Controller.extend({
    isSidebarOpen : false,

    selectedStudent : null,

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