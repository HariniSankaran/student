import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({

    store : service(),

    actions: {
        async postStudent(){

            // let requestBody = {
            //         image: document.getElementById('image').value,
            //         year: document.getElementById('year').value,
            //         name: document.getElementById('name').value,
            //         domain: document.getElementById('domain').value
            // };

            // let studentModel = this.store.createRecord('student', JSON.stringify(requestBody));
            // this.set('contactModel',studentModel);

            // console.log(studentModel.saveRecord());

            // return studentModel.saveRecord();
            

            let requestBody = {
                students: {
                    image: document.getElementById('image').value,
                    year: document.getElementById('year').value,
                    name: document.getElementById('name').value,
                    domain: document.getElementById('domain').value
                }
            };

            window.alert("Do you wish to add the student detail");

            let response = await fetch('/api/student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            this.transitionToRoute("student");

            return await response.json();
        },

    }
});
