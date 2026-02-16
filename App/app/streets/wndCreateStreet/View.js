Ext.define('App.streets.wndCreateStreet.View', {
  extend: 'Ext.window.Window',
  xtype: 'streets-wndCreateStreet-view',
  controller: 'streets-wndCreateStreet-ctrl',

  title: 'Добавление улицы',

  width: 600,
  modal: true,
  constrain: true,

  items: [
    {
      xtype: 'form',
      bodyPadding: 10,
      layout: 'anchor',
      monitorValid: true,
      buttons: [
        {
          text: 'Создать',
          handler: 'onCreateStreet',
          disabled: true,
          formBind: true
        },
        {
          text: 'Закрыть',
          handler: 'onCloseWnd'
        }
      ],
      fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'under',
        labelWidth: 160,
        allowBlank: false,
        anchor: '99%',
        afterLabelTextTpl: [
          '<span style="color:#8b0000;font-weight:bold" data-qtip="Обязательно для заполнения"> * </span>'
        ]
      },
      items: [
        {
          xtype: 'textfield',
          fieldLabel: 'Название',
          minLength: 4,
          name: 'name'
        },
        {
          xtype: 'common-comboBox-view',
          fieldLabel: 'Отвечающая компания',
          name: 'responsibleCompany',
          store: 'responsibleCompanyStore',
          editable: true
        },
        {
          xtype: 'numberfield',
          fieldLabel: 'Дома',
          name: 'quantityHome',
          minValue: 0
        },
        {
          xtype: 'common-comboBox-view',
          fieldLabel: 'Город',
          name: 'city',
          store: 'citiesStore',
          editable: true
        }
      ]
    }
  ],

  initComponent() {
    this.callParent(arguments)

    // Новый Record будет формироваться из данных формы
    // const viewForm = this.down('form')
    // viewForm.loadRecord(new App.models.Street({}))
  }
})
