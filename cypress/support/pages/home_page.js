/// <reference types="cypress"  />

export default{

    checkRegistersucess(name){
        cy.get('#swal2-title').then((element) =>{
            expect(element).to.be.visible
            expect(element.text()).eq('Cadastro realizado!')
        })

        cy.get('#swal2-html-container').then((element) =>{
            expect(element).to.be.visible
            expect(element.text()).eq(`Bem-vindo ${name}`)
        })
    },    

        checkLoginSucess(name){
        cy.get('#swal2-title').then((element) =>{
            expect(element).to.be.visible
            expect(element.text()).eq('Login realizado')
        })

        cy.get('#swal2-html-container').then((element) =>{
            expect(element).to.be.visible
            expect(element.text()).eq(`Olá, ${name}`)
        })
    }    
}