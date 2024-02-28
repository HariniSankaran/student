import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

    store: service(),

    async model(params){
        console.log('get with param');
        return await this.store.find('student',`${params['student-id']}`).then(data => data);
    },
});
 