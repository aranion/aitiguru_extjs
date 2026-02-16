Ext.define('App.streets.filter.View', {
  extend: 'App.common.filter.View',
  xtype: 'streets-filter-view',
  cls: 'street-filter',

  requires: ['App.common.filter.View', 'App.common.comboBox.View'],

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
      emptyText: 'Улица',
      bind: {
        value: '{query.street}',
        hidden: '{!isEnableFilter}'
      }
    },
    {
      xtype: 'common-comboBox-view',
      emptyText: 'Ответственная компания',
      editable: true,
      bind: {
        value: '{query.responsibleCompany}',
        hidden: '{!isEnableFilter}',
        store: '{responsibleCompanyStore}'
      }
    },
    {
      xtype: 'numberfield',
      emptyText: 'Количеству домов',
      minValue: 0,
      bind: {
        value: '{query.quantityHome}',
        hidden: '{!isEnableFilter}'
      }
    },
    {
      xtype: 'container',
      margin: '0 5'
    },
    {
      xtype: 'fieldcontainer',
      layout: {
        type: 'hbox'
      },
      bind: {
        hidden: '{!isEnableFilter}'
      },
      fieldLabel: 'Население',
      padding: '0 0 0 1 0',
      defaultType: 'numberfield',
      defaults: {
        minValue: 0,
        triggers: {
          clear: {
            cls: 'x-form-clear-trigger',
            handler() {
              this.reset()
              this.focus()
            }
          }
        }
      },
      items: [
        {
          emptyText: 'От',
          bind: {
            value: '{query.populationFrom}',
            maxValue: '{query.populationTo ? query.populationTo : null}'
          }
        },
        {
          emptyText: 'До',
          bind: {
            value: '{query.populationTo}',
            minValue: '{query.populationFrom ? query.populationFrom : 0}'
          }
        }
      ]
    }
  ]
})
