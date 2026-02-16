Ext.define('App.streets.wndCreateStreet.Ctrl', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.streets-wndCreateStreet-ctrl',

  onCreateStreet() {
    const view = this.getView(),
      viewForm = view.down('form')

    if (viewForm.isValid()) {
      const values = viewForm.getValues(),
        newRecord = new App.models.Street(values)

      // Использование метода .updateRecord не вызывает convert в модели
      // const newRecord = viewForm.getRecord()
      // viewForm.updateRecord(newRecord)

      this.closeWnd(true, newRecord)
    }
  },
  onCloseWnd() {
    const view = this.getView(),
      viewForm = view.down('form'),
      form = viewForm.getForm()

    if (form.isDirty()) {
      this.showQuestionBeforeCloseWnd()
    } else {
      this.closeWnd()
    }
  },

  showQuestionBeforeCloseWnd() {
    Ext.Msg.show({
      title: 'Закрыть',
      message: 'Есть не сохраненные изменения, вы хотите закрыть окно?',
      buttons: Ext.Msg.YESNO,
      icon: Ext.Msg.QUESTION,
      scope: this,
      fn(btn) {
        switch (btn) {
          case 'yes':
            this.closeWnd()
            break
          case 'no':
          default:
            return
        }
      }
    })
  },
  closeWnd(wasSave, record) {
    const view = this.getView()

    view.wasSave = wasSave || false
    view.newRecord = record || null
    view.close()
  }
})
