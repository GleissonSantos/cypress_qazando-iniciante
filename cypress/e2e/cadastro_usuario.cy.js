/// <reference types="cypress"  />
import { faker, Faker } from '@faker-js/faker';
import commum_page from '../support/pages/commum_page'
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import home_page from '../support/pages/home_page'

describe('Cadastro de usuário', () => {

        const name =  faker.person.fullName()
        const email = faker.internet.email()

    beforeEach('Acessar cadastro de usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    it('Campo Nome vazio', () => {

        cadastro_usuario_page.clicarBtnCadastrar()
        cadastro_usuario_page.checkErrormessage('O campo nome deve ser prenchido')

    })

    it('Campo E-mail vazio', () => {
        cadastro_usuario_page.fillNamefield(name)
        cadastro_usuario_page.clicarBtnCadastrar()
        cadastro_usuario_page.checkErrormessage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo E-mail inválido', () => {
        cadastro_usuario_page.fillNamefield(name)
        cadastro_usuario_page.fillemailfield('Teste')
        cadastro_usuario_page.clicarBtnCadastrar()
        cadastro_usuario_page.checkErrormessage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo senha vazia', () => {

        cadastro_usuario_page.fillNamefield(name)
        cadastro_usuario_page.fillemailfield(email)
        cadastro_usuario_page.clicarBtnCadastrar()
        cadastro_usuario_page.checkErrormessage('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo senha inválida', () => {

        cadastro_usuario_page.fillNamefield(name)
        cadastro_usuario_page.fillemailfield(email)
        cadastro_usuario_page.fillpasswordlfield('123')
        cadastro_usuario_page.clicarBtnCadastrar()
        cadastro_usuario_page.checkErrormessage('O campo senha deve ter pelo menos 6 dígitos')

    })

    // Função 'async', o await obriga o codigo esperar rodar o fake antes de passar para as proximas linhas
    it('Cadastro com sucesso', async () => {

        cadastro_usuario_page.fillNamefield(name)
        cadastro_usuario_page.fillemailfield(email)
        cadastro_usuario_page.fillpasswordlfield('123456')
        cadastro_usuario_page.clicarBtnCadastrar()
        home_page.checkRegistersucess(name)
    })

})