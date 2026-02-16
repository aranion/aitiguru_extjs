Ext.define('App.common.grid.View', {
  extend: 'Ext.grid.Panel',
  xtype: 'common-grid-view',

  enableColumnMove: true,
  columnLines: true,
  viewConfig: {
    markDirty: false,
    emptyText: 'Нет записей!'
  },
  selModel: {
    selType: 'rowmodel',
    allowDeselect: true
  },

  defaultColCfg: {
    align: 'left',
    minWidth: 100,
    flex: 1,
    menuDisabled: true,
    sortable: false
  },

  bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true
  },

  initComponent() {
    if (!Ext.isEmpty(this.defaultColCfg)) {
      if (this.columns) {
        for (let i = 0; i < this.columns.length; i++) {
          Ext.applyIf(this.columns[i], this.defaultColCfg)
        }
      }
    }
    this.callParent(arguments)
  }
})
