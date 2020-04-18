var expect = require('chai').expect;

describe('Tela de Login', () => {

  // Adding time out to make sure the app is load prior to test is run
  beforeEach(() => {
    $("~app-root").waitForDisplayed(11000, false)
  });

  it('espera que o login de sucesso', async => {
    $('~username').setValue("joao");
    $('~password').setValue("123456");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('success');
  });

  it('espera que o login de inválido', async => {
    $('~username').setValue("joao");
    $('~password').setValue("12345");

    $("~login").click();

    $("~loginstatus").waitForDisplayed(11000);
    const status = $("~loginstatus").getText();
    expect(status).to.equal('invalid');
  });
});