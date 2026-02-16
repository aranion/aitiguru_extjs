Ext.define('App.vp.View', {
  extend: 'Ext.panel.Panel',
  xtype: 'vp-view',
  viewModel: 'vp-vm',

  layout: {
    type: 'hbox',
    align: 'stretch'
  },

  items: [
    {
      xtype: 'cities-view',
      flex: 0.25
    },
    {
      xtype: 'splitter',
      collapseOnDblClick: false
    },
    {
      xtype: 'streets-view',
      flex: 0.75
    }
  ],

  initComponent() {
    this._fillMockData()
    this.callParent(arguments)
  },

  _fillMockData() {
    const vm = this.getViewModel(),
      cities = [],
      regions = [],
      streets = [],
      responsibleCompany = [],
      countStreets = 100,
      countCities = 100,
      countRegions = 10,
      countResponsibleCompany = 10

    for (let i = 1; i <= countRegions; i++) {
      regions.push({ id: i, name: `Регион ${i}` })
    }
    for (let i = 1; i <= countResponsibleCompany; i++) {
      responsibleCompany.push({ id: i, name: `Ответственная компания ${i}` })
    }
    for (let i = 1; i <= countCities; i++) {
      cities.push({
        id: i,
        name: `Город ${i}`,
        region: regions[Ext.Number.randomInt(0, countRegions - 1)].id,
        population: Ext.Number.randomInt(1000, 100000)
      })
    }
    for (let i = 1; i <= countStreets; i++) {
      streets.push({
        id: i,
        name: `Улица ${i}`,
        city: cities[Ext.Number.randomInt(0, countCities - 1)].id,
        responsibleCompany: responsibleCompany[Ext.Number.randomInt(0, countResponsibleCompany - 1)].id,
        quantityHome: i * Ext.Number.randomInt(1, 100)
      })
    }

    vm.set('dataCities', cities)
    vm.set('dataRegions', regions)
    vm.set('dataStreets', streets)
    vm.set('dataResponsibleCompany', responsibleCompany)
  }
})
