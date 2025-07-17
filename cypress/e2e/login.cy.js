/// <reference types="cypress"  />

import { faker, Faker } from '@faker-js/faker';
import login_page from "../support/pages/login_page"
import commum_page from '../support/pages/commum_page'
import home_page from '../support/pages/home_page';


describe('Login', () => {

            const nome =  faker.person.fullName()
            const email =  faker.internet.email()
            const password = '123456'

    beforeEach('Acessar cadastro de usuário',  () => {
           
            commum_page.acessarLoginUsuario()
    })

    it('Login com email inválido', () => {

            login_page.fillEmailField('Email invalido')
            login_page.btnLoginClick()
            login_page.checkErrorMessage('E-mail inválido.')

    })

    it('Login com email vazio', () => {

            login_page.btnLoginClick()
            login_page.checkErrorMessage('E-mail inválido.')

    })  

    it('Login com senha vazia', () => {

            login_page.fillEmailField(email)
            login_page.btnLoginClick()
            login_page.checkErrorMessage('Senha inválida.')

    })

    it('Login com senha inválida', () => {

            login_page.fillEmailField(email)
            login_page.fillPasswordFiel('123')
            login_page.btnLoginClick()
            login_page.checkErrorMessage('Senha inválida.')

    })

    it('Login com sucesso', () => {

            commum_page.acessarCadastroUsuario()           
            commum_page.cadastroUsuarioComSucesso(nome, email, password)
            commum_page.acessarLoginUsuario()

            login_page.fillEmailField(email)
            login_page.fillPasswordFiel(password)
            login_page.btnLoginClick()
            home_page.checkLoginSucess(email)

    })

})

