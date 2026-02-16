Ext.define('App.cities.Vm', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.cities-vm',

  data: {
    isEnableFilter: false,
    query: {
      city: null,
      region: null,
      population: null
    }
  },

  formulas: {
    isFilterUsed: {
      bind: {
        bindTo: '{query}',
        deep: true
      },
      get(query) {
        const { city, region, population } = query

        return city || region || population
      }
    }
  },

  stores: {
    citiesStore: {
      model: 'App.models.City',
      storeId: 'citiesStore',
      data: '{dataCities}',
      pageSize: 100,
      sorters: ['id', 'name'],
      filters: [
        {
          property: 'name',
          disableOnEmpty: true,
          anyMatch: true,
          value: '{query.city}'
        },
        {
          property: 'region',
          disableOnEmpty: true,
          exactMatch: true,
          value: '{query.region}'
        },
        {
          property: 'population',
          disableOnEmpty: true,
          value: '{query.population}',
          filterFn(record) {
            const value = this.getValue()

            return !value || record.get('population') >= value
          }
        }
      ]
    }
  }
})
