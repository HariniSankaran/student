import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

    store: service(),

    isUpdate: false,

    async model() {
        console.log('eml');
        // let a = await this.store.findAll('student', {}, { headers: { type: 'GET'}}).then(data => data);
        return await this.store.findAll('student').then(data => data);
        //return await fetch('/api/student').then(response=> response.json());
    },

    actions: {
        refreshmodel(){
            console.log('refresh is called');
            this.refresh();
        },
      
    }
});
