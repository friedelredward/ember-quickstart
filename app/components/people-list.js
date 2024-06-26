import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
    /**
     * There is a problem with this though 
     * – if you tried this in the browser,
     *  you will quickly discover that clicking on the buttons
     *  will bring up an alert dialog that said 
     * "The person's name is [Object MouseEvent]!" – eek!
The cause of this bug is that we wrote 
our action to take an argument 
– the person's name – and we forgot to pass it.
     * @param {*} person 
     */
  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }
}