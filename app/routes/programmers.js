import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Adda Lovelace', 'Tim Berners-Lee', 'Linus Torvalds'];
  }
}
