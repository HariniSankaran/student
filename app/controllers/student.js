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
    
    },
});
