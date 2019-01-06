import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JsonEditorComponent, JsonEditorOptions} from 'ang-jsoneditor';
import {CloudinarySubtitleLibService} from '../../../../projects/cloudinary-subtitle-lib/src/lib/cloudinary-subtitle-lib.service';

@Component({
  selector: 'app-subtitle-form',
  templateUrl: './subtitle-form.component.html',
  styleUrls: ['./subtitle-form.component.css']
})
export class SubtitleFormComponent implements OnInit {

  formGroup: FormGroup;
  editorOptions: JsonEditorOptions;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  // videoPublicId = '/v1545227210/The_Present.mp4';
  // cloudName = 'candidate-evaluation';

  videoUrl = '';
  subs = {
    subtitles: [
      {
        'start-timing': '0:24.8',
        'end-timing': '0:27.2',
        'text': 'Hey Sweetie! Sorry I got home so late...'
      },
      {
        'start-timing': '0:27.2',
        'end-timing': '0:30.6',
        'text': 'but I had to pick something up after work.'
      }, {
        'start-timing': '0:30.6',
        'end-timing': '0:34.4',
        'text': 'It\'s such a beautiful day outside, you should let some sun inside.'
      }, {
        'start-timing': '0:39.4',
        'end-timing': '0:42.5',
        'text': 'Why don\'t you stop playing and open your present?'
      }, {
        'start-timing': '0:43.1',
        'end-timing': '0:44.8',
        'text': 'For me?'
      }, {
        'start-timing': '0:46.2',
        'end-timing': '0:49.6',
        'text': 'Yes Sir, I don\'t know why you didn\'t get the papers.'
      }, {
        'start-timing': '0:55.7',
        'end-timing': '0:57.7',
        'text': 'Woah! Cool!'
      }, {
        'start-timing': '1:08.1',
        'end-timing': '1:10.4',
        'text': 'She\'s gotta be kidding me!'
      }, {
        'start-timing': '1:17.5',
        'end-timing': '1:19.3',
        'text': 'GET LOST!?'
      }, {
        'start-timing': '3:04.7',
        'end-timing': '3:07.3',
        'text': 'MUM! WE\'LL BE OUTSIDE!'
      }
    ]
  };

  constructor(private formBuilder: FormBuilder, private cl:CloudinarySubtitleLibService) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.mode = 'code';
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      cloudName: ['candidate-evaluation', Validators.required],
      videoPublicId: ['/v1545227210/The_Present.mp4', Validators.required],
    });

  }

  updateJson(json) {
    this.subs = json;
  }

  onSubmit(formValues) {
    console.log(formValues);
    console.log(this.editor.get());

    // console.log(this.cl.addSubtitlesToVideo(formValues.cloudName, formValues.videoPublicId,this.subs));

    this.videoUrl = this.cl.addSubtitlesToVideo(formValues.cloudName,formValues.videoPublicId,this.editor.get());
  }

}
