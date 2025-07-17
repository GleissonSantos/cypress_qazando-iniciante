/// <reference types="cypress"  />

export default{
    clicarBtnCadastrar(){
        cy.get('#btnRegister').click()
    },

    checkErrormessage(message){
        cy.get('#errorMessageFirstName').then((element) =>{
            expect(element).to.be.visible
            expect(element.text()).eq(message)
        })
    },

    fillNamefield(name){
        cy.get('#user').type(name)
    },

    fillemailfield(email){
        cy.get('#email').type(email)
    },

     fillpasswordlfield(password){
        cy.get('#password').type(password)
    }
}