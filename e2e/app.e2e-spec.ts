import { GerenciadorAcessosPage } from './app.po';

describe('gerenciador-acessos App', () => {
  let page: GerenciadorAcessosPage;

  beforeEach(() => {
    page = new GerenciadorAcessosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
