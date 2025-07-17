/// <reference types="cypress"  />
import home_page from "./home_page"
//import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'

export default{
    acessarCadastroUsuario(){
        cy.visit('/').get('.header-logo')
        cy.get('.fa-lock').should('be.visible')
        cy.get('.fa-lock').click()
    },

    acessarLoginUsuario(){
        cy.visit('/').get('.header-logo')
        cy.get('.fa-user').should('be.visible')
        cy.get('.fa-user').click()
    },

    cadastroUsuarioComSucesso(name, email, password){

        cy.get('#user').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#btnRegister').click()
        home_page.checkRegistersucess(name)
    }
}