Ext.define('App.streets.Vm', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.streets-vm',

  data: {
    isEnableFilter: false,
    query: {
      street: null,
      responsibleCompany: null,
      quantityHome: null,
      populationFrom: null,
      populationTo: null
    }
  },

  formulas: {
    isFilterUsed: {
      bind: {
        bindTo: '{query}',
        deep: true
      },
      get(query) {
        const { street, responsibleCompany, quantityHome, populationFrom, populationTo } = query

        return street || responsibleCompany || quantityHome || populationFrom || populationTo
      }
    }
  },

  stores: {
    streetsStore: {
      model: 'App.models.Street',
      data: '{dataStreets}',
      pageSize: 100,
      sorters: ['id', 'name'],
      filters: [
        {
          property: 'city',
          disableOnEmpty: true,
          value: '{selectedCity}',
          filterFn(record) {
            const value = this.getValue()

            return !value || record.get('city') === value.getId()
          }
        },
        {
          property: 'name',
          disableOnEmpty: true,
          anyMatch: true,
          value: '{query.street}'
        },
        {
          property: 'responsibleCompany',
          disableOnEmpty: true,
          exactMatch: true,
          value: '{query.responsibleCompany}'
        },
        {
          property: 'quantityHome',
          disableOnEmpty: true,
          exactMatch: true,
          value: '{query.quantityHome}'
        },
        {
          id: 'populationFrom',
          property: 'population',
          disableOnEmpty: true,
          value: '{query.populationFrom}',
          operator: '>='
        },
        {
          id: 'populationTo',
          property: 'population',
          disableOnEmpty: true,
          value: '{query.populationTo}',
          operator: '<='
        }
      ]
    }
  }
})
