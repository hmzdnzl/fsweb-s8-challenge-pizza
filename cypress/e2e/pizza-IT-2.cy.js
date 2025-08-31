describe('Anasayfadaki tüm butonlar sipariş ver sayfasına yönlendirme yapabilmeli', () => {
  it('Anasayfadaki acıktım butonu sipariş ver sayfasına yönlendirme yapabilmeli', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()   
    
    //cy.get(`input[name="isim"]`).type('ab')
    //cy.get(`#isim-hata`).should('be.visible')
  })
  it('Anasayfadaki sipariş ver butonları sipariş ver sayfasına yönlendirme yapabilmeli', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
      
   cy.get(`#buttons`).click()
    
    //cy.get(`input[name="isim"]`).type('ab')
    //cy.get(`#isim-hata`).should('be.visible')
  })
  

  /*it('birden fazla malzeme seçilebilmeli', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
    cy.get(`#aciktim-button`).click()
    cy.get('input[value="Ananas"]').check()
    cy.get('input[value="Mısır"]').check()
    cy.get('input[value="Sucuk"]').check()
    cy.get('input[value="Salam"]').check()
  })
  it('ilgili kısımlar doldurulduktan sonra form başarılır bir şekilde gönderilebilmeli', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
    cy.get(`#aciktim-button`).click()
    cy.get('input[value="orta"]').check()
    cy.get('select[name="hamur"]').select('ince') 
    cy.get('input[value="Ananas"]').check()
    cy.get('input[value="Mısır"]').check()
    cy.get('input[value="Sucuk"]').check()
    cy.get('input[value="Salam"]').check()
     cy.get(`input[name="isim"]`).type('ali')
     cy.get(`#siparis-ver-butonu`).click()
  })*/
})
describe('Sipariş verirken formda doldurulması gereken yerler doldurulmayınca sipariş ver butonu aktif olmamalı', () => {
  it('Boyut seçimi yapılmadan sipariş ver butonu aktif olmamalı', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()  
      cy.get('#hamurkalinligi .selected').click();   
    cy.get('#hamurkalinligi .option').contains('İnce').click();
   cy.get('.c-container').contains('Ananas').click();
cy.get('.c-container').contains('Mısır').click();
cy.get('.c-container').contains('Sucuk').click();
cy.get('.c-container').contains('Salam').click();
cy.get(`input[name="isim"]`).type('ali')
cy.get('#siparis-ver-butonu').should('be.disabled');

  })
    it('Hamur kalınlığı seçimi yapılmadan sipariş ver butonu aktif olmamalı', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()  
      cy.get('input[value="Orta"]').check()
   cy.get('.c-container').contains('Ananas').click();
cy.get('.c-container').contains('Mısır').click();
cy.get('.c-container').contains('Sucuk').click();
cy.get('.c-container').contains('Salam').click();
cy.get(`input[name="isim"]`).type('ali')
cy.get('#siparis-ver-butonu').should('be.disabled');

  })
   it('Dörtten az malzeme seçimi yapılınca sipariş ver butonu aktif olmamalı', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()     
      cy.get('input[value="Orta"]').check()
       cy.get('#hamurkalinligi .selected').click();   
    cy.get('#hamurkalinligi .option').contains('İnce').click();
   cy.get('.c-container').contains('Ananas').click();
cy.get('.c-container').contains('Mısır').click();
cy.get('.c-container').contains('Sucuk').click();

cy.get(`input[name="isim"]`).type('ali')
cy.get('#siparis-ver-butonu').should('be.disabled');

  })

   it('Ondan fazla malzeme seçimi yapılınca sipariş ver butonu aktif olmamalı', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()     
      cy.get('input[value="Orta"]').check()
       cy.get('#hamurkalinligi .selected').click();   
    cy.get('#hamurkalinligi .option').contains('İnce').click();
   cy.get('.c-container').contains('Ananas').click();
cy.get('.c-container').contains('Mısır').click();
cy.get('.c-container').contains('Sucuk').click();
cy.get('.c-container').contains('Kabak').click();
cy.get('.c-container').contains('Biber').click();
cy.get('.c-container').contains('Sosis').click();
cy.get('.c-container').contains('Sarımsak').click();
cy.get('.c-container').contains('Salam').click();
cy.get('.c-container').contains('Soğan').click();
cy.get('.c-container').contains('Domates').click();
cy.get('.c-container').contains('Jalepeno').click();
cy.get(`input[name="isim"]`).type('ali')
cy.get('#siparis-ver-butonu').should('be.disabled');

  })

    it('İsim 3 karakterden az girilirse sipariş ver butonu aktif olmamalı', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()     
      cy.get('input[value="Orta"]').check()
       cy.get('#hamurkalinligi .selected').click();   
    cy.get('#hamurkalinligi .option').contains('İnce').click();
   
cy.get('.c-container').contains('Salam').click();
cy.get('.c-container').contains('Soğan').click();
cy.get('.c-container').contains('Domates').click();
cy.get('.c-container').contains('Jalepeno').click();
cy.get(`input[name="isim"]`).type('al')
cy.get('#siparis-ver-butonu').should('be.disabled');

  })
      it('Bütün form doğru girilirse sipariş ver butonu aktif olmalı', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()     
      cy.get('input[value="Orta"]').check()
       cy.get('#hamurkalinligi .selected').click();   
    cy.get('#hamurkalinligi .option').contains('İnce').click();   
cy.get('.c-container').contains('Salam').click();
cy.get('.c-container').contains('Soğan').click();
cy.get('.c-container').contains('Domates').click();
cy.get('.c-container').contains('Jalepeno').click();
cy.get(`input[name="isim"]`).type('ali')
cy.get('#siparis-ver-butonu').should('not.be.disabled');
  })
  
  //it('Anasayfadaki sipariş ver butonları sipariş ver sayfasına yönlendirme yapabilmeli', () => {
    
  //})
  

  /*it('birden fazla malzeme seçilebilmeli', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
    cy.get(`#aciktim-button`).click()
    cy.get('input[value="Ananas"]').check()
    cy.get('input[value="Mısır"]').check()
    cy.get('input[value="Sucuk"]').check()
    cy.get('input[value="Salam"]').check()
  })
  it('ilgili kısımlar doldurulduktan sonra form başarılır bir şekilde gönderilebilmeli', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
    cy.get(`#aciktim-button`).click()
    cy.get('input[value="orta"]').check()
    cy.get('select[name="hamur"]').select('ince') 
    cy.get('input[value="Ananas"]').check()
    cy.get('input[value="Mısır"]').check()
    cy.get('input[value="Sucuk"]').check()
    cy.get('input[value="Salam"]').check()
     cy.get(`input[name="isim"]`).type('ali')
     cy.get(`#siparis-ver-butonu`).click()
  })*/
})

describe('Sipariş başarılı bir şekilde verildiğinde siparişin alındığına dair sayfaya gidilmeli', () => {
  
      it('Sipariş başarılı olunca sipariş özetinin olduğu sayfaya yöndirme yapılabilmeli', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:5173/')
   cy.get(`#aciktim-button`).click()     
      cy.get('input[value="Orta"]').check()
       cy.get('#hamurkalinligi .selected').click();   
    cy.get('#hamurkalinligi .option').contains('İnce').click();   
cy.get('.c-container').contains('Salam').click();
cy.get('.c-container').contains('Soğan').click();
cy.get('.c-container').contains('Domates').click();
cy.get('.c-container').contains('Jalepeno').click();
cy.get(`input[name="isim"]`).type('ali')
cy.get('#siparis-ver-butonu').click();

  })    
  })