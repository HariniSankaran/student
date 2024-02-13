import Component from '@ember/component';

export default Component.extend({


    actions:{
        async deleteStudent(){

            console.log(this.isSidebar);


            window.alert("Are you sure to delete the student detail");

            const response = await fetch(`/api/student/${this.selectedStudent.id}`, {
                method: 'DELETE'
            });

            this.toggleProperty('isSidebar');

            return response;

        },

        toggleSidebar() {
            this.toggleProperty('isSidebar');
            console.log(this.isSidebar);
        },
 

    }
});
