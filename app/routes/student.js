import Route from '@ember/routing/route';

export default Route.extend({

    isUpdate: false,

    async model(){
        return await fetch('/api/student').then(response=> response.json());
    },

    actions: {
        refreshmodel(){
            console.log('refresh is called');
            this.refresh();
        },
      
    }
});
