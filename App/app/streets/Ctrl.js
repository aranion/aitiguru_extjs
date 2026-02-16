Ext.define('App.streets.Ctrl', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.streets-ctrl',

  onClickRemoveAction(view, recIndex, cellIndex, item, e, record) {
    this.removeRecordWithQuestion(record)
  },
  onClickAddStreet(sender) {
    this.createWndAddStreet()
  },
  onValidateEdit(editor, context) {
    context.cancel = true

    Ext.Msg.confirm('Подтверждение', 'Вы уверены, что хотите сохранить изменения?', function (btn) {
      if (btn === 'yes') {
        context.record.set(context.newValues)
        context.record.commit()
      } else {
        context.record.reject()
      }
      editor.cancelEdit()
    })
  },

  removeRecordWithQuestion(record) {
    if (record) {
      const name = record.get('name')

      Ext.Msg.show({
        title: 'Удаление',
        message: `Вы действительно хотите удалить запись "${name}"?`,
        buttons: Ext.Msg.YESNO,
        icon: Ext.Msg.QUESTION,
        scope: this,
        fn(btn) {
          switch (btn) {
            case 'yes':
              this.removeRecord(record)
              break
            case 'no':
            default:
              return
          }
        }
      })
    } else {
      Ext.log.error('Не задан record для удаления')
    }
  },
  removeRecord(record) {
    if (record) {
      record.store.remove(record)
      Ext.toast('Запись успешно удалена')
    } else {
      Ext.log.error('Не задан record для удаления')
    }
  },
  createWndAddStreet() {
    const viewWnd = Ext.create('App.streets.wndCreateStreet.View', {})

    viewWnd.show()
    viewWnd.on(
      'beforeclose',
      function (viewWnd) {
        const { wasSave, newRecord } = viewWnd

        if (wasSave && newRecord) {
          const vm = this.getViewModel(),
            streetsStore = vm.getStore('streetsStore'),
            dataStreets = vm.get('dataStreets')

          // streetsStore.add(newRecord)
          dataStreets.push(newRecord)
          vm.set('dataStreets', dataStreets)
          vm.notify()
          streetsStore.reload()
        }
      },
      this
    )
  }
})
