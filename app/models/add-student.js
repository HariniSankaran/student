import Resource from '@zoho/ember-model-library/models/common/resource';

let StudentModel = Resource.extend({
    resourceUrl: '/api/student',
    resourceProperties : ['domain','image','name','year'],
  });

  StudentModel.reopenClass({
    responsePath: 'data'
  })

export default StudentModel;