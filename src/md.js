import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import showdown from 'showdown';

let turndownService = new TurndownService();
turndownService.use(gfm);
let converter = new showdown.Converter();
let isShow = false;
converter.setOption('tables', 'true');

export let Markdown = function(context) {
  let ui = $.summernote.ui;
  let button = ui.button({
    contents: '<i class="fab fa-markdown"></i>',
    tooltip: 'Markdown',
    click: function() {
      let text = $('.note-editable');
      let code = $('.note-codable');
      $('table').addClass('table table-bordered');
      if (isShow == false) {
        toMarkdown(text, code);
      } else if (isShow == true) {
        toHTML(text, code);
      }
    }
  });

  let toMarkdown = (text, code) => {
    let markdown = turndownService.turndown(text.html());

    code.show();
    $('table').addClass('table table-bordered');
    code.val(markdown);

    isShow = true;
    return isShow;
  };

  let toHTML = (text, code) => {
    let md = code.val();
    let htmlParsed = converter.makeHtml(md);
    console.log(htmlParsed);
    code.hide();
    $('table').addClass('table table-bordered');
    text.html(htmlParsed);
    $('table').addClass('table table-bordered');
    isShow = false;

    return isShow;
  };

  return button.render();
};
