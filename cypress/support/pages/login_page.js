/// <reference types="cypress"  />

export default{

    fillEmailField(email){
        cy.get('#user').type(email)
    },    

    fillPasswordFiel(password){
        cy.get('#password').type(password)
    },

    btnLoginClick(){
        cy.get('#btnLogin').click()
    },

    checkErrorMessage(message){
        cy.get('.invalid_input').then((element) =>{
            expect(element).to.be.visible
            expect(element.text()).eq(message)
        })
    },
}