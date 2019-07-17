import Component from '@ember/component';
import { computed } from '@ember/object';
import { get } from '@ember/object';

export default Component.extend({
  isCorrect: computed('response', function () {
    return this.response === get(this, 'answer')
  }),
});
