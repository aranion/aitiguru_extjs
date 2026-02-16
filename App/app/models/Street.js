Ext.define('App.models.Street', {
  extend: 'Ext.data.Model',

  idProperty: 'id',
  identifier: 'sequential',

  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'responsibleCompany',
      type: 'int'
    },
    {
      name: 'quantityHome',
      type: 'int'
    },
    {
      name: 'city',
      type: 'int'
    },
    {
      name: 'population',
      type: 'int',
      calculate(data) {
        const { quantityHome } = data,
          NEAR_PEOPLE = 750

        return quantityHome ? quantityHome * NEAR_PEOPLE : 0
      }
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
