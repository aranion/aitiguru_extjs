Ext.define('App.cities.View', {
  extend: 'App.common.grid.View',
  xtype: 'cities-view',
  viewModel: 'cities-vm',
  controller: 'cities-ctrl',

  title: 'Список городов',

  bind: {
    store: '{citiesStore}',
    selection: '{selectedCity}'
  },

  tbar: {
    overflowHandler: 'scroller',
    items: {
      xtype: 'cities-filter-view'
    }
  },

  columns: [
    { text: 'Название города', dataIndex: 'name' },
    {
      text: 'Регион',
      dataIndex: 'region',
      renderer(value, metaData, record, meta) {
        const vm = this.getViewModel(),
          regionsStore = vm.get('regionsStore')

        if (value) {
          const regionRecord = regionsStore.getById(value)

          if (regionRecord) {
            return regionRecord.get('name')
          }
        }

        return value
      }
    },
    { text: 'Население', dataIndex: 'population' }
  ]
})
