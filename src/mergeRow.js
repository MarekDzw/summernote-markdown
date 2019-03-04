(function(factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
})(function($) {
  $.extend($.summernote.plugins, {
    mergeRow: function(context) {
      var self = this,
        ui = $.summernote.ui,
        options = context.options,
        $editor = context.layoutInfo.editor,
        $editable = context.layoutInfo.editable;
      editable = $editable[0];

      context.memo('button.mergeRow', function() {
        return ui
          .buttonGroup([
            ui.button({
              contents: '<b>Merge row<b>', //ui.icon(options.icons.bold),
              tooltip: 'Merge row',
              click: function(e) {
                self.toggleMergeRow();
              }
            })
          ])
          .render();
      });
      let td;
      let tr;

      $('body').on('click', 'td', function() {
        td = $(this);
        return td;
      });
      $('body').on('click', 'tr', function() {
        tr = $(this);

        return tr;
      });

      this.toggleMergeRow = function() {
        let pr = prompt('How many?');
        td.attr('rowspan', pr);
        let $num = tr.nextAll();
        var arr = [].slice.call($num);
        if (pr == '' || pr == undefined || pr == '1' || pr == '0') {
          return;
        } else {
          for (i = 0; pr - 1 > i; i++) {
            arr[i].firstChild.remove();
          }
        }
      };
    }
  });
});
