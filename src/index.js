import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'summernote';
import 'summernote/dist/summernote.css';

import './imgAtr';
import './map';
import './video';
import './br';
import './mergeCell';
import './mergeRow';
import { Markdown } from './md';

$('#summernote').summernote({
  map: {
    apiKey: '',
    center: {
      lat: -33.8688,
      lng: 151.2195
    },
    zoom: 13
  },

  toolbar: [
    ['style', ['style']],
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
    ['insert', ['map', 'videoAttributes', 'media', 'link', 'hr', 'picture']],
    ['table', ['table']],
    ['mybutton', ['md']]
  ],
  buttons: {
    md: Markdown
  },
  popover: {
    table: [
      ['custom', ['tableHeaders', 'mergeCell', 'mergeRow']],
      ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
      ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
    ],
    image: [
      ['custom', ['imageAttributes']],
      ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
      ['float', ['floatLeft', 'floatRight', 'floatNone']],
      ['remove', ['removeMedia']]
    ],
    lang: 'en-US',
    imageAttributes: {
      icon: '<i class="note-icon-pencil"/>',
      removeEmpty: false,
      disableUpload: false
    }
  }
});
