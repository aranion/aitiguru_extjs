Ext.define('App.models.City', {
  extend: 'Ext.data.Model',

  idProperty: 'id',
  identifier: 'sequential',

  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'region',
      type: 'int'
    },
    {
      name: 'population',
      type: 'int'
    }
  ],

  proxy: {
    type: 'memory',
    enablePaging: true,
    reader: {
      type: 'json',
      rootProperty: 'items'
    }
  }
})
