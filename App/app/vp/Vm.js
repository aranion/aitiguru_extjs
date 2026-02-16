Ext.define('App.vp.Vm', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.vp-vm',

  data: {
    dataCities: null,
    dataRegions: null,
    dataStreets: null,
    dataResponsibleCompany: null,
    selectedCity: null
  },

  stores: {
    regionsStore: {
      storeId: 'regionsStore',
      fields: ['id', 'name'],
      data: '{dataRegions}'
    },
    responsibleCompanyStore: {
      storeId: 'responsibleCompanyStore',
      fields: ['id', 'name'],
      data: '{dataResponsibleCompany}'
    }
  }
})
