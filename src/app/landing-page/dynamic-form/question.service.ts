import { Injectable } from '@angular/core';

import { QuestionBase } from './types/question-base';
import { DropdownQuestion } from './types/question-dropdown';
import { RadioQuestion } from './types/question-radio';
import { TextboxQuestion } from './types/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solidxx'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new RadioQuestion({
        key: 'radio',
        label: 'Radio',
        type: 'radio',
        options: [
          {key: '1',  value: 'Solidxx'},
          {key: '2',  value: 'Great'},
          {key: '3',   value: 'Good'},
          {key: '4', value: 'Unproven'}
        ],
        order: 3
      }),


      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

       new TextboxQuestion({
        key: 'emailAddress2',
        label: 'Email2',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}