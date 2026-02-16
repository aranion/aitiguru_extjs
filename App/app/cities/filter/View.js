Ext.define('App.cities.filter.View', {
  extend: 'App.common.filter.View',
  xtype: 'cities-filter-view',
  cls: 'cities-filter',

  items: [
    {
      xtype: 'button',
      enableToggle: true,
      hidden: false,
      iconCls: 'fas fa-filter',
      bind: {
        pressed: '{isEnableFilter}',
        tooltip: '{isEnableFilter ? "Скрыть" : "Показать" } фильтры',
        userCls: '{isFilterUsed ? "filter-used" : "" }'
      }
    },
    {
      xtype: 'textfield',
      emptyText: 'Город',
      bind: {
        value: '{query.city}',
        hidden: '{!isEnableFilter}'
      }
    },
    {
      xtype: 'common-comboBox-view',
      emptyText: 'Регион',
      bind: {
        value: '{query.region}',
        hidden: '{!isEnableFilter}',
        store: '{regionsStore}'
      }
    },
    {
      xtype: 'numberfield',
      emptyText: 'Население',
      minValue: 0,
      bind: {
        value: '{query.population}',
        hidden: '{!isEnableFilter}'
      }
    }
  ]
})
