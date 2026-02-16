Ext.define('App.common.comboBox.View', {
  extend: 'Ext.form.field.ComboBox',
  xtype: 'common-comboBox-view',

  displayField: 'name',
  valueField: 'id',
  filterPickList: true,
  editable: false,
  forceSelection: true,
  minChars: 1,
  queryMode: 'local',
  publishes: 'value',
  listConfig: {
    emptyText: 'Нет доступных записей...'
  }
})
