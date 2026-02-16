Ext.define('App.common.filter.View', {
  extend: 'Ext.form.Panel',
  xtype: 'common-filter-view',

  layout: {
    type: 'hbox'
  },

  defaults: {
    hidden: true,
    triggers: {
      clear: {
        cls: 'x-form-clear-trigger',
        handler() {
          this.reset()
          this.focus()
        }
      }
    }
  }
})
