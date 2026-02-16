Ext.define('App.streets.View', {
  extend: 'App.common.grid.View',
  xtype: 'streets-view',
  viewModel: 'streets-vm',
  controller: 'streets-ctrl',

  requires: ['Ext.grid.plugin.RowEditing'],

  title: 'Список улиц',

  bind: {
    store: '{streetsStore}'
  },

  tbar: {
    overflowHandler: 'scroller',
    items: [
      {
        xtype: 'streets-filter-view'
      },
      '->',
      {
        xtype: 'button',
        iconCls: 'fas fa-plus',
        text: 'Добавить улицу',
        handler: 'onClickAddStreet'
      }
    ]
  },
  plugins: {
    rowediting: {
      clicksToEdit: 1,
      listeners: {
        validateedit: 'onValidateEdit'
      }
    }
  },

  columns: [
    {
      text: 'Название улицы',
      dataIndex: 'name',
      editor: {
        xtype: 'textfield',
        allowBlank: false
      }
    },
    {
      text: 'Ответственная компания',
      dataIndex: 'responsibleCompany',
      editor: {
        xtype: 'common-comboBox-view',
        emptyText: 'Ответственная компания',
        editable: true,
        allowBlank: false,
        bind: {
          store: '{responsibleCompanyStore}'
        }
      },
      renderer(value, metaData, record, meta) {
        const vm = this.getViewModel(),
          responsibleCompanyStore = vm.get('responsibleCompanyStore')

        if (value) {
          const responsibleCompanyRecord = responsibleCompanyStore.getById(value)

          if (responsibleCompanyRecord) {
            return responsibleCompanyRecord.get('name')
          }
        }

        return value
      }
    },
    {
      text: 'Количество домов',
      dataIndex: 'quantityHome',
      editor: {
        xtype: 'numberfield',
        allowBlank: false
      }
    },
    {
      text: 'Примерное население',
      dataIndex: 'population',
      renderer(value, metaData, record, meta) {
        return `~${value}`
      }
    },
    {
      xtype: 'actioncolumn',
      flex: null,
      width: 30,
      minWidth: 30,
      items: [
        {
          iconCls: 'fas fa-trash-alt',
          tooltip: 'Удалить',
          handler: 'onClickRemoveAction'
        }
      ]
    }
  ]
})
